// let ran_num=Math.random();
// 函数表达式
const hongbao=(total,num)=>{
    const arr=[];//待分配金额的数组
    //定义计算量
    let restAmout=total,
        restNum=num;
        for(let i=0;i<num-1;i++){
            //前n-1随机
            //20*Math.random() 10
            //10*Math.random() 5
            //5*Math.random()  2.5
            // 怎么发，随机 不公平
            //restAmount/restNum*Math.random()*2
            // 10人  100元
            // 100/10*2 (0,20)
            // 90/9*2   (0,20)
            // 80/8*2   (0,20)
            let amount=parseFloat(Math.random()*((restAmout/restNum)*2-0)).toFixed(2);
            restAmout-=amount;
            restNum--;
            arr.push(amount);
        }
        arr.push(restAmout.toFixed(2));
    return arr;
}

console.log(hongbao(20,47));