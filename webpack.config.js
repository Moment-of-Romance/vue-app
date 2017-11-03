//由于 webpack 是基于Node 进行构建的，所有的 webpack 的配置文件中，任何 合法的node 代码 都是支持的
const path = require('path');

//在内存中，根据指定的模板页面，生成一份内存中的首页，同时自动把打包好的bundle 注入到页面底部
// 如果配置插件 ，需要在导出的对象中 挂载一个 plugins 节点
const htmlWebpackPlugins = require("html-webpack-plugin");

//导出配置对象
module.exports = {
    entry : path.join(__dirname,"./src/main.js"),// 指定 需要打包的 入口文件
    output : {
        path : path.join(__dirname,"./dist"),
        filename : "bundle.js"
    },
    plugins : [ //配置 插件节点
        new htmlWebpackPlugins({
            template : path.join(__dirname,"./src/index.html"),//指定模板文件的路径
            filename : "index.html" //设置生成内存页面中的名称
        })
    ],
    module : { //配置所有 第三方 loader
        rules : [ //第三方 模块的匹配规则
            { test : /\.css$/ , use : ["style-loader","css-loader"] },
            { test : /\.less$/ , use : ["style-loader","css-loader","less-loader"] },
            { test : /\.scss$/ , use : ["style-loader","css-loader","sass-loader"] },
            { test : /\.(jpg|png|bmp|gif|jpeg)$/ , use : "url-loader?limit=6000&name=[hash:8]-[name]-[ext]" },
            { test : /\.(ttf|eot|woff|woff2|svg)$/ , use : "url-loader" },
            { test : /\.js$/ , use : "babel-loader" , exclude: /node_modules/},
            { test : /\.vue$/ , use : "vue-loader" } //处理 .vue 文件的
        ]
    },
    resolve: {
        alias:{//修改 Vue 被导入时候 的包路径

        }
    }
}