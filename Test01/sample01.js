//=====================================================================================================================================================================

// // 구조 분해 할당
// // 비구조화 할당

// const user = {
//     name: 'Jinwoong',
//     age: 28,
//     email: 'qwaszx3677@naver.com'
// }
// const {name, age, email, address} = user

// console.log(`사용자의 이름은 ${name} 입니다`);
// // 사용자의 이름은 Jinwoong 입니다
// console.log(`${name}의 나이는 ${age} 입니다`);
// // Jinwoong의 나이는 28 입니다
// console.log(`${name}의 이메일 주소는 ${email} 입니다`);
// // Jinwoong의 이메일 주소는 qwaszx3677@naver.com 입니다
// console.log(address);
// // undefined

// const t = ['Apple', 'Banana', 'Orange']
// const [a, b, c, d] = t
// console.log(a, b, c, d);
// // Apple Banana Orange undefined

//=====================================================================================================================================================================

// 객체를 JSON으로 변경시키기

// 객체 생성
let obj = {
    a: 10,
    b: '오랑이',
}

// 객체를 JSON문자열로 변경
let str = JSON.stringify(obj);
console.log(str, typeof(str));  // {"a":10,"b":"오랑이"} string

// >>>> 전송....

let obj2 = JSON.parse(str);
console.log(obj2, typeof(obj2));    // {a: 10, b: '오랑이'} object







//=====================================================================================================================================================================

// //Math 함수
// console.log(Math.PI);

// // Math.random()
// console.log(Math.random());     // 0.0 ~ 0.9 사이의 double가 출력된다!
// console.log(Math.random()*10);  // 0.0 ~ 9.9 사이의 double가 출력된다!
// console.log(Math.floor(Math.random() * 10));    // 0 ~ 9 사이의 정수가 출력된다!


// // Math.sin()

// let r = 30.0 * Math.PI / 180.0
// console.log(r);

// console.log(Math.sin(r));

//=====================================================================================================================================================================

// // 클래스 생성
// function Apple(){
//     this.a = 10
// }

// // 클래스 생성
// function Orange(){
//     this.b = 10
// }

// // Apple을 Orange가 상속받는다
// Orange.prototype = new Apple();
// Orange.prototype.constructor = Orange;

// // Orange 인스턴스를 생성해서 사용하면
// // 상속받았기 때문에 Apple의 요소 또한 사용됨
// let ins = new Orange();
// console.log(ins.a, ins.b);



// // 클래스 생성
// function Apple(){
//     // Apple의 요소로써 query라는 객체를 갖는다
//     this.query={
//         naem: '오랑이',
//         age: 120,
//     }
// }

// // 클래스 생성
// function Orange(){
//     // Orange의 요소로써 req라는 객체를 갖는다
//     this.req = {
//         x: 10,
//         y: 20,
//     }
// }

// // Apple을 Orange가 상속받는다
// Orange.prototype = new Apple();
// Orange.prototype.constructor = Orange;

// // Orange 인스턴스를 생성해서 사용하면
// // 상속받았기 때문에 Apple의 요소 또한 사용됨
// let ctx = new Orange();

// // req는 보이는데 query라는 내용이 안보인다?
// // query를 써지는 이유는 상속받은 Apple가 있기 떄문임
// console.log(ctx);       
// // req:{x: 10, y: 20}
// // __proto__:Apple

// console.log(ctx.query); // {naem: '오랑이', age: 120}
// console.log(ctx.req);   // {x: 10, y: 20}






//=====================================================================================================================================================================

// // 객체를 만드네? {}를 사용하네?
// // key: value, 를 사용하네?
// let obj0 = {name:'오랑이0', n1: 10, n2: 60,}
// let obj1 = {name:'오랑이1', n1: 20, n2: 70,}
// let obj2 = {name:'오랑이2', n1: 30, n2: 80,}
// let obj3 = {name:'오랑이3', n1: 40, n2: 90,}
// let obj4 = {name:'오랑이4', n1: 50, n2: 10,}

// // 비어있는 배열을 하나 만든다
// let ar = [];

// // 비어있는 배열에 생성된 객체를 push한다
// ar.push(obj0);
// ar.push(obj1);
// ar.push(obj2);
// ar.push(obj3);
// ar.push(obj4);

// ar.forEach(item => console.log(item))   // 배열에 있는 모든 요소가 출력됨
// // 위의 코드를 람다식이 아닌 일반함수식으로 표현하면 아래의 코드와 같다
// // ar.forEach(function(item){
// //     console.log(item);
// // })      // 배열에 있는 모든 요소가 출력됨



// // 비어있는 배열을 하나 만든다
// let ar = [];

// // 비어있는 배열에 객체를 push
// ar.push({name:'오랑이0', n1: 10, n2: 60,})
// ar.push({name:'오랑이1', n1: 20, n2: 70,})
// ar.push({name:'오랑이2', n1: 30, n2: 80,})
// ar.push({name:'오랑이3', n1: 40, n2: 90,})
// ar.push({name:'오랑이4', n1: 50, n2: 10,})

// ar.forEach(item => console.log(item))   // 모든 요소 출력




// // 생성자 함수를 만들어서 인스턴스로 리턴받아서 사용하겠다??
// function Make(name, n1, n2) {
//     this.name = name
//     this.n1 = n1
//     this.n2 = n2
// }

// // 비어있는 배열을 하나 만든다
// let ar = [];

// // 비어있는 배열에 push를 할건데 함수를 사용해서 리턴받은 인스턴스를 push함
// ar.push(new Make('오랑이0',10, 60))
// ar.push(new Make('오랑이1',20, 70))
// ar.push(new Make('오랑이2',30, 80))
// ar.push(new Make('오랑이3',40, 90))
// ar.push(new Make('오랑이4',50, 10))

// ar.forEach(item => console.log(item))   // 모든 요소 출력




// // 생성자 함수를 만들어서 인스턴스로 리턴받아서 사용하겠다??
// function Make(name, n1, n2) {
//     this.name = name
//     this.n1 = n1
//     this.n2 = n2
// }

// // 비어있는 배열을 하나 만든다
// let ar = [];

// // 비어있는 배열에 push를 할건데 함수를 사용해서 리턴받은 인스턴스를 push함
// ar.push(new Make('오랑이0',10, 60))
// ar.push(new Make('오랑이1',20, 70))
// ar.push(new Make('오랑이2',30, 80))
// ar.push(new Make('오랑이3',40, 90))
// ar.push(new Make('오랑이4',50, 10))


// // 객체에 output이라는 함수를 추가하라
// ar.forEach((item, i) =>{
//     ar[i].sum = item.n1 + item.n2
//     // ar[i].output = function(){
//     //     console.log(item.name, item.n1, item.n2, item.sum);
//     // }
// })
// Make.prototype.output = function(){
//     console.log(this.name, this.n1, this.n2, this.sum);
// }

// for(let index in ar){
//     ar[index].output();
// }










//=====================================================================================================================================================================


// // f라는 함수가 객체가 생성될때 마다 계속 생성된다
// function f1(){
//     return{
//         a: 10,
//         f: function(){}
//     }
// }

// let obj1 = f1()
// let obj2 = f1()
// console.log(obj1.f === obj2.f);     // false

// // f라는 함수가 인스턴스가 생성될때 마다 계속 생성된다
// function F1(){
//     this.a = 10
//     this. f = function(){

//     }
// }

// let ins1 = new F1()
// let ins2 = new F1()
// console.log(ins1.f === ins2.f);     // false


// // 인스턴스 생성할때마다 함수가 생성되니.. 메모리 측면에서 부담스럽다
// // 이를 해결하기 위해서 prototype을 사용한다

// function F2(){
//     this.a = 10
// }
// F2.prototype.f = function(){}
// // 프로토타입을 사용하면 하나의 함수를 만들어서 생성되는 인스턴스들이
// // 공통적으로 사용할 수 있게된다.
// let ins3 = new F2()
// let ins4 = new F2()
// console.log(ins3.f === ins4.f);     // true


// let obj = {

// }
// obj.f1 = function(){
//     console.log(1);
// }
// obj.f1();    // 1



// function F1(){

// }
// F1.prototype.f1 = function(){
//     console.log(2);
// }
// let ins1 = new F1()
// ins1.f1()   // 2

//=====================================================================================================================================================================

// // 일반 함수에서 this는 호출되는 시점의 this를 참조
// // 에로우 함수에서 this는 자신이 만들어진 범위 밖의 함수의 this를 참조

// // 생성자함수 (클래스) >> new
// function Func(){
//     this.num = 100;
//     this.obj ={
//         num: 200,
//         f1: () => {
//             //console.log(this);      //  Func { num: 100, obj: { num: 200, f1: [λ: f1], f2: [λ: f2] } }
//             console.log(this.num);    //  100
//         },
//         f2: function(){
//             //console.log(this);      //  { num: 200, f1: [λ: f1], f2: [λ: f2] }
//             console.log(this.num);    //  200
//         }
//     }
// }

// let ins = new Func()    // 생성자함수를 통해 new로 만든 녀석은 객체가 아닌 인스턴스라고함..
// ins.obj.f1()    // 100
// ins.obj.f2()    // 200


// // 객체안에서 람다함수를 사용할때는 this는 사용하지 말자
// let obj ={          // {} {} {} 스코프 열고닫고 하는녀석 obj는 객체이다
//     num: 100,
//     func01: () => {
//         console.log(this);      // {}
//         console.log(this.num);  // undefined
//     },
//     func02: function(){
//         console.log(this);      // { num: 100, func01: [λ: func01], func02: [λ: func02], func03: [λ: func03] }
//         console.log(this.num);  // 100        
//     },
//     // func01을 최신문법[ES6]으로 바꾸면 아래의 코드가 된다
//     func03(){
//         console.log(this);      // { num: 100, func01: [λ: func01], func02: [λ: func02], func03: [λ: func03] }
//         console.log(this.num);  // 100
//     },
// }

// obj.func01()    
// obj.func02()    
// obj.func03()


// // 객체안에서 람다함수를 사용할때는 this는 사용하지 말자
// let obj ={
//     num: 100,
//     func01: () => {
//         console.log(this);      // {}
//         console.log(this.num);  // undefined
//     },
//     func02: function(){
//         console.log(this);      // { num: 100, func01: [λ: func01], func02: [λ: func02], func03: [λ: func03] }
//         console.log(this.num);  // 100
//     },
//     // func01을 최신문법[ES6]으로 바꾸면 아래의 코드가 된다
//     func03(){
//         console.log(this);      // { num: 100, func01: [λ: func01], func02: [λ: func02], func03: [λ: func03] }
//         console.log(this.num);  // 100
//     },
// }

// obj.func01()    
// obj.func02()    
// obj.func03()


//=====================================================================================================================================================================


// //            문자열          배열             객체
// // length       O              O                X
// // forEach      X              O                X
// // forIn        O              O                O
// // forOf        O              O                X
// // map          X              O                X
// //             ' '            [ ]              { }
// //                            index           property

// let str = 'hello'
// let ar = ['tiger', 20, 3, '4']
// let ins = {key: 'value', name: '진웅', age: 28}

// // length
// console.log(str.length);    // 5
// console.log(ar.length);     // 4
// console.log(ins.length);    // undefined


// // forEach
// ar.forEach((item, index) => {
//     console.log(`인덱스값 : ${index}    요소값 : ${item}`);
// })
// // 출력값
// // 인덱스값 : 0    요소값 : tiger ​
// // 인덱스값 : 1    요소값 : 20 ​​
// // 인덱스값 : 2    요소값 : 3 
// // 인덱스값 : 3    요소값 : 4 ​


// // forIn    요소 하나 출력하고 줄바꿈 일어남..
// for(const i in str){
//     console.log(str[i]);    // h, e, l, l, o
// }

// for(const i in ar){
//     console.log(ar[i]);    // tiger, 20, 3, 4
// }

// for(const i in ins){
//     console.log(ins[i]);    // value, 진웅, 28
// }


// // forOf
// for (const value of str) {
//     console.log(value);     // h, e, l, l, o
// }

// for (const value of ar) {
//     console.log(value);     // tiger, 20, 3, 4
// }

// // map
// const br = ar.map((item, i) => {
//     return {
//         id: i,
//         name: item
//     }
// })
// console.log(br);    
// // 출력값
// // [ { id: 0, name: 'tiger' },
// // { id: 1, name: 20 },
// // { id: 2, name: 3 },
// // { id: 3, name: '4' } ]



//=====================================================================================================================================================================

// // 결석데이터 찾기 (나이 데이터에 2000살이 들어올 수 없지 않느냐..?)
// // 이런 말도 안되는 데이터를 걸러내는 방법!
// // every( )     boolean값을 리턴한다
// let ar = [1, 2, 10, 39, 20, 44]

// function  func(vlaue) {
//     return vlaue < 45;
// }
// console.log(ar.every(func));    // true

// // every안에 함수 조건으로 단 하나라도 만족하지 못한다면 fasle값을 리턴한다!
// let br = [1, 2, 10, 39, 20, 55]
// console.log(br.every(func));    // false

// // every안에 들어가는 함수를 람다식으로 표현해봤다
// let cr = [1, 2, 10, 39, 20, 41]
// console.log(cr.every( vlaue => vlaue < 45));    // true



//=====================================================================================================================================================================
// // some안의 함수 조건으로 단 하나라도 만족한다면 true값을 리턴한다
// // 단 하나도 만족하지 못했을 경우에만 fasle값을 리턴한다
// // some( ) 
// let ar = [1, 2, 10, 39, 20, 44]
// console.log(ar.some(v => v % 2 == 0));  // true
// // 2로 나눴을때 나머지가 0이라면? 
// let br = [1, 3, 11, 33, 21, 43]
// console.log(br.some(v => v % 2 == 0));  // false



// // 내가 원하는 데이터만 뽑아서 배열로 받고싶을때 사용하는 매소드
// // filter() 
// let ar = [1, 2, 10, 39, 20, 44]
// // ar의 요소를 v로 받았는데 그 요소가 15보다 작다면 br에 삽입해라
// let br = ar.filter( v => v < 15);
// console.log(br);    // [1, 2, 10]



// // 배열의 길이를 알려준다
// // 배열뿐만 아니라 문자열의 길이 또한 알려준다
// // length()
// let ar = [1, 2, 10, 39, 20, 44]
// console.log(ar.length);      // 6

// let str = 'asdasduhad'
// console.log(str.length);     // 10



// // ar 배열에서 글자수가 3글자 이하인 요소만 뽑아서 br배열에 삽입하고
// // br 배열을 출력해보세요
// let ar = ['tiger','dog','lion','cat', 'ai']
// let br = ar.filter(v => v.length < 4)
// console.log(br);    //['dog', 'cat', 'ai']


// // 배열생성
// let ar = [0, 1, 2, 3, 4]

// // reduce함수에 들어갈 callback함수 생성
// let reducer = function (acc, currentValue) {
//     return acc + currentValue
// }

// // reduce함수에 callback함수만 넣고 initialValue는 작성하지 않았음
// // 따라서 reduce()는 인덱스 1부터 시작해 콜백 함수를 실행하고 0번 인덱스는 건너 뜁니다.
// // 총4번의 콜백함수 실행이 일어난다
// ar.reduce(reducer);



// // 배열생성
// let ar = [0, 1, 2, 3, 4]

// // reduce함수에 들어갈 callback함수 생성
// let reducer = function (acc, currentValue) {
//     return acc + currentValue
// }

// // reduce함수에 callback함수와 initialValue 둘다 작성함
// // 따라서 acc의 값은 initialValue (10)과 같은 값이 되고 currentValue는 배열의 0번 인덱스 값과 같아지며
// // 총5번의 콜백함수 실행이 일어난다
// ar.reduce(reducer, 10);    

// let sum = [0, 1, 2, 3, 50]
// let reducer = function (accumulator, currentValue) {
//     return accumulator + currentValue;
// }
// console.log(sum.reduce(reducer, 0));    // 56

// let sum = [10, 20, 30, 40]
// console.log(sum.reduce((accumulator, currentValue) => accumulator + currentValue));    // 100

// let iv = 0;
// let sum = [{x: 10}, {x: 20}, {x: 30}]
// console.log(sum.reduce(
//     (acc, curr) => acc + curr.x, iv)
// );  // 60

// let iv = 0;
// let sum = [{x: 10}, {x: 20}, {x: 30}]
// let reducer = function(acc, curr) {
//     return acc + curr.x
// }
// console.log(sum.reduce(reducer,iv));
  
// let a = [[0, 1], [2, 3], [4, 5]]
// let reducer = function (acc, curr) {
//     return acc.concat(curr);
// }
// console.log(a.reduce(reducer, []));  //펼친 결과: [0, 1, 2, 3, 4, 5]

// // 위의 코드를 람다 함수로 치환하면 아래의 코드가 된다
// let a = [[0, 1], [2, 3], [4, 5]]
// console.log(a.reduce((acc, curr) => acc.concat(curr), [])); //펼친 결과: [0, 1, 2, 3, 4, 5]


// let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

// let reducer = function(acc, curr){
//     if(curr in acc){    // acc 안에 curr이 있냐?
//         acc[curr]++;
//     }
//     else{
//         acc[curr] = 1;  // acc 안에 curr이 없다면 acc[curr] 의 값을 1로 선언
//     }
//     return acc; // acc를 리턴
// }

// console.log(names.reduce(reducer,[]));  //['Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1]

// // 위의 코드를 람다식으로 치환하면 아래의 코드가 된다

// let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
// console.log(names.reduce((allNames, name) => {  //['Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1]
//     if (name in allNames) {
//         allNames[name]++;
//       }
//       else {
//         allNames[name] = 1;
//       }
//       return allNames;
// },[]));

// let people = [
//     { name: 'Alice', age: 21 },
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ];


// function group(objArray, property) {
//     return objArray.reduce(function (acc, obj) {
//         let key = obj[property];
//         if(!acc[key]){  // 값이 있으면 true || 값이 없으면 false
//             acc[key] = []
//         }
//         acc[key].push(obj);
//         return acc;
//     }, {});
// }

// console.log(group(people, 'age'));  
// // 출력값
// // {
// //   20: [
// //     { name: 'Max', age: 20 },
// //     { name: 'Jane', age: 20 }
// //   ],
// //   21: [{ name: 'Alice', age: 21 }]
// // }


// let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
// [1, 2]
// let reducer = function (acc, curr){
//     const length = acc.length   // acc[누산기]의 길이를 length 변수에 대입
//     if (length === 0 || acc[length - 1]  !== curr) {        // length === 0 이라면 true니까 바로 실행문
//         acc.push(curr);     // acc에 curr값을 삽입          // acc[length-1] !== curr (해석 : acc에 최근에 들어온 값과 curr의 값이 같지 않다면 true)
//     }
//     return acc;
// }

// console.log(arr.sort());    // [ 1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 4, 5, 5 ]

// let result = arr.sort().reduce(reducer, [])

// console.log(result);    // [ 1, 2, 3, 4, 5 ]



// var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

// var countedNames = names.reduce(function (allNames, name) {
//     console.log(allNames, name);
//   if (name in allNames) {
//     allNames[name]++;
//   }
//   else {
//     allNames[name] = 1;
//   }
//   return allNames;
// }, {});

// let ar = [ {name: '호랑이', x: 55 }, {name: '코끼리', x: 42 }, {name: '독수리', x: 32 } ]
// console.log(ar.reduce(function(acc, curr){
//     return (acc.x > curr.x) ? acc : curr
// }));




//=====================================================================================================================================================================

// // indexOf()
// // 내부의 단어를 찾아서 위치값(인덱스번호)를 리턴해주는 함수
// let ar = ['tiger','dog','lion','cat']
// console.log(ar.indexOf('dog'));     // 출력값 : 1

// // 존재하지않는 데이터를 검색할 경우에는 -1을 리턴 해준다
// console.log(ar.indexOf('asdhaskjdnasf'));   // 출력값 : -1


// let ar = ['tiger','dog','lion','cat']

// // indexOf(찾을데이터, 몇번인덱스 부터 찾을지)
// console.log(ar.indexOf('cat', 2));      // 출력값 : 3
// console.log(ar.indexOf('cat', 10));     // 출력값 : -1

// // lastIndexOf()
// // 뒤에서부터 검색을 할뿐 결과값(인덱스번호)는 indexOf()와 똑같다!!
// console.log(ar.lastIndexOf('tiger'));   // 출력값 : 0

// // 배열속의 데이터가 중복되어 있을 경우 indexOf()와 lastIndexOf()의 결과값이 다르게 나온다!
// let ar = ['tiger','dog','lion','tiger','cat']
// console.log(ar.lastIndexOf('tiger'));   // 출력값 : 3
// console.log(ar.indexOf('tiger'));       // 출력값 : 0


//=====================================================================================================================================================================

// // splice()*   [원본데이터 손상을 줌]
// let ar = [1, 2, 3]

// // splice(시작위치, 삭제항목수, 추가항목, , , )
// // splice의 리턴값은 삭제한 값..
// ar.splice(1, 0, 10, 20, 30)   // 1번 인덱스부터 삭제, 0개삭제, [1번 인덱스위치에] 10추가, 20추가, 30추가
// console.log(ar);    // 출력값 : [1, 10, 20, 30, 2, 3]

// ar.splice(1,2,88,99)    // 1번 인덱스부터 삭제, 2개삭제, 1번 인덱스위치에 88추가, 99추가
// console.log(ar);    // 출력값 : [1, 88, 99, 30, 2, 3]

// let br = [66, 55, 44, 33]
// ar.splice(0,0,br)   // 0번인덱스부터 삭제, 0개삭제, 0번인덱스 위치에 br배열 추가
// console.log(ar);    // 출력값 : [[66, 55, 44, 33], 1, 88, 99, 30, 2, 3]





//=====================================================================================================================================================================

// // slice()  잘라내기 함수 [원본데이터에 손상을 주지않음]
// // slice(시작할 인덱스 번호, 끝낼 번호)
// // 시작할 번호부터 끝낼번호-1 번까지 잘라내기를 하세요
// let ar = [10, 20, 30, 40, 50, 60];
// let br = ar.slice(2, 4);    // 인덱스번호 2번부터~ 4번 앞까지 짤라내세요
// console.log(br);    // 출력값 : [30, 40]
// console.log(ar);    // 출력값 : [10, 20, 30, 40, 50, 60]



//=====================================================================================================================================================================

// // join()
// // join() 은 String타입으로 리턴해준다!! 배열으로 리턴하는게 아님!!!
// // join() 은 배열 요소와 요소 사이를 연결시켜서 String으로 반환해줌!
// let ar = ['tiger', 'lion', 'dog', 'cat'];
// console.log(ar);    // 출력값 : ['tiger', 'lion', 'dog', 'cat']
// console.log(ar.join('##'));     // 출력값 : tiger##lion##dog##cat
// console.log(ar.join(' + '));    // 출력값 : tiger + lion + dog + cat


// // shift()*      원본데이터에 손상을 준다
// // 배열의 가장 앞쪽(왼쪽)에 데이터 삭제 
// // 삭제된 값이 Number로 리턴해주기 때문에 뽑아서 사용가능
// let ar = [10, 20, 30]
// console.log(ar.shift());    // 출력값 : 10
// console.log(ar);            // 출력값 : [20, 30]

// // unshift()*       원본데이터에 손상을 준다
// // 배열의 가장 앞쪽(왼쪽)에 데이터 삽입
// console.log(ar.unshift(40));    // 출력값 : 3
// console.log(ar);                // 출력값 : [40, 20, 30]

// // sort()*
// // 배열의 정렬
// let ar = [52, 273, 103, 32]
// ar.sort()
// console.log(ar);    // 출력값 : [103, 273, 32, 52]



// let ar = [52, 273, 103, 32]
// // sort안에 함수를 넣을때는 인터페이스화 되어있다
// // 따라서 무조건 매개변수를 2개를 넣어줘야함!!

// // 아래의 코드는 a가 b보다 크면 양수를 리턴 작으면 음수를 리턴! 이렇게만 로직을 짜주면
// // 순차 정렬이 일어난다!
// function func(a, b){
//     // return(a < b) ? +1 : -1         // 역순정렬
//     // return(a > b) ? +1 : -1         // 순차정렬
//     return a - b;                      // a - b를 뺐을때 a가 더 크다면 양수를 리턴해주기 때문에 위의 코드와 똑같음
    
//     // 위와 같은 논리   [순차정렬]
//     // let c = a / 10 + a % 10;
//     // let d = b / 10 + b % 10;
//     // return c- d
// }

// console.log(ar);    // 출력값 : [52, 273, 103, 32]
// ar.sort(func)
// console.log(ar);    // 출력값 : [32, 52, 103, 273]

// // 위의 func함수를 if문으로 바꾼다면?
// // function func(a, b){
// //     if(a > b){          // if(a < b){      이렇게만 바꾸면 순차정렬이 아닌 역순 정렬이됨!
// //         return +1
// //     }else{
// //         return -1
// //     }
// // }


// // 객체도 정렬할 수 있다!
// // 아래 ar배열 승리한 횟수에 따라서 순차정렬해봐라
// // n:승리횟수   s:프로팀이름
// let ar = [
//     {n: 30, s: '삼성'},
//     {n: 20, s: 'LG'},
//     {n: 10, s: '롯데'},
// ]
// console.log(ar);

// function func(a, b){
//     return a.n - b.n;
// }
// ar.sort(func)

// console.log(ar);


//=====================================================================================================================================================================

// // concat은 기존배열에다가 다른 배열의 데이터를 삽입할 수 있다
// // concat       concat() [원본데이터에 손상을 주지 않는다는 뜻]
// let ar = [10, 20, 30];
// let br = ar.concat(40)
// console.log(ar);    // 출력값 : [10, 20, 30]
// console.log(br);    // 출력값 : [10, 20, 30, 40]

// let cr = [40, 50, 60]
// let dr = ar.concat(cr)
// console.log(dr);    // 출력값 : [10, 20, 30, 40, 50, 60]

// // 출력값을 [10, 20, 30, [40, 50, 60]] 이렇게 만들고 싶다면??
// // 요소를 6개가 아닌 4개의 요소를 만들고 싶다면 어떻게 할거냐??
// // 배열안에 요소를 배열로 갖고싶다니까?
// ar.push(cr)
// console.log(ar);    // 출력값 : [10, 20, 30, [40, 50, 60]]
// // 성공,,


//=====================================================================================================================================================================

// let ar = [80, 20, 10, 15]

// // push와 pop을 쓸때는 stack구조로 되어있다는 뜻!

// // 데이터를 뺀다          pop()* [원본 데이터가 손상되는 함수 라는 뜻]
// let num = ar.pop();      // pop은 Number형을 리턴값으로 취급한다. 따라서 pop한 데이터를 받아서 쓸 수 있다
// console.log(ar, num);    // 출력값 : [80, 20, 10]   15

// //  push는 데이터 하나를 삽입하는게 아니라  push( )안에 있는 데이터를 배열로 만들어서 기존의 배열에 병합하는 개념이다!
// //  리턴 값으로는 병합한 뒤의 배열 길이를 Number 자료형으로 리턴해준다
// //  데이터를 삽입한다     push()* [원본 데이터가 손상되는 함수 라는 뜻]
// let a = ar.push(20, 40)     
// console.log(ar, a);         // 출력값 : [80, 20, 10, 20, 40]   5


//=====================================================================================================================================================================

// let ar = [80, 20, 10, 15]
// console.log(ar, typeof(ar));    // 출력값 : (4) [80, 20, 10, 15] object

// // .toString()은 배열을 문자열로 치환시켜주는 매소드이다
// // .toString()
// let br = ar.toString();
// console.log(br, typeof(br));    // 출력값 : 80,20,10,15 string
// // br과 str01은 완전 똑같은 녀석이다
// let str01 = '80,20,10,15';
// console.log(str01, typeof(str01));   // 출력값 : 80,20,10,15 string

// // 날짜 관련 함수
// let date = new Date();
// console.log(date);  // 출력값 : Wed Sep 29 2021 09:55:21 GMT+0900 (대한민국 표준시)
// console.log(date.toLocaleString()); // 출력값 : 2021. 9. 29. 오전 9:56:10







//=====================================================================================================================================================================



// let ar = [
//     {
//         n: '호랑이',
//         a: 10,
//     },
//     {
//         n: '코끼리',
//         a: 22,
//     },
//     {
//         n: '고라니',
//         a: 5,
//     },
// ]

// console.log(1);
// console.log(ar);    // 출력값 : [{…}, {…}, {…}]   안의 내용을 보고싶다면 디버깅을 하자..
// console.log(2);
// // run -> 디버깅(F5)[컨트롤+F5랑 완전 다른거] 디버깅은 main문장에서 실행됨..
// // 바로 왼쪽에 라인의 번호 부분에 마우스를 올리면 빨간색 점이 생기는데 점을 클릭 --> F5
// // F10 ==> 빨간색 점 클릭(브레이크 포인트) 부터 한줄만 실행!!
// // 디버깅 종료 하고 싶다면 shift + F5
// // 브레이크 포인트는 여러개를 만들 수 있는데 F5를 누를때마다 다음 브레이크 포인트를 찾아간다
// for (const v in ar) {
//     console.log(v);
// }

// console.log(3);
// console.log(ar);
// console.log(4);
// // for in 사용하기
// for (const key in ar) {
//     let e = ar[key] // aaar에 객체를 하나씩 차곡차곡 저장한다
//     console.log(e); // ar안의 내용을 객체 통째로 하나씩 출력
//     console.log(e.n, e.a); // 객체의 요소중 n과 a의 데이터를 출력
//     console.log(e['n'], e['a']); // 바로 위의 코드와 동격코드임
// }


// // for of 사용하기
// let sum = 0;
// for (const v of ar) {
//     sum += v.a
// }   // ar배열의 요소인 객체의 a요소의 값들을 모두 더해서 sum에 저장시켜라
// console.log(sum);   // 출력값 : 37




// // map 사용하기
// let br = ar.map(
//     (v, k)=> v.n +'최진웅'
// )   // v가 넘어오는 객체이기 대문에 => 뒷부분에 어떤식으로 조건을 걸어줄지는 본인 마음
// console.log(br);    //출력값 : ['호랑이최진웅', '코끼리최진웅', '고라니최진웅']




//=====================================================================================================================================================================

// // 배열을 만드는 방법

// // 1. 초기값을 줘서 바로 만들기
// let ar = [10, 20, 30];
// console.log(ar);    // 출력값 : [10, 20, 30]

// //.length는 배열의 크기를 물어보는 메소드
// console.log(ar.length);     // 출력값 : 3

// // ar의 데이터 타입이 뭔지 물어보는 메소드
// console.log(typeof(ar));    // 출력값 : object

// // ar이 배열인지 아닌지 물어보고 boolean값으로 반환해줌
// console.log(Array.isArray(ar));     // 출력값 : true


// // 2. Array()를 통해서 직접 요소의 갯수, 데이터를 압력해서 만들기
// let br = Array();   // Array()는 []와 같은의미! 빈 배열이라는 뜻
// let cr = Array(5);  // 5개의 요소가 들어갈 수 있는 배열을 만들어 줘서 cr에 대입
// let dr = Array(10,20,30)
// console.log(cr);    // 출력값 : (5) […]
// console.log(dr);    // 출력값 : (3) [10, 20, 30]

//  // 자바스크립트 배열 안에 모든게 다 들어갈 수 있다!
//  // 배열안에 배열, 배열안에 객체 등등 다 가능!
// let ar = [
//     10,
//     '호랑이',
//     true,
//     [10,20,30],
//     {name: '독수리', age:30},
//     function(){console.log('test');},
//     undefined,
// ]
// console.log(ar);

// let ar = [10, 20, 30]
// console.log(ar);

// // for in 사용법    for(const 인덱스 in 배열이름)    
// for (const index in ar) {
//    console.log(index, ar[index]);
// }   // 출력값 : 0  10 | 1  20 | 2  30

// // for of 사용법   for(const 데이터값 of 배열이름)
// for (const value of ar) {
//     console.log(value);
// }   // 출력값 : 10    20    30


// // forEach 사용법   
// ar.forEach(
//     function(v, i){     // v = 데이터 값  i = 인덱스번호(key값)
//         console.log(v, i);
//     }
// )   // 출력값 : 10  0  |  20  1  |  30  2

// // 위의 코드를 람다식으로 만들어 보기!
// ar.forEach((v, i) => {     
//         console.log(v, i);
//     });

// // 이렇게 까지 바꿔도 되나..?
// ar.forEach((v, i) => console.log(v, i));

// console.log('2======================================');


// // map이 보이면 기존데이터를 가공해서 새로운 데이터를 만든다고 생각해버리자!!
// // map은 원본데이터에 손상을 입히지않고 반환해줄 뿐이다!
// ar.map(
//     (num) => {
//         return num * 10
//     }
// )
// console.log(ar);    // 출력값 :  [10, 20, 30]

// let br = ar.map(
//     (num) => {
//         return num * 10
//     }
// )
// console.log(br);    // 출력값 : [100, 200, 300]

// // br을 람다식으로 바꾸기!!
// br = ar.map(num => num +33)
// console.log(br);    // 출력값 : [43, 53, 63]

// let cr = [0, 1, 2, 3]

// let dr = cr.map(
//     num => {
//         if(num % 2)
//             return '홀수'
//         else
//             return '짝수'
//     }
// );
// console.log(dr);    // 출력값 : ['짝수', '홀수', '짝수', '홀수']
// // let dr과 let er은 완전히 똑같은 코드이다!! 람다식으로 변환 + 삼항연산을 통하여 단줄 처리가 되었다!
// let er = cr.map(
//     num =>  (num % 2) ? '홀수' : '짝수'
// );
// console.log(er);    // 출력값 : ['짝수', '홀수', '짝수', '홀수']


//=====================================================================================================================================================================

// // 함수도 객체의 속성으로 사용이 가능하다!!
// let obj ={
//     a: 10,
//     b: 20,
//     f1: ()=>{console.log('f1');}
// }

// console.log(obj);       //출력값 : {a: 10, b: 20, f1: ƒ}
// obj.b=99;   // 데이터 갱신이 일어남
// obj.c=77;   // c는 obj객체에 없는 속성 이지만 자동으로 객체에 속성를 추가해서 사용할 수 있게 해줌
// console.log(obj);       //출력값 : {a: 10, b: 99, f1: ƒ, c: 77}

// delete(obj.b);  // 객체의 속성 삭제 방법
// console.log(obj);   // 출력값 : {a: 10, f1: ƒ, c: 77}

// // 함수도 객체에 추가해서 사용할 수 있다!!
// obj.f2 = () => {
//     console.log('test');
// }
// console.log(obj);   // 출력값 : {a: 10, f1: ƒ, c: 77, f2: ƒ}


// let obj1 ={
//     a: 10,
//     b: 20,
//     f1: function(){
//         console.log(a, b);
//     }
// }
// obj1.f1()    // 출력값 : erro 발생.. obj안에 a, b를 사용하고 싶다면 함수에 this를 써야한다

// let obj2 ={
//     a: 10,
//     b: 20,
//     f1: function(){
//         console.log(this.a, this.b);
//     },
//     // 객체 내부에서 에로우 함수를 쓰면 this로 참조를 할 수 없다.
//     f2: ()=>{
//         console.log(this.a, this.b);
//     }
// }

// obj2.f1()    // 출력값 : 10  20
// obj2.f2()    // 출력값 : undefined undefined    // 객체 내부에서 에로우 함수를 쓰면 this로 참조를 할 수 없기 때문..

// let obj3 ={
//     a: 10,
//     b: 20,
//     f1: function(){
//         console.log(this.a, this.b);
//     },

//     // 객체 내부의 데이터값을 보기위한 f2함수 작성!
//     f2: function(){
//         for (const key in this) {   //this : obj3  key: index
//             console.log(this[key]);
//         }
//     }
// }
//  obj3.f2()      // 출력값 : 10    20   f(){        f(){

// let c = 'tiger'
// let obj4 = {
//     a: 10,
//     b: 20,
//     [c]: 30     // c가 가지고있는 값 자체를 key값으로 사용한다
// }
// console.log(obj4.a);    // 출력값 : 10
// console.log(obj4.b);    // 출력값 : 20
// console.log(obj4.c);    // 출력값 : undefined
// console.log(obj4.tiger);    // 출력값 : 30

// let c = 'tiger'
// let obj4 = {
//     a: 10,
//     b: 20,
//     [c]: 30     // c가 가지고있는 값 자체를 key값으로 사용한다
// }

// let obj = {
//     a:10
// }
// // 속성 추가
// obj.b = 20;
// console.log(obj);   // 출력값 : {a: 10, b: 20}

// // 속성 추가
// obj['c'] = 30
// console.log(obj);   // 출력값 : {a: 10, b: 20, c: 30}

// for (let i = 0; i < 4; i++) {
//     obj['tiger' + i] = i * 10;
// }

// console.log(obj);   // 출력값 : {a: 10, b: 20, c: 30, tiger0: 0, tiger1: 10, …}

// let obj ={
//     a: 10,
//     b: 20,
// }

// // Object의 함수를 사용해서 key값 추출하기
// console.log(Object.keys(obj));      //출력값 : ['a', 'b']

// // Object의 함수를 사용해서 value값 추출하기
// console.log(Object.values(obj));    //출력값 : [10, 20]



// // obj1 과 obj2를 병합해서 obj3을 만든다
// let obj1 ={
//     a: 10,
//     b: 20,
// }

// let obj2 ={
//     c: 10,
//     d: 20,
// }

// // 옛날(구형) 방법
// //Object.assign(병합1, 병합2)를 통해서 병합해서 반환해준다
// let obj3 = Object.assign(obj1, obj2)

// console.log(obj3);  // 출력값 : {a: 10, b: 20, c: 10, d: 20}


// // 최신 방법(ES6 문법)
// // ...을 사용해도 위에 Object.assign(병합1, 병합2) 한것 처럼 병합된값을 반환해준다
// let obj4 = {...obj1, ...obj2}
// console.log(obj4);   // 출력값 : {a: 10, b: 20, c: 10, d: 20}

// let f1 = (o)=>{
//     console.log(o.d);
// }
// f1({...obj1, ...obj2})  // 출력값 : 20


//=====================================================================================================================================================================
 
// //       배열          객체
// //        []           { }
// //       index        proprty 
// // forEach사용가능    forEach사용불가
// //  length사용가능    length사용불가

// // 객체 생성 ,(콤마)를 사용함
// let t = {
//     name: '호랑이',
//     age: 100,
//     bl: true
// }

// console.log(t);     // 출력값 : {name: '호랑이', age: 100, bl: true}
// console.log(t.name, t.age, t.bl);       // 출력값 : 호랑이 100 true
// // key를 사용해서 출력하는 방법
// console.log(t['name'], t['age'], t['bl']);         // 출력값 : 호랑이 100 true

// // 객체의 key값 뽑아내는 방법
// for (const key in t) {
//     console.log(key);
// }   // 출력값 : name    age   bl


// // 객체의 데이터값 뽑아내는 방법
// for (const key in t) {
//     console.log(t[key]);
// }   // 출력값 : 호랑이   100   true


// console.log(t.name, t.age, t.bl);   // 출력값 : 호랑이 100 true

// // with(객체){  }를 사용하면 중괄호{}안에서는 t객체를 참조하고있다는 가정하에 사용이 가능하다!
// with(t){
//     console.log(name, age);     // 출력값 : 호랑이 100
// }

//=====================================================================================================================================================================

// let str ='';
// str += 'let a = 10;'
// str += 'console.log(a);'
// // str을 출력해봤자 그저.. 문자열일 뿐..
// console.log(str); //출력값 : let a = 10;console.log(a);

// // eval을 사용했기 때문에 str의 내용은 문자열이 아닌 명령어로 인식되어
// eval(str);  // 출력값 : 10





//=====================================================================================================================================================================

// // 일반적으로 생각하길 
// // 출력값 : 0  (2초뒤)   1  (2초뒤)   2
// // 하지만 결과값 : (2초뒤) 3   
// for (var i = 0; i < 3; i++) {
//     setTimeout(
//         () =>  console.log(i),2000
//     )
// }

// // 결과값 : (2초뒤)  0   1   2
// for (let i = 0; i < 3; i++) {
//     setTimeout(
//         () =>  console.log(i),2000
//     )
// }

// // 결과값 : (2초뒤)  0   1   2
// // (2초뒤)0   (2초뒤)1   (2초뒤)2 이렇게 출력할 수 없는 이유는
// // for문이 뻉! 돌면서 setTimeout함수를 거의 동시에 3번을 실행하기 때문임
// for (let i = 0; i < 3; i++) {
//     (function(num){
//         setTimeout(
//             () => console.log(num),2000
//         )
//     })(i);
// }




//=====================================================================================================================================================================

// console.log('1');

// // 2초 뒤에 함수를 출력하라는 의미! 
// setTimeout(
//     function(){
//         console.log('3');
//     },
//     2000
// )

// console.log('2');

// // 출력값 : 1   2  (2초뒤)  3




// console.log('1');
// // 2초 간격으로 3을 출력하라
// let id = setInterval(() =>console.log('3'),2000)
// console.log('2');
// // 아래의 코드를 람다식으로 변화시키면 위의 코드가 된다
// // let id = setInterval(
// //     function(){
// //         console.log('3');
// //     },
// //     2000
// // )
// // 출력값 : 1 2 (2초마다) 3출력
// setTimeout(
//     () => {
//         clearInterval(id)
//     },
//     13000
// )





//=====================================================================================================================================================================


// let f1 = () => {
//     return 100;
// }
// // 위의코드 [람다함수]에서 return 딱 한줄만 있을 경우에는 아래의 코드처럼
// // return과 {}를 생략할 수 있다
// // 위와 아래의 코드는 동일한 코드이다
// let f2 = () => 100;



// let f3 = () => {
//     return console.log('1')
// }
// // 위와 아래의 코드 또한 동일한 코드이다
// let f4= () => console.log('1');




// // step1, 2, 3은 모두 동일한 코드이다!
// // step 1
// let t1 = () => b => 100;

// // step 2
// let t2 = () => () => {
//     return 100
// };

// // step 3
// let t3 = () => {
//     return b => {
//         return 100
//     }
// };
// console.log(t3()());    // 출력값 100

// // step 4, 5, 6, 7 모두 동일한 코드이다!
// // 위의 에로우 함수에 인수값을 전달햇을때의 모습은?
// // step 4
// let t4 = (a) => {
//     return() => {
//         return 100 + a
//     }
// }
// console.log(t4(20)()); //  출력값 120

// // step 5
// let t5 = (a) => {
//     return(b) => {
//         return a + b
//     }
// }
// console.log(t5(44)(100)); // 출력값 144

// // step 6
// let t6 = (a) => {
//     return(b) => a + b
// }

// // step 7 인수전달이 한개일때는 ()를 생략해서 사용하는게 좋다!!
// let t7 = (a) => (b) => a + b // 아래의 코드와 완전히 동일한 코드이다! 
// let t7 = a => b => a + b    //인수전달이 1개만 있을때는 ()를 생략할 수 있다




//=====================================================================================================================================================================


// ((a) => {(b) => {} })();

// (function(a){
//     (function(b){

//     })
// })();



// ((a) => { ((b) => {})() })();

// ((a)=>{
//     console.log(a);
//     ((b)=>{
//         console.log(b)
//     })(20)
// })(10);


// let f1 = function(fc){

// }

// f1(((a) => {
//     ((b) => {
//         console.log(a+b)
//     })(20)
// })(100));


// f1 = function(){

// }


//=====================================================================================================================================================================

// // 함수를 변수에 넘겨서 사용하는 방법
// let f1 = function(a){
//     console.log(a);
// }
// f1(10)  //출력값 10

// // 위의 함수를 람다로 변경시켜 사용하는 방법
// f2 = (a) => {
//     console.log(a);
// }
// f2(20)  //출력값 20

// // (a) => {(b) => {}} 꼴로 코드를 짜보세요
// let f3 = (a) => {
//     console.log(a);
//     let f3 = (a) => {
//         console.log(a+10);
//     }
//     f1(a+3)
// }
// f3(3)


//=====================================================================================================================================================================

// // 클로즈 함수
// // 지역변수가 사라지지않고 계속 사용할 수 있는 상태로 만들어 놓는것
// let f1 = function(){
//     let a = 100;
    
//     // 내부함수는 자기자신이 만들어진 함수 범위 안에 변수를 사용할 수 있다
//     return function(){
//         console.log(a);
//     }
// }

// // 자바스크립트가 아닌 다른 랭귀지에서는 아래의 코드가 절대 실행되지 않는다
// // 함수 범위 밖으로 나왔기 때문에 a라는 변수가 죽어버리기 때문!
// // 하지만 JS에서는 클로즈 기법을 사용하기 때문에 a변수가 살아있다
// f1()()  // 출력값 : 100




//=====================================================================================================================================================================

// // 즉시실행 함수인데 함수자체를 ()처리 하지않아서 오류
// function(){
//     console.log('1');
//     return function(){
//         console.log('2');
//     }
// }   

// // 즉시실행함수 발동! 1을 출력하고 함수를 리턴받았다
// (function(){
//     console.log('1');
//     return function(){
//         console.log('2');
//     }
// })();

// // 즉시실행함수 발동! 1을 출력하고 리턴받은 함수도 호출하여 2를 출력한다!
// (function(){
//     console.log('1');
//     return function(){
//         console.log('2');
//     }
// })()();






//=====================================================================================================================================================================


// let f1 = function(fc){
//     console.log('1');
//     let f2 = function(){
//         console.log('2');
//     }
//     return f2;      // return f2(); 이것과 return f2; 이것은 엄청난 차이다 엄청난차이!!
//                     // return f2(); 이것은 함수를 호출한 값을 리턴한다는 의미이고
//                     // return f2; 이것은 함수 자체를 리턴 해준다는 의미이다
// }

// f1()    // 출력값 1 
// f1()()  // 출력값 1   2     f1()을 호출하고 f2를 리턴받았기 때문에 ()를 한번더 붙여주면 f2까지 호출한다는 의미

// let f3 = function(){
//     console.log('3');
//     return function(){
//         console.log('4');
//     }
// }
// f3()    //출력 3
// f3()()  //출력 3   4



//=====================================================================================================================================================================

// // 함수의 인수로 함수를 던져주는 방법
// let f1 = function (fc) {
//     console.log('1');
//     fc();
// }

// let f2 = function () {
//     console.log('2');
// }

// // 방법 1   인수로 함수를 던져줌
// f1(f2); // 1  2 출력

// // 방법 2   인수로 익명함수를 던져줌
// f1(function () {
//     console.log('3');
// }) // 1 3 출력

// // 방법 3 람다식으로 사용
// f1(() => {
//     console.log('4');
// }); // 1 4 출력

//=====================================================================================================================================================================

// // 내부 함수
// // 함수 내부에 함수를 만들어서 함수 내부에서만 사용가능하도록 만드는 기법
// let f1 = function(){
//     console.log('1');
//     let f2 = function(){
//         console.log('2');
//     }

//     f2()
// }

// f1()


// f1 = function(){
//     console.log('3');
//     f2 = function(){
//         console.log('4');
//     }

//     f2()
// }

// f1()



//=====================================================================================================================================================================
// // 자바스크립트의 함수선언 방법 4가지

// // 1. 함수선언 방식 [function name방식]  호이스팅이 됨!
// function f1(){
//     console.log('1');
// }
// f1();        //출력값 1


// // 2. 함수표현 방식       변수에 저장하기 때문에 함수에는 이름을 사용하지 않는다
// // 호이스팅이 되지 않는다!
// let f2 = function(){
//     console.log('2');
// }
// f2();       //출력값 2


// // 3. 람다식
// let f3 = () => {
//     console.log('3')
// }
// f3();        //출력값 3


// // 4. 즉시실행함수[IIFE] 익명함수 + 바로 호출해서 사용
// // step 1
// let f4 = function(){
//     console.log('4');
// }
// f4();

// // step 2   익명함수를 선언만하고 호출을 하지 않았기 때문에 console.log('4') 는 실행되지 않는다
// function(){
//     console.log('4');
// }

// // step 3   이때부터는 사용이 가능한 함수이다
// (function(){
//     console.log('4');
// })();

// // step 4   step3번의 내용을 람다식으로 표현했다
// (()=>{
//     console.log('4');
// })();


// // 함수에서 매개변수 넘겨주기
// // 함수의 매개변수에는 자료형은 쓰지 않는다
// function f4(num){
//     console.log(num)
// }
// f4(100);

// // 위의 코드를 즉시실행 함수로 바꿔본다
// (function(num){
//     console.log(num,);
// })(200);




// let start = new Date().getTime();
// while(new Date().getTime() < start+2000);
// console.log('test');
// // 위의 코드와 아래의 코드는 완전 동일한 코드이다!
// // 아래 코드중 함수호출 부분에 2000의 내용은 인수로써 매개변수 dt의 값이 되어 내부에 적용이 되기 때문이다
// (function(dt){
//     let start = new Date().getTime();
//     while(new Date().getTime() < start+dt);
// })(2000);
// console.log('test');



// // 5. 생성자 함수 [자바의 클래스와 동일한 개념]
// // 함수의 첫번째 글자가 대문자로 작성되면
// // 생성자 함수가 된다 [자바의 클래스 개념과 동격이됨]
// // 함수를 호출할때 함수명의 첫째 글자가 대문자냐 소문자냐에 따라 함수인지 생성자함수인지 알 수 있다
// // 클래스(생성자함수)의 멤버변수 작성 방법 [this]
// // 클래스(생성자함수)에서 멤버를 만들어 줄때 멤버변수 간에 ,(콤마)를 사용해서 구분하지않고 한라인에 멤버변수 1개를 만든다
// function Fff555(){
//     this.num1 = 10  //내부에서 멤버변수를 만들어줄떄 ,(콤마) 사용 절대 안함!!
//     this.num2 = 20
//     this.m1= function(){
//         console.log(this.num1);
//     }
//     // 아래의 코드는 위의 m1 코드를 람다식으로 표현해봤음
//     this.m2= () => {
//         console.log(this.num2);
//     }
// }
// // new를 사용해서 객체를 만들어냄!
// let ins = new Fff555();
// ins.m1()    //출력값 10
// ins.m2()    //출력값 20

// //위에서 객체를 만들어서 .(도트) 찍어서 사용하는 것과 아래의 코드는 동일함!
// new Fff555().m1()   //출력값 10
// new Fff555().m2()   //출력값 20


// function t1(){
//     console.log('1');
// }
// function t2(n,s){
//     console.log(n+s);
// }
// // 함수의 원형만 보고는 return이 있는지 없는지 알지못해서
// // 코드의 가독성이 현저히 떨어진다는 단점 또한 있다
// function t3(){
//     console.log('3');
//     return 888
// }
// function t4(n){
//     console.log('4');
//     return n*2
// }

// t1()
// t2(20, '호랑이')    //숫자 2개를 쓰던, 숫자와 문자열을 쓰던 인수 두개를 합친것을 return해줌
// t3()    //인수전달이 없고 return이 항상 888임!
// t4(33)  //인수전달 받은 내용에 2를 곱해줬다

// // arguments 내장객체 사용하기(가변인수)
// // [가변인수 전달] 함수의 매개변수로 몇개가 올지 모를때 사용할수있게함!!
// function t5(){
//     console.log(arguments[0]);  //출력값 10
//     console.log(arguments[1]);  //출력값 20
//     console.log(arguments[2]);  //출력값 30
// }
// t5(10, 20, 30)

// function t6(){
//     let sum = 0;
//     for (let key in arguments) {
//         sum += arguments[key]
//     }
//     console.log(sum);   //출력값 60
// }

// t6(10, 20, 30)

//=====================================================================================================================================================================
//  // while(new Date().getTime()<start+2000);

// // == 값이 똑같냐? [타입 상관 x]
// console.log(100 == 100);    //true
// console.log(100 == '100');  //true

// // === 값도 같고 타입또한 같냐?
// console.log(100 === 100); //true
// console.log(100 === '100'); //false


// // 자바스크립트에서 사용하는 코드 테크닉
// let a = 10
// if(a > 3){
// console.log('test');
// }

// //위와 아래의 코드는 둘다 출력이되고 완전히 똑같은 코드이다!
// a > 3 && console.log('test');



//=====================================================================================================================================================================


// let start = new Date().getTime();
// console.log(start);

// // start에서 보여지는 1000은 1초이다!
// // 아래의 for문은 1초동안 돈다!! 
// for (var i = 0; new Date().getTime() < start + 1000 ; i++) {
// }

// //i의 값은 1초동안 for문이 반복된 횟수를 의미한다
// console.log(i);

// // 시간지연[프로그램을 잠시 멈추는 방법]
// while(new Date().getTime()<start+2000);
// console.log('호랑이');





//=====================================================================================================================================================================
// // Date() 대한민국 현재 날짜 시간 요일 등을 알수있다
// let a = new Date()
// console.log(a.getFullYear(), '년');
// //0월+1
// console.log(a.getMonth()+1, '월');
// console.log(a.getDate(), '일');
// // 0(일) 1(월) 2(화)
// console.log(a.getDay(), '요일');
// console.log(a.getHours(), '시');
// console.log(a.getMinutes(), '분');
// console.log(a.getSeconds(), '초');
// console.log(typeof a);

//=====================================================================================================================================================================
// 산술연산, 비교연산, 논리연산, 증가연산, 감소연산,
// += 복합대입연산, 제어문, 삼항연산, true, false 전부다 java랑 동일함

// 제곱근 쉽게 구하기
// console.log(2 ** 8);  // 2의8승




//=====================================================================================================================================================================
// // String, Number 자료형 변환시키기!
// let str = "호랑이"
// str += '독수리'
// console.log(str);       //출력값 :호랑이독수리


// let s = '1000'
// let n = 1000
// console.log(typeof(s), typeof(n));      //출력값 :number number

// console.log(typeof(Number(s)),typeof(String(n)));       //출력값 :number string



//=====================================================================================================================================================================

// //여기서 a는 숫자형 데이터 이지만
// let a= 10
// console.log(typeof(a));     //출력값 number

// // 이순간 숫자형 데이터에서 string데이터로 변하게 된다
// a= '호랑이'
// console.log(typeof(a));     //출력값 string





//=====================================================================================================================================================================

// // 객체타입 [JSON타입과 99% 똑같다!]
// let tiger = {
//     a: 10,
//     b: '호랑이',
//     c: true,
//     d: [],
//     e: {},
//     f: function(){},
//     g: undefined
// }

// console.log(tiger.a);       //출력값 10
// console.log(tiger.b);       //출력값 호랑이




//=====================================================================================================================================================================
// // 2. 데이터 타입

// // 숫자 타입
// let a = 10
// // 문자열 타입
// let b = '호랑이';
// // boolean타입
// let c = true
// // 배열 타입(오브젝트)
// let d = []
// // 오브젝트 타입    // JS에서 가장 중요하게 사용하는 타입
// let e = {}  
// // 함수 (function) 타입
// let f = function(){}
// // undefined 타입
// let g = undefined

// console.log(1,`${typeof(a)}`);
// console.log(2,`${typeof(b)}`);
// console.log(3,`${typeof(c)}`);
// console.log(4,`${typeof(d)}`);
// console.log(5,`${typeof(e)}`);
// console.log(6,`${typeof(f)}`);
// console.log(7,`${typeof(g)}`);



//=====================================================================================================================================================================

// // 1. 출력code와 변수 선언
// // JS의 자료형은 단3가지만 있다!
// console.log('hello world!');
// var a= 10
// let b= 30
// const c= 20
// // JAVA와 다르게 연속해서 변수들을 출력할 수 있다.
// console.log(a, b, c);

