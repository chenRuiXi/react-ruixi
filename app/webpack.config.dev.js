const webpack = require('webpack');
const path = require('path');
const ROOT_PATH = path.resolve(__dirname);
const MODULES_PATH = path.join(ROOT_PATH, './node_modules'); // node包目录
const BUILD_PATH = path.join(ROOT_PATH, './dist'); // 最后打包目录
//分离CSS插件
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        index: './app/src/index.js',
        common: ["react","react-dom","jquery"]
    },
    output: {
        path: BUILD_PATH, // 设置输出目录
        filename: 'js/display.bundle.js', // 输出文件名
    },
    resolve: {
        modulesDirectories: ['node_modules', path.join(__dirname, 'node_modules')],
		extensions: ['','.web.js', '.js', '.jsx', '.json']//配置解析文件后缀
    },
    module: {
        loaders: [
			// css
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: ['babel-loader'],
                query: {
                    presets: ['react', 'es2015']
                }
            },
            // image & font
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                loader: 'url-loader?limit=8192&name=[name].[ext]'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url-loader?limit=8192&name=[name].[ext]'
            },
            // expose-loader将jquery变量从依赖包中暴露出来
            {
                test: require.resolve("jquery"),
                loader: "expose?$!expose?jQuery"
            }

        ]
    },
    plugins: [
		// 插件
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('debug')
            }
        }),
        new ExtractTextPlugin('css/display.bundle.css', {
            allChunks: true
        }),
		new webpack.HotModuleReplacementPlugin(),//热加载
        // 把jquery作为全局变量插入到所有的代码中
        // 然后就可以直接在页面中使用jQuery了
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        // public sources
        new webpack.optimize.CommonsChunkPlugin({
            // 与 entry 对应
            name: 'common',
            // 输出的公共资源名称
            filename: 'js/display.common.bundle.js',
            // 对所有entry实行这个规则
            minChunks: Infinity
        }),
		new webpack.NoErrorsPlugin()
    ],
	//使用webpack-dev-server，提高开发效率
    devServer: {
        contentBase: './app/dist',
        host: '0.0.0.0',
        port: 3200,
        inline: true,
        hot: false,
    }
};