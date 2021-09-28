console.log(typeof null); //output:object <- 하위 버전 호환성으로 object 표기

const null_check = null;
const null_check12 = 123;
console.log(null_check === null); // output=true;
console.log(null_check12 === null); // output=false;

let name; // 할당 후 초기화 하지 않음
console.log(name); // output:undefined