// // 1.
// const a1 = {name: 'a'}
// const a2 = {name: 'a'}
// const a3 = a1

// console.log(a1 == a2);  // false
// console.log(a1 === a2); // false
// console.log(a1 === a3); // true

// // ==과 ===의 차이점
// // 전형적인 낚시문제 a1.name == a2.name 이었으면 true이지만 a1객체과 a2객체를 비교했기 때문에 땡~



// // 2.
// function sm(m, f){
//     console.log(`${m} by ${f}`);
// }
// sm('msg')   // msg by undefined
// // m, f는 매개변수인데 인자를 받을때 f는 아무값도 받지못했다
// // 따라서 undefined가 출력됨


// function sm2(m, f = 'unknown'){
//     console.log(`${m} by ${f}`);
// }
// sm2('msg')  // msg by unknown
// // 매개변수 설정하는 부분에서 m과 f에 초기값으로 'unknown' 이라고 선언했기 때문에
// // m에는 'msg' 가 대입되어서 출력되고 f에는 아무값이 없어서 초깃값인 'unknown'이 출력된다


// // 3.
// function f1(...args){
//     args.forEach((arg) => console.log(arg));
// }

// f1('hi','hello','bye')
// // 출력값
// // hi
// // hello
// // bye
// // ????





// // 4.
// const a = [1, 2, 3, 4]
// const b = a.map(item => item * 2)
// console.log(b); // [2, 4, 6, 8]

// const c = a.filter


// // 6.
// document.getElementsByClassName()


// // 17.
// const obj1 = {key :'key1'};
// const obj2 = {key :'key2'};
// const obj3 = {key :'key3'};
// const ar = [obj1, obj2];

// const arrayCopy = [...ar]
// console.log(ar, arrayCopy);

// const arrayCopy2 = ar
// console.log(ar, arrayCopy2);

// ar.push(obj3)

// console.log(arrayCopy);
// console.log(arrayCopy2);


// // 18.
// const e = {
//     name: name,
//     age: age
// }

//===============================================================================================================================================
//===============================================================================================================================================



// // assign( )*   [원본데이터 손상]
// // 하나의 대상객체에  하나 이상의 객체를 병합한다[복사] !!
// const a = {a: 1, b: 2}
// const b = {b: 4, c: 5}
// const c = {c: 10, d: 22}
// // 첫번째 인수인t에다가 두번째 인수인s를 병합해서 reT에 대입한다
// const re = Object.assign(a, b)

// console.log(a);     // {a: 1, b: 4, c: 5}
// console.log(b);     // {b: 4, c: 5}
// console.log(re);   //{a: 1, b: 4, c: 5}
// // a에 b를 병합한 그 자체를 re에 대입했기 때문에 
// console.log(a === re);  // true 같은 메모리의 주소를 참조해서 사용하기 때문에 완전 같은녀석이다.


// // 첫번째 인수에다가 2번째, 3번쨰, 4번째... 인수들을 병합해준다!!
// Object.assign(b, a, c)
// console.log(b);     // {b: 4, c: 10, a: 1, d: 22}



// // 원본데이터에 손상을 주지않고 객체를 복사하는 방법!
// const a = {a: 1, b: 2}
// // 첫번째 인수인 {} 비어있는 객체에 a를 병합해서 re에 대입했다.
// const re = Object.assign({}, a)

// console.log(a);     // {a: 1, b: 2} 
// console.log(re);    // {a: 1, b: 2} 
// console.log(a === re);  // flase
// // assign의 첫번째 인수로 비어있는 객체에 a를 병합하였고 그값을 re에
// // 대입했기 때문에 a와 re는 다른 메모리를 사용하고 있으므로 false 출력이된다
// // re는 assign의 첫번째 인수인 {} 비어있는 객체의 메모리 주소를 사용하고있다! 


// // key()
// // 사용법 : Object.keys(객체)
// // keys의 반환(retrun)형은 배열입니다.
// const user = {
//     name: 'jinwoong',
//     age: 28,
//     email: 'qwaszx3677@naver.com'
// }

// // Object.keys( )의 리턴형은 배열형 이다!
// const k = Object.keys(user)
// console.log(k);     // ['name', 'age', 'email']

// console.log(user['email']);     // qwaszx3677@naver.com

// const values = k.map(k => user[k])
// console.log(values);        // ['jinwoong', 28, 'qwaszx3677@naver.com']

// // 위의 람다 코드가 일반함수일때는 아래의 코드가 된다
// const v = k.map(function(k){
//     return user[k]
// })
// console.log(v);             // ['jinwoong', 28, 'qwaszx3677@naver.com']