$(document).ready(function(){
  $('#contacts').on('shown.bs.modal', function () {
    $('#myInput').focus();
  });

  $('#order').on('shown.bs.modal', function () {
    $('#myInput').focus();
  });
});
