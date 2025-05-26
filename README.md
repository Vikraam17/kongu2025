Git commands
git config –global user.name “your name“
git config –global user.email “your email“

git init
git add index.html
git branch -M main (changing from master to main)
git commit -m "Created index.html"         
 git remote add origin ‘your repo link’
 git push -u origin main

git add .
git commit -m "modified index.html"
git push     //upload content to a remote repository

git pull
git clone https://github.com/Vikraam17/kongu2025.git


git checkout -b vikraam     // creating new branch

git branch    // list out all branches in terminal

git checkout main or git switch main // Switch to one branch to another
git pull origin vikraam       // get the changes from the give branch 

Flex and Grid
<div class="flex">
        <div class="f1">Box1</div>
        <div class="f1">Box2</div>
        <div class="f1">Box3</div>
        <div class="f1">Box4</div>
    </div>
    <div class="grid">
        <div class="g1">grid1</div>
        <div class="g1">grid2</div>
        <div class="g1">grid3</div>
        <div class="g1">grid4</div>
    </div>
    <style>
        .flex{
            display: flex;
            justify-content: center ;
            align-items: center;
            height:100vh;
            width:100vw;
        }

        .grid{
            display: grid;
            grid-template-rows: 200px 200px;
            grid-template-columns: 200px 200px 200px;
        }
    </style>
Arrow function 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello world from CSE</h1>
    <div class="flex">
        <div class="f1">Box1</div>
        <div class="f2">Box2</div>
        <div class="f3">Box3</div>
        <div class="f4">Box4</div>
    </div>
    <div class="grid">
        <div class="g1">grid1</div>
        <div class="g2">grid2</div>
        <div class="g3">grid3</div>
        <div class="g4">grid4</div>
    </div>
    <style>
        .flex{
            display: flex;
            justify-content: center ;
            gap: 0.5rem;
            align-items: center;
            height:100vh;
            width:100vw;
        }
        .f1{
            background-color: aqua;
             border: solid 1px black;
        }
        .f2{
            background-color: chocolate;
            border: solid 1px black;
        }

        .grid{
            display: grid;
            grid-template-rows: 200px 200px;
            grid-template-columns: 200px 200px 200px;
        }
        .g1{
            background-color: aqua;
            border: 1px solid black;
            text-align: center;
        }
        .g2{
            background-color: greenyellow;
            border: 1px solid black;
            text-align: center;

        }
        .g3{
            background-color: orangered;
            border: 1px solid black;
            text-align: center;

        }
        .g4{
            background-color: gold;
            border: 1px solid black;
            text-align: center;
            color: white;
        }
    </style>
    <script>
        function demo1(){
            console.log("Hello")
        }
        demo1()
        const demo=(a,b)=>{
            console.log("5"+1); // 51
            console.log("5"-1); // 4
            console.log("5"==5);// true
            console.log("5"===5); // false
            console.log("4"!=3); //true
            console.log("4"!==3); //true
        }
        demo()
    </script>
</body>
</html>
ES6 Features
// Spread Operator
var arr = [10,20,30];
var arr1 = [...arr, 40, 50 ,60];
console.log(arr);
console.log(arr1);

// Destructuring Operator
var marks = [100,89,98,96,97];
var [m1,m2,m3,m4,m5] = marks;
console.log(m1,m2,m3,m4,m5);

//call back function
function demo(){
    console.log("Hello from demo");
}

const callback = (callbackfun)  =>{
    console.log("Hello from Call back");
    callbackfun();
}
callback(demo)
//template literals
var name ="viky"
console.log(`My name is ${name}`) 

//MAP-accept a function return new array
function addOne(n){
    return n*2;
}
let array=[1,2,3,4,5];
let mappedarr=array.map((i)=>{return i*2})
// let mappedarr=array.map((i)=>{addOne(i)})
console.log(array);
console.log(mappedarr);

//filter-returns a new array based on the condition
const filteredArray=array.filter((i)=>{return i%2===0});
console.log(filteredArray); 

//REDUCE-accept two parameters(accumulate value,current value) and 
// return single value based on the function 
const reducedArray =array.reduce((sum,current)=>{return sum+current},0);
console.log(reducedArray);
