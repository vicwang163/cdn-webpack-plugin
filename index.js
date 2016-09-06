function cdnWebpackPlugin(cdns){
  this.cdns = cdns;
}

cdnWebpackPlugin.prototype.apply = function(compiler){
  var cdns = this.cdns;
  var length = this.cdns.length;
  var index = 0;
  compiler.plugin('compilation', function(compilation, options) {
      compilation.plugin('html-webpack-plugin-before-html-generation', function(htmlPluginData, callback) {
        htmlPluginData.assets.js = htmlPluginData.assets.js.map(function(item){
          return cdns[index++%length] + htmlPluginData.assets.publicPath+item
        })
        callback(null, htmlPluginData);
      });
  })
}

module.exports = cdnWebpackPlugin;