/*
var WindowsSize=function(){

    var h=$(window).height(),
      w=$(window).width();
  $('#smenu').animate({ right: '30px', top:'30px'}, 100) ;
};
$(document).ready(WindowsSize);
$(window).resize(WindowsSize);
*/
// import $ from 'jquery';
// import UIkit from 'uikit';
// import Icons from 'uikit-icons';
// UIkit.use(Icons);

$(document).ready(function() {
  var nav_toggle = false;
  var menuTop = $('#menu').position().top;
  $('.accordion_menu').css({top: parseInt(menuTop, 10)+40});

  $('#navbar_toggle').click(function(event) {
    event.preventDefault();
    nav_toggle = !nav_toggle;
    $('.accordion_menu').slideToggle(nav_toggle);
  })
  // var nav_toggle = UIkit.toggle('#navbar_toggle', {
  //   target: '.accordion_menu',
  //   animation: 'uk-animation-fade'
  // });
  $('#menu').on('active', function () { //sticky
    menuTop = 0;
    $('nav').addClass('sticky_toggle shadows', 500);
    $('#smenu > svg').addClass('smaller', 500);
    if ( nav_toggle === true ) {
      nav_toggle = false;
      $('.accordion_menu').toggle("slow");
    }
  });
  $('#menu').on('inactive', function () { //un-sticky
    $('nav').removeClass('sticky_toggle shadows', 500);
    $('#smenu > svg').removeClass('smaller', 500);

    menuTop = $('#menu').position().top;
    if ( nav_toggle === false ) {
      nav_toggle = true;
      $('.accordion_menu').slideToggle();

      // $('.accordion_menu').css({top: parseInt(menuTop, 10)+40});
    }
  });


  // $( window ).scroll(function() {
  //
  // });
  var posY = 0;
  var letters = ['E', 'L', 'I'];
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
    $('#smenu').addClass('side-menu_toggle');
    $('#smenu>svg').animate({
      width: '30px',
    }, 300);
    $('#smenu').animate({
      right: w,
    }, 200);
  });
  $('#offcanvas-nav').on('hide', function(e) {
    if (e.target.id == 'offcanvas-nav') {
      $('#smenu>svg').animate({
        width: '80px',
      }, 100);
      $('#smenu').removeClass('side-menu_toggle');
    }
  });
  console.log();

  var half = parseInt($('#smenu').css('height'), 10)/2;
  $(".toc").find('a').hover(function(e) {
    var position = $(this).position();
    $('#smenu').animate({
      top: position.top + posY - menuTop - half + 'px'
    }, 100); //left:$xp +'px',

  });

$('.highlight').addClass('codehilite');

$('#lektor-edit-link').css( "top", '150px');

}); // end doc ready



////////// utils





var initial = {};

function letterOUT(letter, fillColor, radius) {
  // console.log('letterOUT'+letter);
  $('#'+letter).find('rect').each(function() {

    if (!($(this).attr('id') in initial)) {
      initial[$(this).attr('id')] = [$(this).attr('x'), $(this).attr('y')]
    }
    $(this).animate({
      top: rIntRange(-radius, radius)
    },{
      step: function(ry,fx){
        // var col = 'rgb('+Math.floor(Math.abs(ry))+', 0,0)'
        $(this).attr('y', ry);
        // $(this).attr('fill', fillColor );
        if (ry>0) {$(this).attr('rx', ry)};

      },
      duration: 500
    });


  });
}
function letterIN(letter, fillColor) {
  $('#'+letter).find('rect').each(function() {
    var start = initial[$(this).attr('id')]
    $(this).animate({
      top: start[1],
    },{
      step: function(ry,fx){
        $(this).attr('y', ry);
        // $(this).attr('fill', fillColor);

      },
      duration: 500
    }
   );
  });
}
function rIntRange(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}
function rIntPosNeg(max) {
  var nh = Math.floor(Math.random() * max)
  if (Math.random() < 0.5) {nh = nh * -1}
  return nh;
}
