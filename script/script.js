$(document).ready(function(){
lastNo = '';

  $('.work-thum').on('click', function(){
    var workNo = '#work' + $(this).attr("id");
    if (workNo === lastNo) {
      $(workNo).toggle('fast');
      lastNo = '';
    } else {
      $('.work').hide('fast');
      $(workNo).show('fast');
      $("html,body").animate({scrollTop:$('#works').offset().top});
      lastNo = workNo;
    }

  })
})
