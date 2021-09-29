// 1.
const a1 = {name: 'a'}
const a2 = {name: 'a'}
const a3 = a1

console.log(a1 == a2);  // false
console.log(a1 === a2); // false
console.log(a1 === a3); // true

// ==과 ===의 차이점
// 전형적인 낚시문제 a1.name == a2.name 이었으면 true이지만 a1객체과 a2객체를 비교했기 때문에 땡~



// 2.
function sm(m, f){
    console.log(`${m} by ${f}`);
}
sm('msg')   // msg by undefined
// m, f는 매개변수인데 인자를 받을때 f는 아무값도 받지못했다
// 따라서 undefined가 출력됨


function sm2(m, f = 'unknown'){
    console.log(`${m} by ${f}`);
}
sm2('msg')  // msg by unknown
// 매개변수 설정하는 부분에서 m과 f에 초기값으로 'unknown' 이라고 선언했기 때문에
// m에는 'msg' 가 대입되어서 출력되고 f에는 아무값이 없어서 초깃값인 'unknown'이 출력된다


// 3.
function f1(...args){
    args.forEach((arg) => console.log(arg));
}

f1('hi','hello','bye')
// 출력값
// hi
// hello
// bye
// ????





// 4.
const a = [1, 2, 3, 4]
const b = a.map(item => item * 2)
console.log(b); // [2, 4, 6, 8]

const c = a.filter


// 6.
document.getElementsByClassName()


// 17.
const obj1 = {key :'key1'};
const obj2 = {key :'key2'};
const ar = [obj1, obj2];

const arrayCopy = [...obj]
console.log(ar, arrayCopy);

