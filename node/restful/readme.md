- json格式是标准的数据交换格式
- 前后端开发， /api  json格式来交流
- 全栈 fullstack

- restful 一切皆资源
  暴露资源
- 设计良好的URL
  /posts
  /posts/:id
  /comments
  /comments/:id
  posts/1/comments

HTTP动词
GET  查询
加一条评论  增加一个资源
POST 新增  /comments
DELETE动词 删除  /posts/2
修改 PUT/PATCH
  /comments/2 body 我一路向北离开有你的季节
PUT  把全新的所有的内容，去替换掉旧的内容
PATCH  只要传递要更新的字段，局部

- restful 考点
  restful认为一切皆资源，URL是唯一定位资源的符号，它有一定的设计规则
  HTTP动词是Web资源的 状态转换 动词

  操作    SQL方法   HTTP动词
  create  INSERT   POST
  read    SELECT   GET
  update  UPDATE   PUT/PATCH
  delete  DELETE   DELETE