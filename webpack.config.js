module.exports = {
  entry: {
    "cmd": "./public/dist/script/control/cmd.js",
    "default": "./public/dist/script/control/default.js"
  },
  output: {
    path: __dirname + '/public/built',
    filename: "[name]_bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css"
      }, {
        test: /\.js$/,
        loader: 'babel-loader'
      }, {
        test: /\.jsx$/,
        loader: 'babel-loader!jsx-loader?harmony'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
      }
    ]
  }, resolve: {
    alias: {
      "script": './public/dist/script',
      "lib": "./public/lib",

      "core": __dirname + "/public/dist/script/path-core.js",
      "base": __dirname + "/public/dist/script/base.js",
      "control-util": __dirname + "/public/dist/script/control-util.js",
      chapter: __dirname + "/public/dist/lessons/chapter.js",
      jquery: __dirname + '/bower_components/jquery/dist/jquery.min.js',
      socketIO: __dirname + "/public/lib/socket.io/socket.io.js"
    }
  }
};
