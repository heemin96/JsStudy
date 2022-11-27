//단항연산자 Unary Operators
// + (양)
// -(음)
// !(부정)
let a = 5;

a = -a; // -1*5
console.log(a);

a = -a;
console.log(a);

a = +a;
console.log(a);

let boolean = true;

console.log(boolean);
console.log(!boolean);
console.log(!!boolean);

console.clear();

console.log(+false); //0
console.log(+null); //0
console.log(+''); //0
console.log(+true); //1 
console.log(+'text');  //Nan(Not a number)
console.log(+undefined); //Nan

console.log(!1);
//+ 숫자가 아닌 타입들을 숫자로 변환하면 어떤값이 나오는지 확인할 수 있음
// !! 값을 boolean 타입으로 변환함