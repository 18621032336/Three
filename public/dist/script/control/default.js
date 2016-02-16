define(['base', 'jquery', 'control-util', 'core', 'socketIO', 'chapter'], function(require) {

    var base = require('base'),
        core = require('core'),
        step = require('chapter'),
        controlUtil = require('control-util');

    $(document).ready(function(){

        initEvent();

    });

    function initEvent(){

        controlUtil.preventDefaultTouch();

        var $canvas = $('#myCanvas');
        var manager = core($canvas[0], {
            drawCallback:drawCallback,
            step:step
        });

        var socket = io.connect(base.SOCKET_HOST);
        socket.on('connect', function(){
            socket.on('message', function(msg){ // 划线指令
                manager.appendContent(msg);
                var points = msg.split(',');
                manager.append(points[0], points[1], points[2], points[3]);
            });

            socket.on('cmd' , function(cmd){
                var cmdParams = cmd.split(',');
                manager.setStep(cmdParams[0], cmdParams[1], cmdParams[2]);
            });

            socket.on('clear', function(claer){ // 清除划线
                manager.clearContent();
            });

            socket.on('disconnect', function(){
//            alert('断开连接');
            });

        });

        function drawCallback(data){
            if (socket.connected) {
                socket.emit('message', data);
            }
        }
    }

})