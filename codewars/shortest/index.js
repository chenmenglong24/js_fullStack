// function findShort(str){
//     const arraystr = str.split(' ');
//     const arraylength = arraystr.map(w => w.length); ***
//     arraylength.sort((a, b)=>{
//         return a-b;
//     })
// }

// const findShort = str => str.split(' ').map(w => w.length).sort((a, b) => a-b)[0];

function findShort(str){
    // return Math.min(...str.split(' ').map(w => w.length));
    return Math.min.apply(null, str.split(' ').map(w => w.length));
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'));