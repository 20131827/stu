// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
//-------------------------------------------------------------------
//  // Object.assign()
// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };
// // target 객체에 source를 병합한다는 의미 <중복되는 데이터를 덮어씀>
// const returnedTarget = Object.assign(target, source);
// console.log(target);                // 출력값:  Object { a: 1, b: 4, c: 5 }
// console.log(returnedTarget);        // 출력값:  Object { a: 1, b: 4, c: 5 }
// Object.assign()
var userAge = {
  // key : value
  name: 'jinwoong',
  age: 35
};
var userEmail = {
  name: 'jinwoong',
  email: 'qwaszx3677@naer.com'
};
var target = Object.assign(userAge, userEmail);
console.log(target);
console.log(userAge);
console.log(target === userAge);
var a = {
  k: 123
};
var b = {
  k: 123
};
console.log(a === b); //-------------------------------------------------------------------
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
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54361" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map