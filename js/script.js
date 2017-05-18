$(document).ready(function(){

  function autoresize(textarea) {
    textarea.style.height = '0px';     //Reset height, so that it not only grows but also shrinks
    textarea.style.height = (textarea.scrollHeight+10) + 'px';    //Set new height
  }

  $('.autosize').keyup(function () {
    autoresize(this);
  });

//end
});
