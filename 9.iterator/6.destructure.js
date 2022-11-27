// 구조 분해 할당 Desturcturing Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다
const fruits = ['🥝', '🍇', '🍒','🍌'];
const [first, second, ...others] = fruits;
console.log(fruits);
console.log(others);

const point = [1,2,19];
const [x,y,z=0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji(){
    return ['apple', '🍒','ddd','ddd'];
}

const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const ellie = {name: 'Ellie', age: 20, job: 's/w enginner'};

function display({name,age,job}){
    console.log('이름', name);
    console.log('나이', age);
    console.log('직업', job);
}

display(ellie);

console.log('');

const{name, age, job: occupation, pet = '강아지'} = ellie;

console.log(name);
console.log(age);
console.log(occupation);
console.log(pet);
//Quiz
console.clear();

const prop ={
    name: 'Button',
    styles:{
        size:20,
        color:'black',
    },
};

function changeColor({styles: {color}, styles:{size}}){
    console.log(color);
    console.log(size);
}
changeColor(prop);