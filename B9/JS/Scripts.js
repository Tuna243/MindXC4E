

// DOM  querySelector
        // const buttonElem = document.querySelector('#wrapper button');
        // let inputElem = document.querySelector('#wrapper input');
        // buttonElem.addEventListener('click', () => {
        //   const oldText = inputElem.value;
        //     return inputElem.value = oldText === "ON" ? "OFF" : "ON";
        // });
// let a = [1,2,3,4];
// a.push(5,6,7,8);
// // console.log({a});
// a.slice(1,3);
// console.log({a});
// for( let i = 0; i <= a.length; i++)
// {
//     console.log({a});
// }

// for( let index = 1;index <= 4;index++)
// {
//     a.push(index + 4);
// }

// for (const key in a.length) {
//    console.log(a[key]);
// }
// let a = [1,2,3,4,5]
// a.splice(0,2)
// console.log("Mang a:",a)
// let b = [5,6,7,8,9]
// let c = b.splice(0,3)
// console.log("Mang c:",c)
// let d = [1,2,3,4,5]
// let e = d.slice(0,2)
// let f = d.slice(2)
// console.log("Mang e:",e)
// console.log("Mang f:",f)
let a = [1,2,3,5,6]
    b = 4;
    str = a.includes(b);
    if( str === "true")
    {
        console.log(`Mang chua:${b}`);
    }
    else
    {
        console.log(`Mang khong chua ${b}`)
    }
let c = [4,5,3,2,7];
    c.sort();
    c.reverse();
    console.log(c);