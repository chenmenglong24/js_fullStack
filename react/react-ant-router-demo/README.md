# react-router
  静态路由  vue-router 一样配置 []
  动态路由  3.0
  一切皆组件
  4.0之后 组件化思维 路由也是一个组件

# vs
  hashRouter #
  historyRouter 不带#
  刷新这个行为
  /#a -> /#b 通过js跳转 刷新之后 /#b\
  /a --> /b  刷新之后 相当于请求了后端的/b 后端肯定没有/b  
    后端再次交给前端处理
    1. nginx
    2. 后端的代码