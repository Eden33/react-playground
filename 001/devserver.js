const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const port = 8080;

const config = {
  mode: 'development',
  devtool: 'source-map',
  entry:  [
    './src/main.js'
  ],
  output: {
    path:       path.join(__dirname, 'public/dist'),
    filename:   'hello-world-with-jsx.js',
    publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test:    /\.jsx?/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
      }
    ]
  }
};

new WebpackDevServer(webpack(config), {
  publicPath:         config.output.publicPath,
  contentBase:        path.join(__dirname, 'public'),
  hot:                false,
  historyApiFallback: true
}).listen(port, 'localhost', (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at localhost:' + port);
});
