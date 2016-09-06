CDN Webpack Plugin
===================

Installation
------------
Install the plugin with npm:
```shell
$ npm install cdn-webpack-plugin --save-dev
```


Basic Usage
-----------

as we know,in the webpack config,`publicPath` is only a string,but in my daily project.
we will meet one situation,we should put the static resources into different domain of CDN
this is what we want to fix
config as follows:

```javascript
var cdnWebpackPlugin = require('cdn-webpack-plugin');
var webpackConfig = {
  entry: {
    'main':['main.js']
    'home':['home.js']
    'index':['index.js']
  },
  output: {
    path: 'dist',
    filename: '[name].js',
    publicPath:'/static'
  },
  plugins: [new cdnWebpackPlugin(['http://cdn1.cdn.com','http://cdn2.cdn.com'])]
};
```

This will generate a file `dist/index.html` containing the following:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Webpack App</title>
  </head>
  <body>
    <script src="http://cdn1.cdn.com/static/main.js"></script>
    <script src="http://cdn2.cdn.com/static/home.js"></script>
    <script src="http://cdn1.cdn.com/static/index.js"></script>
  </body>
</html>
```
