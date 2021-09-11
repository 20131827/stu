










//-------------------------------------------------------------------
// 함수 복습

// "함수선언방식"
// function sum(x, y){
//     return x+y;
// }

// console.log(sum(1,30));

// 함수의 이름을 작성하지않는 익명 함수를 만들어서 변수에 담에서 사용하는 "함수표현방식"
// const sum = function (x, y){
//     return x+y;
// }

// arguments는 함수를 실행할때 전달받은 인수의 값들을 제로베이스드 배열형태로 알아서 저장해준다
// 따라서 매개변수를 입력하지 않고도 함수사용이 가능하다!
//  function sum (){
//     return arguments[0] + arguments[1];
// }

// sum(1 ,10);

// ------------------------------------------------------------
// const ulEl = document.querySelector('ul');

// for(let i = 0 ; i < 10 ; i++){
//     const li = document.createElement('li');
//     li.textContent=`List-${i+1}`;
//     if(i % 2){
//         li.addEventListener('click',function(){
//             console.log(li.textContent);
//         })
//     }
//     ulEl.appendChild(li);
// }

// if(1){
//     console.log('ㅎㅇㅎㅇ');
//     console.log(ulEl);
// }