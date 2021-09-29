// // filter()
// // filter() 반환 값 : 조건을 만족하는 요소로 이루어진 새로운 배열. 어떤 요소도 조건을 만족시키지 못했으면 빈 배열을 반환합니다.
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// // words배열의 요소 갯수만큼 반복작동 하며 0번 인덱스 값부터 word라는 이름의 변수에 담아서
// // 문자열의 길이가 6 보다 크다면 result라는 배열에 데이터를 저장하고 아니라면 다음 인덱스로 넘어가서 
// // 반복문을 끝까지 실행한다
// const result = words.filter(word => {
//   return word.length > 6
// });
// console.log(result); // 출력값 :  ['exuberant', 'destruction', 'present']



// //값이 10 이하인 모든 요소가 제거된 걸러진 배열을 만들기 위해 filter()를 사용합니다.
// function isBigEnough(value) {
//     return value >= 10;
//   }
  
//   var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
//   // 결과값 : [12, 130, 44]
// let fruits = ['Apple', 'Banana', 'orange']
// let c = fruits.map((item, i) => id: i); 
// console.log(c);

// const cc = fruits.map(function (item, i){
//   return {
//       id: i,
//       name: item
//   }
// })
// console.log(cc);

