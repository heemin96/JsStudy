// const apple = {
//     name: 'apple',
//     display: function (){
//         console.log(`${this.name} : 🍎`)
//     }
// }

// const orange = {
//     name: 'apple',
//     display: function (){
//         console.log(`${this.name} : 🍊`)
//     }
// }


// console.log(apple);
// console.log(orange);

//생성자 함수 
function Fruit(name, emoji){
    this.name = name ; //this 객체 자기 자신 뜻함
    this.emoji = emoji;
    this.display = () =>{ 
        console.log(`${this.name} : ${this.emoji}`)
    }
    
}

const apple = new Fruit ('apple', '🍎');
const orange = new Fruit ('orange' , '🍊');
 console.log(apple);
 console.log(orange);
 