/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = Icons;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = UIkit;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uikit__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_uikit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_uikit_icons__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_uikit_icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_uikit_icons__);
/*
var WindowsSize=function(){

    var h=$(window).height(),
      w=$(window).width();
  $('#smenu').animate({ right: '30px', top:'30px'}, 100) ;
};
$(document).ready(WindowsSize);
$(window).resize(WindowsSize);
*/



window.UIkit = __WEBPACK_IMPORTED_MODULE_1_uikit___default.a;
__WEBPACK_IMPORTED_MODULE_1_uikit___default.a.use(__WEBPACK_IMPORTED_MODULE_2_uikit_icons___default.a);


__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).ready(function() {

  var nav_toggle = __WEBPACK_IMPORTED_MODULE_1_uikit___default.a.toggle('#navbar_toggle', {
    target: '.accordion_menu',
    animation: 'uk-animation-fade'
  });
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#menu').on('active', function () { //sticky
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.navbar_toggle').addClass('sticky_toggle', 500);
    console.log('to ' + nav_toggle.isToggled());
    nav_toggle.toggle();
    // $('.accordion_menu').addClass('sticky_menu', 500);
  });
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#menu').on('inactive', function () { //un-sticky
    console.log('fr ' + nav_toggle.isToggled());
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.navbar_toggle').removeClass('sticky_toggle', 500);
    // $('.accordion_menu').removeClass('sticky_menu', 500);
  });
  //uk-toggle="target: .accordion_menu; animation: uk-animation-fade


  // $( window ).scroll(function() {
  //
  // });

  var posY = 0;
  letters = ['E', 'L', 'I']
  __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.each(letters, function(i, letter) {
    console.log(letter);

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#let_' + letter).hover(
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

  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#offcanvas-nav').on('show', function(e) {
    var w = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).find('div').first().css('width');
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#smenu').css({
      right: w
    });
  });
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#offcanvas-nav').on('hide', function(e) {
    if (e.target.id == 'offcanvas-nav') {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#smenu').animate({
        right: '15px',
        top: '15px'
      }, 100);
    }
  });
  var half = parseInt(__WEBPACK_IMPORTED_MODULE_0_jquery___default()('#smenu').css('height'), 10)/4;
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#offcanvas-nav").find('a.menuitem').hover(function(e) {
    var position = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).position();
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#smenu').animate({
      top: position.top + posY - half + 'px'
    }, 100); //left:$xp +'px',

  });

}); // end doc ready


/***/ })
/******/ ]);