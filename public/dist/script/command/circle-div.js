'use strict';

import $ from 'jquery';

var R = 210;
var AC = R / 2;
var BASE = 0;
var TOP_BASE = 54;
var LEFT_BASE = -39;
var document = global.document;
var $body = $(document.body);

var i = 0;
var logStr = '';
var ang;
while (i < 175) {

  ang = (i * 3.6).toFixed() * Math.PI / 180;  // 角度
  $body.append(
    $('<div style="border:1px solid #c3c3c3;width:1px;height:1px;position: absolute;top:' + getTopByAng(ang) + 'px;left:' + getLeftByAng(ang) + 'px"></div>')
  );
  // 节省步骤百分比会导致平移卡顿
  //if (!(i % 5)) {
    logStr += i - 75 + 66 + '%{transform: rotate(' + ((i - 75) * 3.6).toFixed() + 'deg);' +
      'left:' + getLeftByAng(ang) + 'px;top:' + getTopByAng(ang) + 'px' +
      '}\n';
  //}
  i++;
}
console.log(logStr);

/**
 * 根据角度和半径获得对边高度
 * @param ang
 * @returns {number}
 */
function getTopByAng(ang) {
  var a = Math.sin(ang);
  var bc = parseInt(a * AC);

  return bc + TOP_BASE;
}

/**
 * 根据角度和半径获得斜边高度
 * @param ang
 * @returns {number}
 */
function getLeftByAng(ang) {
  var a = Math.cos(ang);
  var ab = parseInt(a * AC);
  return ab + LEFT_BASE;
}

function getTop_2(i) {
  return Math.sin(i * 3.6) * R + BASE;
}

function getLeft_2(i) {
  return Math.cos(i * 3.6) * R + BASE;
}


