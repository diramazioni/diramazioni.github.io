/*
var WindowsSize=function(){

    var h=$(window).height(),
      w=$(window).width();
  $('#smenu').animate({ right: '30px', top:'30px'}, 100) ;
};
$(document).ready(WindowsSize);
$(window).resize(WindowsSize);
*/
import $ from 'jquery';
import UIkit from 'uikit';
import Icons from 'uikit-icons';
window.UIkit = UIkit;
UIkit.use(Icons);


$(document).ready(function() {

  var nav_toggle = UIkit.toggle('#navbar_toggle', {
    target: '.accordion_menu',
    animation: 'uk-animation-fade'
  });
  $('#menu').on('active', function () { //sticky
    $('.navbar_toggle').addClass('sticky_toggle', 500);
    console.log('to ' + nav_toggle.isToggled());
    nav_toggle.toggle();
    // $('.accordion_menu').addClass('sticky_menu', 500);
  });
  $('#menu').on('inactive', function () { //un-sticky
    console.log('fr ' + nav_toggle.isToggled());
    $('.navbar_toggle').removeClass('sticky_toggle', 500);
    // $('.accordion_menu').removeClass('sticky_menu', 500);
  });
  //uk-toggle="target: .accordion_menu; animation: uk-animation-fade


  // $( window ).scroll(function() {
  //
  // });

  var posY = 0;
  letters = ['E', 'L', 'I']
  $.each(letters, function(i, letter) {
    console.log(letter);

    $('#let_' + letter).hover(
      function() {
        letterOUT(this.id, "#a00", 40);
      },
      function() {
        letterIN(this.id, "#a00");
      }
    );
  });


  /*  $('.explode').trigger("mouseover");
  setTimeout(function() {
    console.log('hover0')
      $('.explode').trigger("mouseout");
  }, 700);*/

  $('#offcanvas-nav').on('show', function(e) {
    var w = $(this).find('div').first().css('width');
    $('#smenu').css({
      right: w
    });
  });
  $('#offcanvas-nav').on('hide', function(e) {
    if (e.target.id == 'offcanvas-nav') {
      $('#smenu').animate({
        right: '15px',
        top: '15px'
      }, 100);
    }
  });
  var half = parseInt($('#smenu').css('height'), 10)/4;
  $("#offcanvas-nav").find('a.menuitem').hover(function(e) {
    var position = $(this).position();
    $('#smenu').animate({
      top: position.top + posY - half + 'px'
    }, 100); //left:$xp +'px',

  });

}); // end doc ready
