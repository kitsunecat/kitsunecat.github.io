// jQuery
$(document).ready(function(){

//workのサムネイルをクリックしたら詳細をスライドして開く
  $('.work-thum').on('click', function(){
    var workNo = '#work' + $(this).attr("id");  //work番号を取得
    $('.work').hide('fast'); //開いているworkを閉じる
    $(workNo).show('fast'); //開いているworkを閉じる
  })
})
