var modal;
    function getCookie(name)
{
  var re = new RegExp(name + "=([^;]+)");
  var value = re.exec(document.cookie);
  return (value != null) ? unescape(value[1]) : null;
}
    function openModal(){
        modal = new tingle.modal({
            footer: true,
            stickyFooter: true,
            closeMethods: ['overlay', 'escape'],
            closeLabel: "Close",
            cssClass: ['modal'],
            onOpen: function() {
            //    console.log('modal open');
            },
            onClose: function() {
            //    console.log('modal closed');
            },
            beforeClose: function() {
                // here's goes some logic
                // e.g. save content before closing the modal
                return true; // close the modal

            }
        });
        var ga = '';
        if(getCookie('_ga') !== null){
            ga = '?ga=' + getCookie('_ga');
        }
        var modalContent = '<iframe id="booknowframe" src="https://buffaloriver.azurewebsites.net/dist/index.html'  + ga + '" style="height:100%; width:100%; border:0;"></iframe>';


        modal.setContent(modalContent);
        modal.addFooterBtn('Close', 'tingle-btn tingle-btn--primary', function() {

            modal.close();
        });
        modal.open();
    }
    $(window).on("message", function (e) {
        if (e.originalEvent.data == 'bookingfinished') {
            modal.close();
        }
    });


    $(document).ready(function() {

      $('#PrimaryNavToggle').click(function() {
        $('#MobileMenu').toggleClass('expanded');
      });
      $('#booknowframe').on('load', function() {
        $('.loader').hide();
      });
      if(window.location.href.endsWith('#modal')){
        openModal();
      }





    });