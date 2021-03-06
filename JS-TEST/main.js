//-------------------------------------------------------------------
import _ from 'lodash'  // from 'node_modules'!
import getType from './getType' // getType.js
import getRandom from './getRandom' // getRandom.js

console.log(_.camelCase('the hello world'));
console.log(getType([1, 2, 3]));
console.log(getRandom(), getRandom());



 


//-------------------------------------------------------------------

// // ----------------------------------------------------------------
// // |1:             |2:             |3:             |4:         
// // ----------------------------------------------------------------

// // 얕은 복사(Shallow copy), 깊은 복사(Deep copy)
// const user = {
//     name: 'Jin',
//     age: 28,
//     emails: ['qwaszx3677@naver.com']
// }
// const copyUser = user;
// console.log(copyUser === user); 
// // true      [같은 메모리 영역을 사용하고있다는 의미이다!]

// // user라는 객체의 age데이터를 수정했더니 copyUser의 age데이터도 수정되버렸다??!
// user.age = 22
// console.log('user', user);
// // user {name: 'Jin', age: 22, emails: Array(1)}
// console.log('copyUser', copyUser);
// // copyUser {name: 'Jin', age: 22, emails: Array(1)}
// // 이유 : user와 copyUser는 동일한 메모리 주소를 참조하고있기 때문에
// // 둘다 데이터 수정이 되버렸다..

// console.log('-------------------');

// //=====================================================================================


// // Object.assign() 얕은복사
// // ----------------------------------------------------------------
// // |1:             |2:             |3:             |4:         
// // ----------------------------------------------------------------

// // 얕은 복사(Shallow copy), 깊은 복사(Deep copy)
// const user = {
//     name: 'Jin',
//     age: 28,
//     emails: ['qwaszx3677@naver.com']
// }
// const copyUser = Object.assign({}, user)
// // assign(대상객체, 출처객체)
// // 위의 코드해석 : 빈객체에 user객체를 담아서 copyUser에 반환해라!

// console.log(copyUser === user); 
// // false    Object.assign()을 통해 새로운 객체를 할당받았기 때문에 참조하는 주소가 다르다!!

// // user와 copyUser는 다른 메모리 주소를 참조하기 때문에 user객체에 age 데이터만 수정된다!
// user.age = 22
// console.log('user', user);
// // user {name: 'Jin', age: 22, emails: Array(1)}
// console.log('copyUser', copyUser);
// // copyUser {name: 'Jin', age: 28, emails: Array(1)}
// console.log('-------------------');

// //=====================================================================================

// // ... 전개연산 얕은복사
// // ----------------------------------------------------------------
// // |1:             |2:             |3:             |4:         
// // ----------------------------------------------------------------
// // 얕은 복사(Shallow copy), 깊은 복사(Deep copy)

// const user = {
//     name: 'Jin',
//     age: 28,
//     emails: ['qwaszx3677@naver.com']
// }

// const copyUser = {...user}
// // copyUser라는 빈객체에 ... 전개연산을 통해  user가 가지고있는 속성과 값들을
// // 전개해서 넣는다! 그러면 user와 copyUser는 다른 메모리주소를 참조하고있다!!

// console.log(copyUser === user); 
// // false    

// // user와 copyUser는 다른 메모리 주소를 참조하기 때문에 user객체에 age 데이터만 수정된다!
// user.age = 22
// console.log('user', user);
// // user {name: 'Jin', age: 22, emails: Array(1)}
// console.log('copyUser', copyUser);
// // copyUser {name: 'Jin', age: 28, emails: Array(1)}
// console.log('-------------------');


// user.emails.push('abc@gmaile.com')
// // user의 emails라는 배열 속성에 값을 push했다
// console.log(user.emails === copyUser.emails);   
// // true      ????
// // user라는 객체는 복사해서 copyUser를 만들었지만
// // user객체 내부에 eamils라는 배열(참조형데이터)는 따로 복사 한적이 없기 때문에
// // emails는 동일한 메모리주소를 참조하고있다.. 이게~~ 얕은 복사!!


// //=====================================================================================

// // 깊은 복사란??
// // 참조형데이터 내부에 또다른 참조형 데이터를 포함하고 있다면 의도한 경우를 제외하고는
// // 깊은복사를 사용하는것이 옳다!

// // lodash를 사용해서 깊은복사 하기!
// // 깊은 복사
// // ----------------------------------------------------------------
// // |1:             |2:             |3:             |4:         
// // ----------------------------------------------------------------
// // 얕은 복사(Shallow copy), 깊은 복사(Deep copy)

// import _ from 'lodash'

// const user = {
//     name: 'Jin',
//     age: 28,
//     emails: ['qwaszx3677@naver.com']
// }

// // _ (lodash)를 사용해서  깊은 복사하기!!
// const copyUser = _.cloneDeep(user)

// console.log(copyUser === user); 
// // false    

// // user와 copyUser는 다른 메모리 주소를 참조하기 때문에 user객체에 age 데이터만 수정된다!
// user.age = 22
// console.log('user', user);
// // user {name: 'Jin', age: 22, emails: Array(1)}
// console.log('copyUser', copyUser);
// // copyUser {name: 'Jin', age: 28, emails: Array(1)}
// console.log('-------------------');


// user.emails.push('abc@gmaile.com')
// // user의 emails라는 배열 속성에 값을 push했다
// console.log(user.emails === copyUser.emails);   
// // flase
// // 깊은 복사를 하면 껍데기 뿐만 아니라 내부의 참조형데이터들 또한 전부다 복사가 되기 때문!


//-------------------------------------------------------------------
// // 데이터 불변성
// // 원시 데이터 : String, Number, Boolean, undefined, null
// // 참조형 데이터 : Object, Array, Function
// // ----------------------------------------------------------------
// // |1:             |2:             |3:             |4:         
// // ----------------------------------------------------------------

// // 원시 데이터들은 메모리 영역에 같은 데이터값이 있으면 새로운 메모리 영역에 
// // 할당받아 만들지 않고 기존의 똑같은 데이터가 있는 메모리 주소를 참조해서 사용하게 된다!
// // 원시 데이터들은 생긴것(값)이 다르면 다른데이터 라고 생각하면 아주 쉽다!

// let a = 1;
// let b = 4;
// console.log(a, b, a === b); // 1 4 false
// b = a;
// console.log(a, b, a === b); // 1 1 true
// a = 7;
// console.log(a, b, a === b); // 7 1 false
// let c = 1;  // 새로운 메모리 영역에 데이터를 할당하는것이 아닌 
//             // 기존의 메모리 영역에 데이터를 찾아서 같은 데이터가 있다면 
//             // 기존 메모리의 주소를 참조해서 사용하게 된다!!!
// console.log(b, c, b === c); // 1 1 true


// // 데이터 가변성
// // 참조형 데이터는 불변성이 없다! 가변성만 존재할 뿐!
// // 참조형 데이터는 생긴것(값)이 똑같아도 다른데이터 일 수 있다!
// // 참조형 데이터는 같은 데이터 라도 생성될때마다 새로운 메모리 영역을 할당받아 사용한다!!
// // ----------------------------------------------------------------------
// // |1:  {        }   |2:  {        }   |3:  {        }   |4:  {        }   
// // ----------------------------------------------------------------------

// // 객체1 = 객체2
// // 일때 데이터가 복사되는 개념이 아닌 객체2의 주소를 객체1에게 던져주고
// // 객체1은 객체2에게 받은 메모리 주소를 참조하는것이다

// let a = {k: 1}
// let b = {k: 1}
// console.log(a, b, a === b); // {k: 1} {k: 1} false
// a.k = 7
// b = a   // a가 바라보고 있는 주소를 b또한 바라보게 된다
// console.log(a, b, a === b); // {k: 7} {k: 7} true
// a.k = 2 // a가 바라보고있는 주소의 데이터 k를 2로 변경했더니 b의 k또한 값이 바꼇다!
//         // 당연한 말인 이유 :  a와 b둘다 같은 주소를 바라보고있으니까! 바뀐 데이터를 둘다 참조하고있으니까!
// console.log(a, b, a === b); // {k: 2} {k: 2} true
// let c = b   // b가 바라보고있는 주소를 c또한 바라보게 된다
// console.log(a, b, c, a === c);  // {k: 2} {k: 2} {k: 2} true
// a.k = 9  // a가 바라보고있는 주소의 데이터 k를 9로 변경했더니 b와 c의 k값이 바꼇다!
//          // 당연한 말인 이유 :  a, b, c 셋다 같은 주소를 바라보고있으니까! 바뀐 데이터를 3명이서 참조하고있으니까!
// console.log(a, b, c, a === c);  //{k: 9} {k: 9} {k: 9} true






//-------------------------------------------------------------------
// // 전개 연산자 [Spread] ...
// // 쉼표로 구분되어있는 데이터 덩어리를 가져오는 연산자이다!

// const f = ['Apple', 'Banana', 'Orange','Cherry']
// console.log(f);
// // ['Apple', 'Banana', 'Orange']
// console.log(...f);  // console.log('Apple', 'Banana', 'Orange'); 와 같은 코드이다
// // Apple Banana Orange

// // 배열데이터를 객체데이터로 변경시키는 함수를 만들어봤다!
// function toObj(a, b, c){
//     return{
//         a: a,
//         b: b,
//         c: c
//     }
// }
// console.log(toObj(...f)); 
// // {a: 'Apple', b: 'Banana', c: 'Orange'}

// //toObj(...f); // 이 코드는 toObj(f[0], f[1], f[2]); 와 같은 코드이다!

// function toObj2(a, b, ...c){    // ...c 는 rest parameter라고한다! [나머지 매개변수]
//     return{
//         a: a,
//         b: b,
//         c: c
//     }
// }
// console.log(toObj2(...f));
// //a:'Apple'
// //b:'Banana'
// //c: ['Orange', 'Cherry']


// // 속성의 이름과 변수의 이름이 똑같다면 축약형으로 작성이 가능하다!!
// function toObj3(a, b, ...c){  
//     return{
//         a,  //a: a,
//         b,  //b: b,
//         c   //c: c
//     }
// }
// console.log(toObj3(...f));
// //a:'Apple'
// //b:'Banana'
// //c: ['Orange', 'Cherry']



// // 객체 데이터를 반환할 때는 ()소괄호 안에 {}중괄호를 써야지 데이터 반환이 된다!
// const toObj4 = (a, b, ...c) => ({a, b, c})
// console.log(toObj4(...f));
// //a:'Apple'
// //b:'Banana'
// //c: ['Orange', 'Cherry']

//-------------------------------------------------------------------
// // 구조 분해 할당
// // 비구조화 할당

// const user = {
//     name: 'Jinwoong',
//     age: 28,
//     email: 'qwaszx3677@naver.com',
//     address : 'USA'
// }

// // =연산자를 통해서 객체의 프로퍼티와 같은 이름인 변수를 선언해서 사용할 수 있다!
// // 이러한 개념을 구조분해 할당 이라 한다.
// // 아래의 코드는 user.name | user.age | user.emial | user,address와 같은 개념..!
// const {name: me, age, email, address = 'Korea'} = user
// // 위의 코드에서 address = 'Korea' 부분은 user라는 객체에서 address 프로퍼티에 값이 없다면
// // 기본값 (초기값)으로 Korea를 주겠다는 의미이다!
// // name이라는 이름말고 me라는 이름의 변수를 사용할때는 
// // name: 사용할 변수명 으로 사용이 가능하다!
// // : 를 사용해서 다른 이름으로 할당했다면 아래의 코드에서 me로 써야한다
// // name을 출력하려고 하면 레퍼런스 에러가 발생한다!

// console.log(`사용자의 이름은 ${me} 입니다`);
// // 사용자의 이름은 Jinwoong 입니다
// console.log(`${me}의 나이는 ${age} 입니다`);
// // Jinwoong의 나이는 28 입니다
// console.log(`${me}의 이메일 주소는 ${email} 입니다`);
// // Jinwoong의 이메일 주소는 qwaszx3677@naver.com 입니다
// console.log(address);
// // USA
// // 기본값 할당은 해당 객체의 프로퍼티에 값이 없을때 적용이 되는데
// // user객체에 address프로퍼티에 값이 있기 때문에 USA가 출력됨


// const t = ['Apple', 'Banana', 'Orange']
// // 구조분해하는 데이터의 타입에 맞게 작성해야한다!
// // t라는 변수는 배열타입을 할당받았기 때문에 아래의 코드에서도
// // [] 대괄호를 사용해서 구조분해 할당을 해야한다!!
// // 배열데이터는 속성(프로퍼티)의 이름을 사용하는게 아니라 위치에 맞게 추출해야함
// const [a, b, c, d] = t
// console.log(a, b, c, d);
// // Apple Banana Orange undefined


// const tt = ['Apple', 'Banana', 'Orange']
// // Banana만 출력하고 싶을떄는?
// const[, bb] = tt
// console.log(bb);
// //Banana





//-------------------------------------------------------------------

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


//-------------------------------------------------------------------
//  // Object.assign()
// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };
// // target 객체에 source를 병합한다는 의미 <중복되는 데이터를 덮어씀>
// const returnedTarget = Object.assign(target, source);

// console.log(target);                // 출력값:  Object { a: 1, b: 4, c: 5 }
// console.log(returnedTarget);        // 출력값:  Object { a: 1, b: 4, c: 5 }



// // Object.assign()
// const userAge = {
//     // key : value
//     name: 'jinwoong',
//     age: 35
// }
// const userEmail = {
//     name: 'jinwoong',
//     email: 'qwaszx3677@naer.com'
// }
// // 객체.assign은 사용할 수 없다 왜냐하면 프로토 타입 함수가 아니기 때문!
// // Object.assign만 가능! 스태틱매소드 이기 떄문!
// const target = Object.assign(userAge, userEmail)
// console.log(target);    //출력값 : {name: 'jinwoong', age: 35, email: 'qwaszx3677@naer.com'}
// console.log(userAge);   //출력값 : {name: 'jinwoong', age: 35, email: 'qwaszx3677@naer.com'}
// console.log(target === userAge);    //출력값 :  true
// // === 이랑 equlse랑 똑같음!!

// const a = {k: 123}
// const b = {k: 123}
// console.log(a === b);       //출력값 :  false
// // === 이랑 equlse랑 똑같음!!



//-------------------------------------------------------------------
// .filter()
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'orange']

// // 총 4번의 리턴을 한다!! numbers의 요소가 4개이기 때문
// // 원본 데이터에 변화를 주지않음!
// const a = numbers.map(item => {
//     return item < 3
// })
// //const a = numbers.map(item =>  item < 3) //람다식으로 고친 코드!
// console.log(a);     //출력값 [true, true, false, false]

// // filter메소드는 조건이 true인 경우에만 데이터를 반환해준다(필터링)
// // 원본 데이터에 변화를 주지않음!
// const b = numbers.filter(item => {
//     return item < 3
// })
// //const b = numbers.filter(item => item < 3)  //람다식으로 고친 코드!
// console.log(b);     //출력값 [1, 2]


// // .find()  || .finfIndex()
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'orange']

// // find() 함수는 배열(fruits)의 요소 갯수 만큼 반복됨
// // find() 함수의 조건으로 true가 반환되면 반복을 멈추고
// // true를 만족시키는 데이터를 함수의 반환값으로 넘겨준다
// const a = fruits.find(itme => {
//     return/^B/.test(itme)       //(조건) B로 시작하는가?
// })
// //const a = fruits.find(itme => /^B/.test(itme))        //위의 코드를 람다식으로 고침!
// console.log(a);     //출력값 : Banana

// // 함수의 조건으로 true가 반환되면 반복을 멈추고
// // true를 만족시키는 데이터의 인덱스 번호(제로베이스드)를 반환값으로 넘겨준다!
// const b = fruits.findIndex(itme => {
//     return/^B/.test(itme)       //(조건) B로 시작하는가?
// })
// //const b = fruits.findIndex(itme => /^B/.test(itme))     //위의 코드를 람다식으로 고침
// console.log(b);     //출력값 : 1


// // .includes()
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'orange']

// // numbers 배열에 3 이라는 데이터가 포함되어있냐? true flase로 반환해줘
// const a = numbers.includes(3)
// console.log(a);

// // fruits0 배열에 Jin 이라는 데이터가 포함되어있냐? true flase로 반환해줘
// const b = fruits.includes('Jin')
// console.log(b);


// // .push()    ||    .unshift()
// // 원본 데이터가 수정된다 주의!!
// // push는 배열의 가장뒷쪽에 데이터 삽입 || unshift는 배열의 가장앞쪽에 데이터 삽입
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'orange']

// // numbers배열 가장 뒷쪽 부분에 5라는 데이터를 삽입한다
// numbers.push(5)
// console.log(numbers);

// // numbers배열 가장 앞쪽 부분에 0이라는 데이터를 삽입한다
// numbers.unshift(0)
// console.log(numbers);


// // .reverse()
// // 원본 데이터가 수정된다 주의!!
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'orange']

// // numbers배열의 순서를 뒤집어서 저장한다
// numbers.reverse()

// // fruits배열의 순서를 뒤집어서 저장한다
// fruits.reverse()

// console.log(numbers);   //출력값 : [4, 3, 2, 1]
// console.log(fruits);    //출력값 : ['orange', 'Banana', 'Apple']


// // .splice()
// // 원본 데이터가 수정된다 주의!!
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'orange']

// // splice(삭제를 시작할 인덱스 번호, 시작번호부터 몇개를 삭제할지)
// numbers.splice(2, 1)    // 2번인덱스 부터 1개의 요소를 지워라는 뜻
// console.log(numbers);   // 출력값 : [1, 2, 4]

// // splice(삭제를 시작할 인덱스 번호, 시작번호부터 몇개를 삭제할지, 삭제를 시작할 인덱스 번호에 넣고싶은 데이터를 입력)
// numbers.splice(2, 0, 999)    // 2번인덱스 부터 개의 요소를 지우고 999를 삽입해라
// console.log(numbers);   // 출력값 : [1, 2, 999, 3, 4]


//-------------------------------------------------------------------
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana']

// console.log(numbers);   //[1, 2, 3, 4] 출력
// console.log(fruits);    //['Apple', 'Banana'] 출력
// console.log(fruits[0]); //Apple 출력

// .find
// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find(element => element > 10);
//array1 배열의 1번째 요소부터 검사를 해서 해당 조건의 결과값으로 true가 나오면 그 요소를 반환함
// console.log(found); //출력값 12


// .length  렝스는 배열속에 요소가 몇개 있는지 반환해주는 매소드이다
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana']
// console.log(numbers.length);    //출력값 4
// console.log(fruits.length);     //출력값 4
// console.log([1,2].length);      //출력값 2
// console.log([].length);         //출력값 0


// // .concat()  콘켓을 사용하면 기존배열에다가 다른 배열의 데이터를 삽입할 수 있다
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana']

// // 콘켓을 사용하면 원본 데이터값에 변화를 주지 않고 사용이 가능!
// console.log(numbers.concat(fruits));    //출력값 [1, 2, 3, 4, 'Apple', 'Banana']
// console.log(numbers);     //출력값 [1, 2, 3, 4]
// console.log(fruits);      //출력값 ['Apple', 'Banana']



// // .forEach() 사용하려는 배열의 요소갯수만큼 반복된다!
// // fruits배열에 forEach()를 사용하면 3번 반복문이 동작한다
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'orange']

// // 매소드의 인수로 사용되는 함수를 콜백함수라고 한다 아래의 경우 이름이 없으니까 
// // 익명함수이면서 콜백함수이다
// // forEach가 실행될때 element부분에는 데이터값이 넘어오고 
// // index에는 제로베이스드의 인덱스 값이 넘어오고
// // array부분에는 forEach()를 사용하고있는 배열데이터를 지칭함 아래의 경우 fruits를 의미
// fruits.forEach(function (element, index, array) {
//     console.log(element, index, array)
// }) // 출력값
// // Apple 0 (3) ['Apple', 'Banana', 'orange']
// // Banana 1 (3) ['Apple', 'Banana', 'orange']
// // orange 2 (3) ['Apple', 'Banana', 'orange']

// // arry부분은 잘 사용하지 않기 때문에 아래처럼 사용을 많이 한다
// fruits.forEach(function (element, index) {
//     console.log(element, index)
// })      //출력값
// // Apple 0
// // Banana 1
// // orange 2


// // .map()
// //forEach()는 반환되는 값이 없는 반면에 map은 반환되는 값이 있다!!
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'orange']

// const a = fruits.forEach(function (item, i){
//     console.log(`${item}-${i}`);   
// }) 
// console.log(a); // 출력값 undefined

// const b = fruits.map(function (item, i){
//      return `${item}-${i}`
// })
// console.log(b); // 출력값 ['Apple-0', 'Banana-1', 'orange-2']

// // map()은 객체 리터럴 방식으로도 사용이 가능!
// const c = fruits.map(function (item, i){
//     return {
//         id: i,
//         name: item
//     }
// })
// console.log(c); // return형식이 객체 데이터를 반환하기 때문에 객체가 담겨진 배열을 const c에 담는다!
// // 0번 인덱스 값(객체) : {id: 0, name: 'Apple'}
// // 1번 인덱스 값(객체) : {id: 1, name: 'Banana'}
// // 2번 인덱스 값(객체) : {id: 2, name: 'orange'}


// // forEach문과 map함수를 사용한 코드를 람다(화살표)함수로 바꿔보자!
// const d = fruits.forEach((item, i) => {
//     console.log(`${item}-${i}`);   
// }) 
// console.log(d);

// //map 함수에는 따로 로직이 구현되어있지않고 return만 있기 때문에 중괄호와 return을 생략해서
// //작성할 수 있다 하지만 반환되는 내용이 객체이기 때문에 ( )소화로호 묶어둔 뒤 그안에 { } 중괄호
// //를 사용해서 객체를 작성해줘야 한다
// const e = fruits.map((item, i) =>({ id: i, name: item}))
// console.log(e);


//-------------------------------------------------------------------
// const pi = 3.141592
// console.log(pi);

// // 숫자 데이터에 toFixed(표시할 소숫점 자리)를 사용하면 입력된 소숫점 자리 까지만 보여준다
// const str= pi.toFixed(2)
// console.log(str);
// // typeof를 사용하면 어떤 타입의 변수인지 알려준다
// console.log(typeof str);

// const integer = parseInt(str)
// const float = parseFloat(str)
// console.log(integer);
// console.log(float);
// console.log(typeof integer, typeof float);


// // Math.abs() 함수는 주어진 숫자의 절대값을 반환합니다. 
// // x가 양수이거나 0이라면 x를 리턴하고, x가 음수라면 x의 반대값, 즉 양수를 반환합니다.





//-------------------------------------------------------------------
// indexOf를 사용하면 인수값과 일치하는 인덱스번호를 알수있다 
// 일치하는 값이 없을경우 -1을 반환함!
// const r = 'Hello world!'.indexOf('w')
// console.log(r);     //6 출력


// // length를 사용하면 문자열의 글자가 몇개인지 알수있다
// const str = '0123'
// console.log(str.length);        //4 출력
// console.log('0123'.length);     //4 출력

// // indexOf 뒤에 (부정비교연산) !== 을 통하여 true||false 값으로 반환 받을 수 있다 
// const str1 = 'Hello world!'
// console.log(str1.indexOf('world!') !== -1);     //true 출력


// // slice(추출을 시작할 인덱스 번호, 추출을 끝낼 인덱스 번호-1)를 사용하면
// // 문자열의 일부를 추출해서 새로운 문자열을 반환한다
// const str2 = 'Hello world!'
// console.log(str2.slice(0,3));   //Hel 출력
// console.log(str2.slice(6,11));  //world 출력


// // replace('교체당할 문자열', '교체되어서 들어갈 문자열')을 사용하면
// // 문자열의 내용을 교체할 수 있다
// const str3 = 'Hello world!'
// console.log(str3.replace('world', 'Jinwoong'));  //Hello Jinwoong! 출력
// console.log(str3.replace('world!', ''));         //Hello 출력


// // 정규표현식..?
//  const str4 = 'qwaszx3677@naver.com'
//  console.log(str4.match(/.+(?=@)/)[0]);  //qwaszx3677 출력


// // trim() 을 사용하면 불필요한 공백을 삭제시켜준다
//  const str5 = '    Hello world!   '
//  console.log(str5);              //    Hello world!    출력(공백 포함)
//  console.log(str5.trim());       //Hello world! 출력(불필요한 공백 사라짐)





//-------------------------------------------------------------------
 //상속(확장)


//  class Vehicle{
//      constructor(name, wheel){
//         this.name = name
//         this.wheel = wheel
//      }
//  }
// const myVehicle = new Vehicle('운송수단',2)
// console.log(myVehicle)
// console.log(myVehicle.name)
// console.log(myVehicle.wheel)

// extends가 확장(상속)의 의미를 갖게 만드는 키워드입니다.
// class Bicycle extends Vehicle{
//      constructor(name, wheel){
//          super(name,wheel)
//      }
//  }
//  const mYBicycle = new Bicycle('최진웅자전거',2)
//  console.log(mYBicycle)


// Bicycle 클래스의 경우 부모클래스가 가지고있는 로직을 가져와서 그대로 사용한 반면에
// Car 클래스는 부모클래스가 가지고있는 로직에 새로운 로직을 추가해서 사용하고있다
//  class Car extends Vehicle{
//      constructor(name, wheel, license){
//          super(name,wheel)
//          this.license = license
//      }
//  }






//-------------------------------------------------------------------
// ES6 Classes


// const jin = {
//     name: 'jinwoong',
//     normal: function () {
//         console.log(this.name)
//     },
//     arrow: () => {
//         console.log(this.name)
//     }
// }

// jin 객체 안에 normal이라는 이름의 함수를 축약해서 사용할 수 있다.
// 어떤 이름이 나오고 그 뒤에 소괄호 ( ) 바로 그뒤에 중괄호 { }가 나오면 function 키워드를 사용해서 일반함수로
// 만드는 개념과 동일하다!
// const jin = {
//     name: 'jinwoong',
//     normal() {
//         console.log(this.name)
//     },
//     arrow: () => {
//         console.log(this.name)
//     }
// }


// User라는 이름의 생성자 함수 정의
// function User(first, last){
//     this.firstName = first
//     this.lastName = last
// }
// 생성자 함수에 getFullName이라는 이름의 프로토타입 함수를 생성
// User.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`
// }

// 위의 생성자와 프로토 타입함수를 class로 정의하여 더욱 간결하게 작성해보자
// class User{
//     constructor(first, last){   //constructor또한 하나의 함수라고 생각하면 된다
//         this.firstName = first
//         this.lastName = last
//     }
//     getFullName(){  //프로토타입으로 선언하지않아도 class를 사용하면 함수를 생성할 수 있다!
//         return `${this.firstName} ${this.lastName}`
//     }
// }


// new를 사용해서 인스턴스(객체) 생성
// const heropy = new User('Heropy', 'Park')
// const jin = new User('Jinwoong', 'Choi')
// const song = new User('Yousong', 'Kim')
// heropy 부분은 객체 데이터를 출력
// jin, song은 getFullName함수 호출후 결과값 출력
// console.log(heropy)
// console.log(jin.getFullName())
// console.log(song.getFullName())






// -------------------------------------------------------------------
// this
// 일반(normal) 함수는 호출 위치에 따라 this 정의!
// 화살표(arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!
// const t = {
//     name: 'Heropy',
//     a :function(() => {
//         console.log(this.name)
//     });
// }
// heropy.normal()
// heropy.arrow()

// const amy = {
//     name: 'Amy',
//     normal: heropy.normal,
//     arrow: heropy.arrow
// }
// amy.normal()
// amy.arrow()




// const timer = {
//     name: 'he',
//     timeout: function() {
//         setTimeout(function(){
//             console.log(this.name)
//         },2000)
//     }

// }
// timer.timeout()

// const timer = {
//     name: 'he',
//     timeout: function() {
//         setTimeout(() => {
//             console.log(this.name)
//         },2000)
//     }
// }
// timer.timeout()
// function User(name){
//     this.name = name
// }








//-------------------------------------------------------------------
// const hero ={
//     firstName : 'heropy',
//     lastName : 'park',
//     getFullName : function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }


// function User(first, last){
//     this.firstName = first
//     this.lastName = last
// }
// User.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`
// }

// const hero = new User('heropy','park')
// const choi = new User('jinwoong','choi')

// console.log(hero.getFullName())
// console.log(choi)



//-------------------------------------------------------------------
// 콜백 (Callback)
// 함수의 인수로 사용되는 함수!
// setTimeout(함수, 시간)  ==> setTimeout이라는 함수안에 함수를 인수로 사용되니까 이게 콜백!
 
// function timeout(){
//     setTimeout(() =>{
//         console.log('kkiki')
//     }, 4000)
// }
// timeout()
// console.log('Done');
// 이렇게 작성되면~ Done이 먼저 출력된 뒤에 kkiki가 출력된다..ㅜ
// timeout함수가 다 끝난다음에 Done을 출력하기 위해서는 아래와 같이 해야한다(콜백)
// function timeout(kiki){
//     setTimeout(() =>{
//         console.log('kkiki')
//         kiki()
//     }, 4000)
// }
// timeout(() => { 
//     console.log('Done');
// })








//-------------------------------------------------------------------
// 타이머 함수
// setTimeout(함수, 시간) : 일정 시간 후 함수 실행
// setInterval(함수, 시간) : 시간 간격마다 함수 실행
// clearTimeout() : 설정된 Timeout 함수를 종료
// clearInterval() : 설정된 Interval 함수를 종료

// 익명 함수를 만들어서 넣어도 됨~
// setTimeout(function() {
//     console.log('ㅎㅇ');
// }, 3000);
// 위의 코드를 람다를 사용해서 바꿔봄 내용은 동일
// setTimeout(() => {
//     console.log('ㅎㅇ')
// }, 3000);

// setTimeout을 실행하게되면 특정한 timer값이 반환이 되는데
// 그 값을 timer라는 변수에 한번 받아봄
// const timer = setTimeout(() => {
//     console.log('ㅎㅇ')
// }, 3000);

// 화면에 Hello world!를 클릭하면 clearTimeout을 사용해서 timer가 종료되도록 만들어봄
// Hello world! 클릭하면 timer가 종료되어서 함수 실행이 안됨! ㅋㅋㅋ
// const h1El = document.querySelector('h1');
// h1El.addEventListener('click', function() {
//     clearTimeout(timer);
// })

// 위의 코드를 람다로 바꿔봤다
// const h1El = document.querySelector('h1');
// h1El.addEventListener('click', () => {
//     clearTimeout(timer);
// })



// const timer = setInterval(() => {
//     console.log('ㅎㅇ')
// }, 3000);


// const h1El = document.querySelector('h1');
// h1El.addEventListener('click', () => {
//     clearInterval(timer);
// })



//-------------------------------------------------------------------
// 호이스팅
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

// const a = 7;

// const double = function () {
//     console.log(a * 4);
// }

// double()




//-------------------------------------------------------------------
// 즉시실행함수
// IIFE, Immediately-Invoked Function Expreesion

// const a = 20;
// function double(){
//     console.log(a * 2);
// }
// double();
//  위와 같은 방법은 함수를 만들자 마자 바로 써야하는데 함수를 만들어 놓고 호출하는 번거로움이 있다


// 익명함수를 만들자
// function () {
//     console.log(a * 2);
// }
// 익명함수를 만들었더니 호출을 하지못해서 쓸수가 없다..

// 위와같은 상황을 해결하기 위해서는 익명 함수를 ( ) 괄호로 묶어주고 그 뒤에 ( ) 괄호를
// 한번더 사용한다!
// (function () {
//     console.log(a * 2);
// })()

// 위의 코드와 똑같은 내용이다! 다만 위의 경우 익명함수를 만들고 ( )를 사용해서
// 감싸 준 다음 ( )를 한번더 작성했다면 아래의 코드는 익명함수 내부에 ( )를 사용했다!
// (function () {
//     console.log(a * 2);
// }())





//-------------------------------------------------------------------
// 화살표 함수
// () => {}       vs     function ()  {}


// const double = function (x) {
//     return x*2;
// }
// console.log('double : ', double(7));


// const doubleArrow = (x) => {
//     return x*2;
// }
// console.log('doubleArrow : ', doubleArrow(7));


// const doubleArrow = (x) => x*2
// console.log('doubleArrow : ', doubleArrow(7));

// const doubleArrow = (x) => ({
//     name : 'woong'
//  })
//  console.log('doubleArrow : ', doubleArrow(7).name);

// const sum = function (x, y){
//     return x+y;
// }
// console.log(sum(1 ,10));

// const sumArrow = (x, y) => {
//     return x+y;
// }
// console.log(sumArrow(1 ,10));

// const sumArrow = (x, y) => x+y
// console.log(sumArrow(1 ,10));




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