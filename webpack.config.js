const VueLoaderPlugin = require("vue-loader/lib/plugin");
     module.exports = {
             // 引入这个vue的加载器插件
            plugins:[ new VueLoaderPlugin()],
               
                 //所有的第三方文件模块的匹配规则
                  module : {
                     rules:[
                       {  test:/\.vue$/, loader:"vue-loader"}
                     ]
                   }
                }
