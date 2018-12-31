// jQuery
$(document).ready(function(){
lastNo = '';

//workのサムネイルをクリックしたら詳細をスライドして開く
  $('.work-thum').on('click', function(){
    $('.work').hide('fast');
    var workNo = '#work' + $(this).attr("id");
    if (workNo === lastNo) {
      console.log(workNo);
      console.log(lastNo);
      return;
    }
    $(workNo).show('fast');
    $("html,body").animate({scrollTop:$('#works').offset().top});
    lastNo = workNo;
  })
})
