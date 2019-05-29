## static
koa-static
为什么要配置
静态资源：图片 html css js
不会随着服务运行改变内容。
assets 资源

## path
path.join() 将路径的各个部分链接起来  处理了各个平台的分割符号
windows: \   类unix / 

## formidable
fields  非[type="file"] 内容都会到这里
files  [type="file"]

## 静态资源服务
双击打开：
file://xxx

服务器：
http://localhost:9090/
访问图片的时候发了一个请求
html 里面的引入的 图片 js css 都会发出一个请求，
然后 这些都是静态资源
所以 url 和 服务器磁盘路径 一一对应。
1. 有 index.html 的时候 自动打开   /(根目录)自己加上 index.html
2. 没有 列出所有文件 文件夹   fs.readDir()

用 koa-static 的作用就是在 html里面 正确引入 你指定目录下的资源

处理 static目录下的资源 映射为 请求路径
/static/1.png 的内容
/static/2.png 的内容
(koa-static)
业内擅长静态资源的服务器：Nginx