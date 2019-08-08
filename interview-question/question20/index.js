var b = 10;
(function b () {
  let b = 20
  console.log(b)
})() 

// 函数表达式与函数声明不同，函数声明只在函数内部有效，并且此绑定是常量绑定
// const b = function () {}
// b = 20
// console.log(b)
// 不能对常量进行赋值
// 在自执行函数中函数声明相当于const一个函数
