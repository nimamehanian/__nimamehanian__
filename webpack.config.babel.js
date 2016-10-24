import webpack from 'webpack';

let config = {
  entry: [
    (process.env.NODE_ENV === 'production' ? null :
    'webpack-dev-server/client?http://localhost:8080'),
    './src/index',
  ].filter(entry => !!entry),
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'react-hot!babel' },
      { test: /\.styl$/, exclude: /node_modules/, loader: 'style!css!stylus' },
      { test: /\.css$/, exclude: /node_modules/, loader: 'style!css' },
      { test: /node_modules/, loader: 'ify' },
      { test: /\.(eot|jpg|jpeg|png|svg|otf|ttf|woff)$/, exclude: /node_modules/,
        loader: 'url?limit=100000&name=/[name].[ext]',
      },
    ],
  },
  output: { path: __dirname + '/dist', filename: 'bundle.js' },
  devServer: {
    contentBase: 'dist',
    compress: true,
    historyApiFallback: true,
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: 'source-map',
};

if (process.env.NODE_ENV === 'production') {
  console.log('In production mode:');
} else {
  console.log('In development mode:');
}

export default config;
