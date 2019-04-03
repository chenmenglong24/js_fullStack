const nums = ['c', 'a', 'z', 'y'];
const num2 = [1, 10, 2, 28];
console.log(nums.sort());
console.log(num2.sort(function(a, b){
    console.log(a, b, a - b > 0);
    return a - b > 0;
    // console.log(a, b, '-------');
}));