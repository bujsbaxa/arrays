array = []

for (let i = 0; i < Infinity; i++) {
    let user = prompt('Write smth')
    let command = user.split(', ') 
    if (command[0] == 'add') {
        array.push(command[1])
    }else if(command[0] == 'del'){
        for (const key in array) {
            array[key] == command[1] ? array.splice(key,1) : ''
        }
    }else if(command[0] =='stop'){
        break
    }
    console.log(array);
}

let list = [1,2,3,4,5,6,7,8,9,10]

let even = []
let odd = []

for (let i = 0; i < list.length; i++) {
   if (list[i] %2 == 0) {
    even.push(list[i])
   }else if (list[i] %2 == 1) {
    odd.push(list[i])
   }
}

console.log(even);
console.log(odd);
