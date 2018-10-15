const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';
const path = require('path');

const entries = [
  './src/index.js',
];

module.exports = {
  entry: entries,
  output: {
    filename: 'app.js',
    publicPath: '/',
    path: process.env.APP_ASSETS_PATH || '/data/assets',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(csv|xlsx|xls)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'images/[name].[ext]',
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'image/png',
              name: 'images/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(pdf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'application/pdf',
              name: 'images/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'application/font-woff',
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'application/octet-stream',
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 8192,
              mimetype: 'image/svg+xml',
              name: 'images/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        API_URL: JSON.stringify(process.env.API_URL),
        APP_SCHEMA_URL: JSON.stringify(process.env.APP_SCHEMA_URL),
      },
    }),
    // FIXME : DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead
    function () {
      this.plugin('done', (stats) => {
        path.join(process.env.APP_ASSETS_PATH, 'index.html');
      });
    },
  ],
  externals: [{
    xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}',
  }],
};
