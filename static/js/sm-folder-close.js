$(document).ready(function(){
  alertBtnClick1()
  $('#sm-folder-close').click(function() {
    $('#nav-toggle')[0].checked  = false
  })
  $('.diamond-select1-text').text(JSON.parse(sessionStorage.getItem('diamondValue')).text)
})
function alertBtnClick1() {
  let btn = document.getElementsByClassName('alert-btn1')
  btn[0].addEventListener('click', function(event) {
    alert(JSON.parse(sessionStorage.getItem('diamondValue')).text)
  })
}