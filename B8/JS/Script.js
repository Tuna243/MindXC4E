// let twoSum = function(nums, target) {
//     let id = [];
//     for( let i = nums.length; i >= 0; i--)
//         for( let j = nums.length - 1; j == 0; j--)     
//         {
//             if( nums[i] + nums[j] === target)
//             {
//                 id.push(j); 
//                 id.push(i);
//             }
//         }
//     return id;
// };

// let testCase = [2,7,11,15];
// console.log(twoSum ( testCase, 9));
// BTVN

// 1.
// let month = prompt();
// if (month >= 1 && month < 4)
// {
//     console.log('April');
// }
// else if(month >=4 && month <7)
// {
//     console.log('Summer');
// }
// else if(month >=7 && month <10)
// {
//     console.log('Fall');
// }
// else if(month >=7 && month <10)
// {
//     console.log("Winter");
// }
// else
// {
//     console.log("Not found");
// }

//2

// let a = Number(prompt());
// let b = Number(prompt());
// let c = Number(prompt());
// let  delta = (b**2) - (4*a*c);
// let x1,x2;
// console.log(delta);
// if( delta > 0)
// {
//      x1 = (-b + Math.sqrt(delta) / 2*a);
//      x2 = (-b - Math.sqrt(delta) / 2*a);
// }
// else if( delta === 0)
// {
//     x1 = -b / 2*a;
//     x2 = x1;
// }
// else
// {
//     console.log("Non-variable");
// }
// console.log("Nghiem 1:" ,x1.toFixed(0));
// console.log("Nghiem 2:" ,x2.toFixed(0));


// Nhập số tiền/km. Nhập số km -> tính số tiền phải trả

// let CPK = Number(prompt()),
//     distance = Number(prompt());
//     console.log(` Số tiền phải trả sau khi đi ${distance} km là: ${CPK * distance}`)
// Nhập a,b, tính tổng các số chẵn và tổng các số lẻ trong khoảng 2 số đó.
let a = Number(prompt(" Nhập số a")),
    b = Number(prompt(" Nhập số b"))
let S_odd = 0, 
    S_even = 0
for( let i = a; i <=b; i++)
{
    if(i % 2 === 0)
    {
        S_even += i
    }
    else
    {
        S_odd += i
    } 
}
console.log("Tổng các số chẵn:",S_even)
console.log("Tổng các số lẻ:",S_odd)