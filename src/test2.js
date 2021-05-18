// const sum = (num1) => {
//     let num2 = num1;
//     return (num) => {
//         return num + num2; 
//     }
// }
// let testArr = [[1,2,3], [2, 3, 4]];
// let arr2 = testArr.reduce((cur, item, index) => {
//     if (item instanceof Array) {
//         return cur.concat()
//     } else {
//         cur.push(item)
//     }
//     return cur
// }, [])
// console.info(arr2)
// for (let i)

let i = 0;
let arr = [];
function test(a) {
    for(;i < a;i++) {
        // * 自由变量i在最外层, for完成后, 就变成了3
        arr.push(function() {console.info(a * i)})
    }
}
test(3);
arr.forEach(item => {
    item()
})