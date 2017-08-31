# 使用说明

npm环境导入
```
npm install
```

运行
```
npm run start
```
打包
```
npm run build
```


目录结构
>  
* dist   打包后目录 
    * css  外部css及打包后的css文件
    * js   打包后的js文件
    * index.html  单页面应用的入口页面
* src   工作目录
    * script 组件js部分
        * 各子组件目录
    * index.js  入口js文件
    * index.css 入口css文件



* * *
#### 添加新的组件：  
    新的组件建议在script下的list.js文件中导入  
    index.js文件中可用于添加公共的信息提示组件
    
