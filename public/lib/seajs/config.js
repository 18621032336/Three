// Set configuration
seajs.config({
    base: "/",
    alias: {
        "core":"dist/script/path-core.js",
        "base":"dist/script/base.js",
        "control-util":"dist/script/control-util.js",
        "chapter":"dist/lessons/chapter.js",

        "jquery":"lib/jquery/jquery-2.1.4.js",
        "socketIO":"lib/socket.io/socket.io-1.0.0.js"
    }
});