/**
 * 阻止拖动事件
 */
'use strict';
import $ from 'jquery';
function preventDefaultTouch() {
  var $body = $(document.body);

  $body.on('touchstart', function (e) {
    e.preventDefault();
  })
  $body.on('touchmove', function (e) {
    e.preventDefault();
  });

  $body.on('touchend', function (e) {
    e.preventDefault();
  })
}

module.exports = {
  preventDefaultTouch: preventDefaultTouch
};
