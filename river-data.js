
function calculate() {
    $( "#ValueForm" ).validate({
        
    });
    
if ($( "#ValueForm" ).valid()) {
    
 /* Variables */
var location = document.getElementById("location").value;

var fromdate = document.getElementById("Date").value;


    
 /* URL for AJAX Call */


/* AJAX Method (POST or GET) */
var myMethod = "GET";

/* Make sure the document is ready */
$(document).ready(function() { 

    /* Perform AJAX call - Note that the AJAX function does not have any data */
    $.ajax({
      method: myMethod,
      url: "https://waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=07055646,%2007055680,%2007055660,%2007055780&parameterCd=00065&siteStatus=active",
	    dataType: 'json',
	    data: '',
	    success: function(json)
	    {
		    for (i = 0; i < 4; i++)
			    
	    }
    })

    /* AJAX complete - result is in msg */
      .done(function( msg ) {

			/*jsonresult = msg["history"]['2020-01-07']['close']*/
			var dates = [];		// contains the date for each data point
			var values = [];	// contains the closing value for each data point

			i = 0;
			// loop through each day and get the keydate - see https://www.w3schools.com/js/js_json_objects.asp
			for (var datekey in msg.history) {
				dates[i] = datekey;
				// Now that we have the key, get the value
  				values[i] = msg.history[datekey];
				i = i + 1;
			}

			var ctx = document.getElementById("chartjs-0");
			var myChart = new Chart(ctx, {
			"type":"line",
			"data": {
				"labels": dates,
				"datasets":[{"label": "One " + basecurrency + " to " + convertcurrency,
				"data": values,
				"fill":false,
				"borderColor":"rgb(75, 192, 192)",
				"lineTension":0.1}]},
				"options":{ 
					responsive: false,
					maintainAspectRatio: true,
					title: {
						display: true,
						text: basecurrency + " to " + convertcurrency,
						fontSize : 18
					},
					scales: {
						xAxes: [{
							type: 'time',
							time: {
									displayFormats: {
									day: 'MMM D'
								}
							}
						}],

						yAxes: [{
							scaleLabel: {
								display: true,
								labelString: convertcurrency
							}
						}]

					}
				}
			});
    });
});
}
}
        
function clearForm() {
    document.getElementById("location").value = "";
    document.getElementById("Date").value = "";
    document.getElementById("ajaxresult").value="";
}

