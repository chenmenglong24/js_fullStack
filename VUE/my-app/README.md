- .ts
  typescript是js的超集
  typescript会编译成js
  可以跟写java一样
  .ts -> webpack loader -> babel -> js
  大型项目，可以有效减少bug 60% 更好的多人协作

- 将弱类型的js变成 静态类型 的typescript
  错误在编译阶段就解决了
  let a: string = 1;
  在比较 重要 的场合加 类型声明

- interface 声明自定义类型 接口
  多出20%代码，有了类型检验，代码更可靠 有利于合作


- vuex提供了一些类型给typescript