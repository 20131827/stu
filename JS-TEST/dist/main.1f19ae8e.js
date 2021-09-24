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
// indexOf를 사용하면 인수값과 일치하는 인덱스번호를 알수있다 
// 일치하는 값이 없을경우 -1을 반환함!
var r = 'Hello world!'.indexOf('w');
console.log(r); //6 출력
// length를 사용하면 문자열의 글자가 몇개인지 알수있다

var str = '0123';
console.log(str.length); //4 출력

console.log('0123'.length); //4 출력
// indexOf 뒤에 (부정비교연산) !== 을 통하여 true||false 값으로 반환 받을 수 있다 

var str1 = 'Hello world!';
console.log(str1.indexOf('world!') !== -1); //true 출력
// slice(추출을 시작할 인덱스 번호, 추출을 끝낼 인덱스 번호-1)를 사용하면
// 문자열의 일부를 추출해서 새로운 문자열을 반환한다

var str2 = 'Hello world!';
console.log(str2.slice(0, 3)); //Hel 출력

console.log(str2.slice(6, 11)); //world 출력
// replace('교체당할 문자열', '교체되어서 들어갈 문자열')을 사용하면
// 문자열의 내용을 교체할 수 있다

var str3 = 'Hello world!';
console.log(str3.replace('world', 'Jinwoong')); //Hello Jinwoong! 출력

console.log(str3.replace('world!', '')); //Hello 출력
// 정규표현식..?

var str4 = 'qwaszx3677@naver.com';
console.log(str4.match(/.+(?=@)/)[0]); //qwaszx3677 출력
// trim() 을 사용하면 불필요한 공백을 삭제시켜준다

var str5 = '    Hello world!   ';
console.log(str5); //    Hello world!    출력(공백 포함)

console.log(str5.trim()); //Hello world! 출력(불필요한 공백 사라짐)
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63075" + '/');

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