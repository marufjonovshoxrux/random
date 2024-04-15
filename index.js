// let arr = [1,2,3,4,5]
// let total = 0



// arr.filter((num) => total = total + num)

// console.log(
//     arr.filter((name) => name.length % 2),
//     total
// );





let arr = [1,2,3,4, 'alex', [1,2], {}, null,true, false, undefined,]

let str = 0
let num = 0
let obj = 0
let others = 0

arr.forEach(element => {
    if (typeof element === 'string') {
        str++;
    } else if (typeof element === 'number') {
        num++;
    } else if (typeof element === 'object') {
         if (element === null) {
        others++; 
        } else {
            obj++;
        }
    } else {
        others++; 
    }
});

console.log('string',str);
console.log('numbers',num);
console.log('objects',obj);
console.log('others',others);








