var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractLess = new ExtractTextPlugin({
    filename: "[name]", //[contenthash]
    disable: process.env.NODE_ENV === "development"
});
staticDir = path.dirname(__dirname) +'/assets/static/'

var options = {
  entry:  {
    'theme.css': staticDir +'less/uikit_deep_red.less',
    'site.js': staticDir +'js/site.js',
  },
  output: {
    path: staticDir + 'gen',
    filename: '[name]'
  },
  resolve: {
   modules: [
     path.join(__dirname, '/assets/static/less/'),
     "node_modules"
   ]
  },
  module: {
    rules: [{
        test: /\.less$/,
        use: extractLess.extract({
            use: [{
                loader: "css-loader"
            }, {
                loader: "less-loader"
            }],
            // use style-loader in development
            fallback: "style-loader"
        }),
    }]
  },
  plugins: [
      extractLess
  ],
  externals: {jquery: 'jQuery', uikit: 'UIkit', 'uikit-icons': 'Icons'}
};

module.exports = options;
