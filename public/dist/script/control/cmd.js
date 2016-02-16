'use strict';
import base from 'base';
import core from '../path-core';
import step from '../../lessons/chapter';
import controlUtil from '../control-util';
import $ from 'jquery';
import io from 'socketIO';

controlUtil.preventDefaultTouch();

var $canvas = $('#myCanvas');
var manager = core($canvas[0], {
  drawCallback: drawCallback,
  step: step
});

// 操作页面事件
$('#left').on('touchstart', function () {
  if (socket.connected) {
    manager.setStep(0, 0, -1);
    socket.emit('cmd', '1,' + manager.getPageNumber() + ',' + manager.getStepNumber());
  }
});
$('#right').on('touchstart', function () {
  if (socket.connected) {
    manager.setStep(0, 0, 1);
    socket.emit('cmd', '1,' + manager.getPageNumber() + ',' + manager.getStepNumber());
  }
});

$('#clear').on('touchstart', function () {
  if (socket.connected) {
    socket.emit('clear', 'YES');
  }
});


var socket = io(base.SOCKET_HOST);
socket.on('connect', function () {
  socket.on('message', function (msg) { // 划线指令
    // 主控制不接受 划线. 否则重复绘制
  });

  socket.on('clear', function (claer) { // 清除划线
    manager.clearContent();
  });

  socket.on('disconnect', function () {
    // '断开连接'
  });

});

function drawCallback(data) {
  if (socket.connected) {
    socket.emit('message', data);
  }
}
