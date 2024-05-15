$(document).ready(function(){
  // $(".edit-container").hide(0);
  $('.profile-avatar-edit').click(function(){
    $(".edit-title").hide(500);
    $(".edit-container").show(500);
    $('#profile-avatar-input').val(function() {
      return $(".edit-title").children()[0].innerText
    })
  })
  $('#profile-avatar-cancel').click(function(){
    $(".edit-title").show(500);
    $(".edit-container").hide(500);
  })
  $('#profile-avatar-save').click(function(){
    $(".edit-title").children()[0].innerText = $('#profile-avatar-input').val()
    $(".edit-title").show(500);
    $(".edit-container").hide(500);
  })
});