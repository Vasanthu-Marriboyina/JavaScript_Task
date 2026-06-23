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


//Spiral Matrix .....
function spiral(n){
let num=1;
const matrix = [];
for(let i=0;i<n;i++){
    matrix.push(Array(n).fill(0));
}

let  top =0;
let bottom = n-1;
let left = 0
let right = n-1;

for(let i=left;i<=right;i++){
    matrix[top][i] = num++;

}top++;
for(let i = top;i<=bottom;i++){
    matrix[i][right] = num++;
}right--;
for(let i = right;i>=left;i--){
    matrix[bottom][i] = num++;
}bottom--;
for(let i = bottom;i>left;i--){
    matrix[i][left] = num++;
}left++;
matrix[top][left] = num++;
console.log(matrix);
}
spiral(3);


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


//Arrays GroupBy
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


// Implement Array.prototype.reduce() from scratch

Array.prototype.myReduce = function(fn,init){
    const arr = this;
    if(typeof fn !== "function"){
        throw new TypeError(
            "Callback must be a function"
        );
    }
    if(arr.length === 0 && arguments.length < 2){
        throw new TypeError(
            "Reduce of empty array with no initial value"
        );
    }
    let accumulator;
    let startIndex;
    if(arguments.length >1){
        accumulator = init;
        startIndex = 0;
    }else{
        startIndex = 0;
        while
            (startIndex < arr.length && !(startIndex in arr)){
                startIndex++;
            }
            if(startIndex >= arr.length){
                throw new TypeError("Reduce of empty array with no initial value");
            }
            accumulator = arr[startIndex];
            startIndex++;
    }
    for(let i = startIndex;i<arr.length;i++){
        if(!(i in arr))continue;
        accumulator = fn(accumulator,arr[i],i,arr);
    }
    return accumulator;
    };
//Test 1 With initial Value 0
    let result = [1,2,3].myReduce((acc,x)=>acc+x,0);
    console.log(result);
    // Test 2 without initial value
    let res = [1,2,3,].myReduce((acc,curr)=>acc+curr);
    console.log(res);
    // Empty Array With Initial Value
    let value = [].myReduce((acc,cur)=>{acc+cur},0);
    console.log(value);
    //Empty Array Without Initial Value
    // let val = [].myReduce((acc,cur)=>{acc+cur});
    // console.log(val);

    //Sparse Array
const arr = [1, , , 4];

console.log(
    arr.myReduce((acc,x)=>acc+x)
);
let ar = [1,,,4];
console.log(ar.myReduce((acc,cur)=>acc+cur));




//SubArray Sum O(n2) notation
function subarraySum(array,k)
{
    for(let i=0;i<array.length;i++){
        let sum = 0;
        for(let j=i;j<array.length;j++){
            sum += array[j];
        if(sum===k){
            console.log(array.slice
                (i,j+1)
            );
        }
    }
    }
}
let arra = [1, 2, 3, 0, 3, 3];
subarraySum(arra,3);



// O(n) Solution Using Prefix Sum Map
function subArraySum(arr,k){
    const result = [];
    const map = new Map();
    map.set(0,[-1]);
    let prefixSum = 0;
    for(let i=0;i<arr.length;i++){
        prefixSum += arr[i];
        const needed = prefixSum-k;
        if(map.has(needed)){
            for(const start of map.get(needed)){
                result.push(arr.slice(start+1,i+1));
            }
        }
        if(!map.has(prefixSum)){
            map.set(prefixSum,[]);
        }
        map.get(prefixSum).push(i);
    }return result
}
console.log(subArraySum([1,2,3,0,3],3));
