

/* AJAX Method (POST or GET) */
var myMethod = "GET";

/* Make sure the document is ready */
$(document).ready(function() { 

    /* Perform AJAX call - Note that the AJAX function does not have any data */
    $.ajax({
      method: myMethod,
      url: "https://waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=07055646,%2007055680,%2007055660,%2007055780&parameterCd=00065&siteStatus=active"
	   
    /* AJAX complete - result is in msg */
      .done(function( msg ) {

		var dates = [];
    var values = [];

/* Site 1 */
/* fLen contains the length of the array (number of values) */
fLen = msg.value.timeSeries[0].values[0].value.length
for (i = 0; i < fLen; i++) {
    values[i] = msg.value.timeSeries[0].values[0].value[i].value
	dates[i] = msg.value.timeSeries[0].values[0].value[i].dateTime
}
var sitename = msg.value.timeSeries[0].sourceInfo.siteName
var sitecode = msg.value.timeSeries[0].sourceInfo.siteCode[0].value
var siteDescription = msg.value.timeSeries[0].variable.variableDescription


                    var ctx = document.getElementById("chartjs-0");
                    var myChart = new Chart(ctx, {
                        "type": "line",
                        "data": {
                            "labels": dates,
                            
                            "fontColor": "rgb(75, 192, 192)",
                            "datasets": [{
                                "label": "Gauge Height",
                                "data": values,
                                "fill": false,
                                fontColor: "#FFFFFF",
                             
                                "borderColor": "#E8B264",
                                "lineTension": 0.1
                            }]
                        },
                        "options": {
                            responsive: false,
                            maintainAspectRatio: true,
                            title: {
                                display: true,
                                text: sitename + ' - PID: ' + sitecode,
                                fontSize: 18
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
                                        labelString: siteDescription
                                    }
                                }]

                            }
                        }
                    });

                    var dates = [];
                    var values = [];

                    fLen = msg.value.timeSeries[1].values[0].value.length
                    for (i = 0; i < fLen; i++) {
                        values[i] = msg.value.timeSeries[1].values[0].value[i].value
                        dates[i] = msg.value.timeSeries[1].values[0].value[i].dateTime
                    }
                    var sitename = msg.value.timeSeries[1].sourceInfo.siteName
                    var sitecode = msg.value.timeSeries[1].sourceInfo.siteCode[0].value
                    var siteDescription = msg.value.timeSeries[1].variable.variableDescription

                    var ctx = document.getElementById("chartjs-1");
                    var myChart = new Chart(ctx, {
                        "type": "line",
                        "data": {
                            "labels": dates,
                            "datasets": [{
                                "label": "Gauge Height",
                                "data": values,
                                "fill": false,
                                
                                "lineTension": 0.1
                            }]
                        },
                        "options": {
                            responsive: false,
                            maintainAspectRatio: true,
                            title: {
                                display: true,
                                text: sitename + ' - PID: ' + sitecode,
                                fontSize: 18
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
                                        labelString: siteDescription
                                    }
                                }]

                            }
                        }
                    });

                    var dates = [];
                    var values = [];
                
                fLen = msg.value.timeSeries[2].values[0].value.length
                    for (i = 0; i < fLen; i++) {
                        values[i] = msg.value.timeSeries[2].values[0].value[i].value
                        dates[i] = msg.value.timeSeries[2].values[0].value[i].dateTime
                    }
                    var sitename = msg.value.timeSeries[2].sourceInfo.siteName
                    var sitecode = msg.value.timeSeries[2].sourceInfo.siteCode[0].value
                    var siteDescription = msg.value.timeSeries[2].variable.variableDescription

                    var ctx = document.getElementById("chartjs-2");
                    var myChart = new Chart(ctx, {
                        "type": "line",
                        "data": {
                            "labels": dates,
                            "datasets": [{
                                "label": "Gauge Height",
                                "data": values,
                                "fill": false,
                                "borderColor": "rgb(75, 192, 192)",
                                "lineTension": 0.1
                            }]
                        },
                        "options": {
                            responsive: false,
                            maintainAspectRatio: true,
                            title: {
                                display: true,
                                text: sitename + ' - PID: ' + sitecode,
                                fontSize: 18
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
                                        labelString: siteDescription
                                    }
                                }]

                            }
                        }
                    });

                    var dates = [];
                    var values = [];
                
                fLen = msg.value.timeSeries[3].values[0].value.length
                    for (i = 0; i < fLen; i++) {
                        values[i] = msg.value.timeSeries[3].values[0].value[i].value
                        dates[i] = msg.value.timeSeries[3].values[0].value[i].dateTime
                    }
                    var sitename = msg.value.timeSeries[3].sourceInfo.siteName
                    var sitecode = msg.value.timeSeries[3].sourceInfo.siteCode[0].value
                    var siteDescription = msg.value.timeSeries[3].variable.variableDescription

                    var ctx = document.getElementById("chartjs-3");
                    var myChart = new Chart(ctx, {
                        "type": "line",
                        "data": {
                            "labels": dates,
                            "datasets": [{
                                "label": "Gauge Height",
                                "data": values,
                                "fill": false,
                                "borderColor": "rgb(75, 192, 192)",
                                "lineTension": 0.1
                            }]
                        },
                        "options": {
                            responsive: false,
                            maintainAspectRatio: true,
                            title: {
                                display: true,
                                text: sitename + ' - PID: ' + sitecode,
                                fontSize: 18
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
                                        labelString: siteDescription
                                    }
                                }]

                            }
                        }
                    });
})
    });
      
