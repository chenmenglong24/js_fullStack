# redux 数据流
  全局数据
  action  一个纯对象 {} 
  reducer  纯函数 函数的返回值决定了 store 里面的值 
          只依赖于参数(state, action), 
          而且返回一份【新】的数据，不能在原来的数据上修改
  dispatch  dispatch(action) 修改数据
  store  状态的集合