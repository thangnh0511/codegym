import {kids} from './list.js'

// const mau_giao = [];
// kids.forEach(kid => {
//     if(kid.age < 6) {
//         mau_giao.push({
//             id: kid.id, 
//             name: kid.name,
//             age: kid.age
//         })
//     }
// });

// console.log(mau_giao);

const kids2 = kids
    .filter(kid => kid.age < 11 && kid.age > 5)
    .map(kid => ([kid.id, kid.name].join(' ')));

console.log(kids2);