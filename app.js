var http = require('http');
var connect = require('connect');
var app = connect();

// 静态文件服务
app.use('/', connect.static(__dirname + '/public', {
    maxAge:60 * 60 * 1000, hidden:false
}));

http.createServer(app).listen(18080)


// socket 服务
var server = require('http').createServer();
var io = require('socket.io')(server);
io.on('connection', function(socket){
	socket.on('event', function(data){

    })
	socket.on('disconnect', function(){ // 连结事件

    })

    socket.on('message', function(msg){ // 路径事件
        io.sockets.emit('message', msg);
    });

    socket.on('cmd', function(msg){ // 翻页事件
        io.sockets.emit('cmd', msg);
    });

    socket.on('clear', function(msg){ // 清除事件
        io.sockets.emit('clear', msg);
    });


});
server.listen(18088)

