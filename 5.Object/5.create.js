// const apple = {
//     name: 'apple',
//     display: function (){
//         console.log(`${this.name} : π`)
//     }
// }

// const orange = {
//     name: 'apple',
//     display: function (){
//         console.log(`${this.name} : π`)
//     }
// }


// console.log(apple);
// console.log(orange);

//μμ±μ ν¨μ 
function Fruit(name, emoji){
    this.name = name ; //this κ°μ²΄ μκΈ° μμ  λ»ν¨
    this.emoji = emoji;
    this.display = () =>{ 
        console.log(`${this.name} : ${this.emoji}`)
    }
    
}

const apple = new Fruit ('apple', 'π');
const orange = new Fruit ('orange' , 'π');
 console.log(apple);
 console.log(orange);
 