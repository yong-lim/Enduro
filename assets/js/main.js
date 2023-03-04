$(document).ready(function () {
  const now = new Date();
  console.log("[" + now.toUTCString() + "] In main.js of enduro-form.");

  $("select").formSelect();

  // Create your validation helper text
  var validationMessage = '<span class="helper-text" data-error="Please choose your race class"></span>';
  // Place it in the dom
  $('.select-wrapper input').after(validationMessage);
  // Error logic
  var select = jQuery('.select-wrapper input')[0];
  $('.submit-btn').on('click',function(){
    if ( jQuery('ul.select-dropdown li:not(.disabled).selected').length < 1 ) {
      $(select).addClass('invalid');
    }     
    
  });

  $('.materialboxed').materialbox();
  $('.scrollspy').scrollSpy();

  changeColor();
});

function changeColor(){
  var options_elem = document.querySelectorAll(".dropdown-content li>a, .dropdown-content li>span");
  const alt_color  = ["deep-purple-text", "teal", "lighten-5"];
  //index==0 is the disabled option element
  options_elem.forEach(function(element, index){
    if (index == 2 || index == 4 || index == 6) element.classList.add(...alt_color);
  });
}


