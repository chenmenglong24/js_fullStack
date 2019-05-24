## 请求头
一次http 事务 有啥？ 

- 请求
  请求头 空行 请求体
  content-type: 规定我们向服务端发送请求体的格式
  1. application/x-form-urlencoded
  form 表单 默认的 发送请求的格式
  name=cml&age=21
  <!-- xml -->
  2. application/json
  以 JSON 的格式 发送
  {
      "name": "kobe",
      "age": 30
  }

- 响应头 空行 响应体
  content-type

通用首部: 请求/响应

- GET 从url中取
- POST 从请求体中取