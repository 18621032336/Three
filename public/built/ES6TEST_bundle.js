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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************************************!*\
  !*** ./public/dist/script/test/ES6Test.js ***!
  \********************************************/
/***/ function(module, exports) {

	//var [a,b,c] = [1, 2, 3]
	//
	//console.log(a);
	//console.log(b);
	//console.log(c);
	
	//function* fibs() {
	//  var a = 0;
	//  var b = 1;
	//  while (true) {
	//    yield a;
	//    [a, b] = [b, a + b];
	//  }
	//}
	//
	//var [first, second, third, fourth, fifth, sixth] = fibs();
	
	//var [foo = true] = [];
	//console.log(foo); // true
	
	//var {foo,bar} = {foo: '1', bar: '2'};
	//console.log(foo)
	//console.log(bar)
	
	//var {first:f, last:l} = {first: 1, last: 2};
	//console.log(f)
	//console.log(l)
	
	//var obj = {
	//  p: [
	//    'hello',
	//    {
	//      y: 'world'
	//    }
	//  ]
	//};
	//
	//var {p:[x,{y}]} = obj;
	//console.log(x, y)
	
	//var arr = [];
	//var obj = {};
	//
	//({foo:obj.prop,bar:arr[0]} = {foo: 1, bar: 2});
	//
	//console.dir(arr);
	//console.dir(obj);
	
	"use strict";
	
	var abc = 123;

/***/ }
/******/ ]);
//# sourceMappingURL=ES6TEST_bundle.js.map