// const element = document.getElementById('element');
// // C1
// // const changeText = () => {
// //   element.innerText = 'Thanks!';
// // };
// // C21
// // const changeText2 = function()
// // {
// //     element.innerText = 'Thanks!';
// // }
// // C3
// // function changeText3 ()
// // {
// //     element.innerText = 'Thanks!';
// // }

// // type in your code here
// element.classList.toggle;1


// const element = document.querySelector('#element');
  
// const toggleColor = (isEntering) => {
//   element.style.background = isEntering ? 'orange' : 'blue';
// };
// // call back function () => function : khi có sự kiện vào thì mới hoạt động function
// element.addEventListener('mouseover',() => toggleColor(true));
// element.addEventListener('mouseleave',() => toggleColor(false));**

function calculateDelta(x,y,z)
{
    let delta = x*x - (4*y*z);
    return delta;
}
function calculateMath(a,b,c)
{
    const delta = calculateDelta(b,a,c);
    let x1 = 0,
        x2 = 0;
    if(delta < 0)
    {
        console.log('Phuong trinh vo nghiem');
        return;
    }else if (delta === 0)
    {
        x1 = -b / (2*a);
        x2 = x1;
        console.log('Phuong trinh co 2 nghiem bang nhau',x1.toFixed(2), x2.toFixed(2));
        return;
    }else {
        x1 = (-b + Math.sqrt(delta)) / (2*a);
        x2 = (-b - Math.sqrt(delta)) / (2*a);
        console.log(' Phuong trinh co 2 nghiem phan biet:', x1.toFixed(2), x2.toFixed(2));
        return;
    }
}
calculateMath(9,15,5);