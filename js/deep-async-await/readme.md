# async
  async 函数就是 Generator 函数的语法糖

```js
  function * test () {
      let a = yield 1
      console.log('a', a);
      let b = yield 2
      console.log('b', b);
      let c = yield 3
      console.log('c', c);
    }
    // 惰性的
    var g = test();
    // 生成一个 对象 { next }
    // 调用 next 一步一步执行
    // g.next()
    // g.next()
    // g.next()
```
  通过 g.next() 一步一步调用 
  每一步调用 执行到 yield 关键词
  通过在g.next()中 传参，可以作为上一个yield语句的 返回值

# 
  {
    text: /\.js$/
    use: ['bebel-loader']
  }
  .babelrc

# Promise.resolve
返回 Promise
  1. 如果是一个 promise 返回该promise
  2. 如果是一个值 resolve(该值)