// Flatten a deeply nested array without flat().
function flattenDeep(arr){
    let stack = [...arr];
    let result = []; //empty array
    while(stack.length>0){
        let current = stack.pop();
        if(Array.isArray(current))
            stack.push(...current);
        else
            result.push(current);
    }
    return result.reverse();
}

let flatArray = [1, [2, [3, [4, [5]]]]];
console.log(flattenDeep(flatArray));


//Spiral Matrix Printing.

function spiralMatrix(n){
    let matrix= Array.from({ length : n},()=>Array(n));
    let top = 0;
    let bottom = n-1;
    let left = 0;
    let right = n-1;
    let num = 1;
    while(top <= bottom && left <= right){
        for(let i = left;i<=right;i++){
            matrix[top][i] = num++;
        }
        top++;
         for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num++;
        }
        right--;
         for (let i = right; i >= left; i--) {
            matrix[bottom][i] = num++;
        }
        bottom--;
         for (let i = bottom; i >= top; i--) {
            matrix[i][left] = num++;
        }
        left++;


    }
    return matrix;
}
console.log(spiralMatrix(3));


//Sequential async loop (no Promise.all).

let card = document.querySelector(".cards");

const ids = [1, 2, 3, 4, 5];

async function fetchUsers() {
    for (const id of ids) {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        const user = await response.json();
        let {name,username,email}=user;
        card.innerHTML += `<div class="card"><h1>${id}</h1><h2>${name}</h2><h3>${username}</h3><h4>${email}</h4></div>`

        // console.log(user);
    }
}

fetchUsers();



function groupBy(arr, key) {
    const result = {};

    for (const item of arr) {
        const value = item[key];

        if (!result[value]) {
            result[value] = [];
        }

        result[value].push(item);
    }

    return result;
}
const people = [
  { name: 'Ali', city: 'HYD' },
  { name: 'Sara', city: 'MUM' },
  { name: 'Raj', city: 'HYD' }
];

console.log(groupBy(people, "city"));