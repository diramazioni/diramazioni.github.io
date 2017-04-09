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

  $('#navbar_toggle').click(function(event) {
    event.preventDefault();
    nav_toggle = !nav_toggle;
    $('.accordion_menu').slideToggle(nav_toggle);
  })

  $('#menu').on('active', function () { //sticky
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

    // if ( nav_toggle === false ) {
    //   nav_toggle = true;
    //   $('.accordion_menu').slideToggle();
    // }
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

  var half = parseInt($('#smenu').css('height'), 10)/2;
  $(".toc").find('a').hover(function(e) {
    var position = $(this).position();
    $('#smenu').animate({
      top: position.top + posY - half + 'px'
    }, 100); //left:$xp +'px',

  });

/// Gallery


$('.img_toggle, .img_link').click(function(event) {
  event.preventDefault();
  // img_toggle.toggle();
  $('#image_slider').attr('data-id', $(this).attr('data-id'));
  // $('#image_slider').toggle();

});

UIkit.toggle('.img_toggle, .img_link', {
  target: '#image_slider',
  animation: 'uk-animation-fade',
  duration: 250
});

function _getImgIndex(id) {
  var found = 0;
  $.each(img_json, function(index, el) {
    if (el.id == id) {
      found = index;
    }
  });
  return found;
}


function load_slider(element) {
  var img_id = $(element).attr('data-id');
  var i = _getImgIndex(img_id);
  console.log(i);
  $('#image_full').attr('src', img_json[i].src);
  if (i-1 < 0) {
    $('#image_prev').attr('hidden', '');
  } else {
    $('#image_prev').off('click');
    $('#image_prev').removeAttr("hidden").attr('data-id', img_json[i-1].id).click(function(event) {
      event.preventDefault();
      load_slider(this);
    });
  }
  if (i+1 > img_json.lenght) {
    $('#image_next').attr('hidden', '');
  } else {
    $('#image_next').off('click');
    $('#image_next').removeAttr("hidden").attr('data-id',  img_json[i+1].id).click(function(event) {
      event.preventDefault();
      load_slider(this);
    });
  }
}

$('#image_slider').on('beforeshow', function(e) {
  load_slider(this);
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
