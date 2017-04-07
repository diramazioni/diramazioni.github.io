var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractLess = new ExtractTextPlugin({
    filename: "[name]",
    //disable: process.env.NODE_ENV === "development"
});
var staticDir = path.dirname(__dirname) +'/assets/static/';
var jsDir = staticDir + 'js';



module.exports = [{
  entry:  {
    'site.js': [
                "jquery",
                "jquery-ui_effects-core.min",
                "uikit",
                "uikit-icons",
                'site',
              ]
  },
  resolve: {
   modules: [
     "node_modules",
     jsDir
   ],
  },
  output: {
    path: staticDir + 'gen',
    filename: '[name]'
  },
  entry:  {
    'uikit_deep_red.css': staticDir +'less/uikit_deep_red.less',
    'uikit_green.css': staticDir +'less/uikit_green.less',
  },
  output: {
    path: staticDir + 'gen',
    filename: '[name]'
  },
  resolve: {
   modules: [
     "node_modules",
     jsDir,
     path.join(__dirname, '/assets/static/less/')
   ],
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

}];
//
// module.exports = options;
