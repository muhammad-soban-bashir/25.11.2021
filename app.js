// let sum=0;
// let counter=1;
// while(counter<=100){
//     if(counter % 2 == 0){
// sum = sum + counter;
// var str = Number("2894");
// console.log(typeof(str));
// var num = String(42984);
// console.log(num,typeof(num));
// var a = String(true);
// console.log(a,typeof(a));
// var bool = Number(true);
// console.log(bool);
// var b = parseInt("75.7645874");
// console.log(b,typeof(b));

// var a= parseFloat(65.65);
// console.log(a.toFixed(29),typeof(a));
// var s1 = "soban";
// var s2 = " khan";
// console.log(s1+s2);
// s1=s2;
// console.log(s1);
// var x=43;
// console.log(x=='43');
// var month = 5;
// switch(month){
//     case 1:
//         console.log("jan");
//         break;
//     case 2:
//         console.log("feb"); 
//         break;
//     case 3:
//         console.log("june"); 
//         break;
//      case 4:
//         console.log("july");
//          break;
//      case 5:
//         console.log("march");
//         break;  
//     case 6:
//         console.log("apr"); 
//         break;
// }

// var month = "july";

// switch(month){

//     case "june":
//     console.log("6th month")
//     break;
//     case "july":
//     console.log("7th month")
//     break;
// }
// var a= false;
// switch(a){
//     case true:
//          console.log(1);
//          break;
//     case false:
//          console.log(0);
//          break;
// }
// PRIME NO ;;
// var number = -1;
// var isPrime = true;
// if(number === 1){
//     console.log("1 is neither prime nor odd");
// }
// else if(number > 1){
//     for(i=2;i<number/2;i++)
//     {
//         if(number % i ==0)
//         {
//             isPrime = false;
//             break; 
//         }
//     }
//     if(isPrime ==true)
//     {
//         console.log("number is prime");
//     }
//     else
//     console.log("not prime");
// }
// else 
// console.log("wrong input");
// var num1 =;
// var num = num1;
// var b= 0;
// var i = 1;
// while(num>0){
//      a = num % 10;
//     num =parseInt(num / 10); 
//      b = b + a*a*a;
// }
// if(num1 == b){
//     console.log("yes");
// }
// else
// {
// console.log("no");
// }
// console.log("no");
// var num =0;
// var num1 = 1;
// var i=num;
// if(num == 0 || num ==1)
// { 
//     console.log("fictorial is 1");
// }
// else 
// { do{
//  num1 = num1 *i;
//  i--;
// }while(i>0);
//  console.log(`fictorial is ${num1}`);
// }
// function sum(x,y){
//     return x+y;
// }
// console.log(sum(5,10));

// var a = "soban khan";
// console.log(a);
// console.log(typeof(a)

// var b = "khan"
// var a= "MUHAMMAD SOBAN BASHIR";
// console.log(a.length);
// console.log(a.toLowerCase());
// console.log(b.toUpperCase());
// console.log(a.includes("BAN"));
// console.log(a.includes("DAMM"));


// var a = 'soban';
// var b = "khan ";
// console.log(a.concat(b));


// var a = ["soban","khan","bike"];
// var b = a.push("nouman");
// // a.pop();
// // a.pop();
// // a.sort();
// // var b = a.pop();

// delete a[1];
// // b =a.shift();


// for (i=0 ; i<a.length;i++)
// {
//     console.log(a[i]);
// }
// // console.log("after altration");
// // console.log(b);



// var str1 = "soban";
// var str2 = "khan";
// console.log(str1 +str2);

// var a = "welcome";
// a+=" to rawalakot";
// console.log(a);


// var  a= 53;
// var b =63;
// var result = a+b +" jani " + a+b;
// document.write("<h1> the value of a+b is " + result + " hello moto <h1/>" );


// var a =12;

// var b = (a>=53)?"true":"false";
// console.log(b);
//prime number problem
// var num=97;
// var isPrime =true;

// for(i=2;i<=num/2;i++){
//     if(num%i==0)
//     {
//         isPrime=false;
//     }

// }

// if(isPrime){
//     console.log("num is prime");
// }
// else 
// console.log("num is not prime");



// armstrong number


// var num= 8732;
// var num1 =num;
// var temp;
// var num2=0;
// while(num1>0){
// temp = num1%10;
// num2=num2+temp*temp*temp;
// num1=parseInt(num1/10);
// }

// if(num==num2){
//     console.log("no is armstrong");
// }
// else
// console.log("not armstrong");



//fictorial using do while loop  //comment


// var num=20;
// var x=1;
// var temp=num;
// do{
//     num=num*x;
//      x++;
// }while(x<temp);

// console.log("fictorial of "+temp + " is" +num);


// function sum (x,y)
// {

//     var total = x+y;
//     console.log(total);
// }
// sum(54,46);


// for (var i=0;i<10;i++){
//     document.write("hello world<ul>");
//     document.write("</ul>");
// }

// var arr = ["soban","khan"];
// arr.push("jani");
// arr.pop();
// for(var i=0;i<arr.length;i++){
//     document.write("<h1>"+arr[i]+ "</h1>");
// }

// var arr1 =["itm1","itm2"];
// var arr2 =arr1;
// console.log(arr1);
// console.log(arr2);

// arr2.push("itm3");
// console.log(arr1);
// console.log(arr2);



// var arr1 = ["itm1","itm2","itm3"];
// // var arr2 =arr1.slice(0,2).concat(["itm4"]);
// // // var arr2 = [].concat(arr1);
//  var arr3 =["itm7","itm8"];
// var arr2 = [...arr1 , "itm4","itm5", ...arr3];
// console.log(arr2); 



// var fruits = ["apple","mango","grapes","banana"];

// for(let i=fruits.length-1;i>=0;i--)
// {
//     console.log(fruits[i]);
// }
// var fruits = ["apple","mango","grapes","banana"];
// for (let fruit of fruits){
//     console.log(fruit);
// }
// for(let fruit in fruits){
//     console.log(fruits[fruit].toUpperCase());
// }
// let[var1,var2] = fruits;
// console.log(var1);
// console.log(var2);
// var arr2 = fruits.slice(2);
// console.log(fruits);
// console.log(arr2);
// var key ="email";
// const person = {
//     name: "soban",
//     age: 22,
//     hobbies:["sleeping","coding"],
// };
// console.log(person);
// console.log(person["name"]);
// console.log(person["hobbies"]);
// person.gender = "male";
// console.log(person);
// person[key] = "sobanbashir7@hmail.com";
// console.log(person);
// const person = {
//     name: "soban",
//     age: 22,
//     hobbies:["sleeping","coding"],
// };
// for(let key in person){
//     console.log(key,person[key]);
// }
// console.log(Object.keys(person));
// for(let key of Object.keys(person)){
//     console.log(person[key])
// }
// var obj1 ={
//     key1:"value1",
//     key2:"value2"
// };
// var obj2 = {
//     key3: "value3",
//     key4:"value4"
// };
// var newObj ={...obj1,...obj2,key5:"value5"};
// console.log(newObj);
// var obj ={
//     key1:"value1",
//     key2: "value2",
//     key3:"value3"
// };
// console.log(Object.keys(obj));



//  const singer = {
//     name1:"atif",
//     name2:"falak",
//     name3:"jani",
// };

// let var1 = singer.name1;
// let var2 = singer.name2;


// console.log(var1,var2);

// let {name1:var1,...newObject} = singer;

// console.log(name2);

// console.log(newObject);

// let {name2:var2,name3:var3} = newObject;

// console.log(var2,var3);


// const arr = [
//     {userID:1, Name:"soban",age:22,gender:"male"},
//     {userID:2, Name:"hamza",age:23,gender:"male"},
//     {userID:3, Name:"khola",age:25,gender:"female"},

// ];

// console.log(arr[0]);

// for(let arr1 of arr){
//     console.log(arr1.age);
// }


// let [{Name:val,userID:id}, , {Name}] = arr;
// console.log(id);


// function isEven(number){
//     return number%2===0

// }


// console.log(isEven(5));




// function soban(arr,target){
// for(let i = 0;i<arr.length;i++){
//     if(target === arr[i])
//     return i;
// }
// return -1;



// }

// const arr = [1,2,3,4,5]
// console.log(arr.includes(5));


// const sum = function(num1,num2){
// console.log(num1+num2);
// }

// sum(2,9);


// const sum = (num1,num2) =>{
//     console.log(num1 + num2);
// }


// sum(6,76);

// function app(){
//    console.log("hello world");

//    var add = function(num1,num2) {
//        return num1+num2;

//    }
//    console.log(add(2,3));

// }

// app();


// function app(){
//     console.log("app");
//     var var1 = "soban"
//     const myfunc = ()=>{
//         console.log("myfunc");

//         const inner = function(){
//             console.log(var1);
//         }
//         inner();
//     }
//     myfunc();

// }

// app();


// function add(a,b=0){
//     console.log(a+b);
// }



// add(43)





// rest parameters
// var b=0
// function add(...a){
//     for(let num of a){
//         b=num+b;
//     }
//     console.log(b);
// }


// add(12,3,4,5,6,7,8,9,45,56,67,78);




// CALL BACK FUNCTION
// function fun1(a){
//     console.log("hello");
//     a(32,43);
// }

// function add(x,y){
//     console.log(x+y);
// }

// fun1(add)




// function myfun(){

//     function innerfun(){
//       return "jani"
//        }
//    return innerfun;
// }

// console.log(myfun()());



// arr = [1,2,3,4,5];



// arr.forEach((number,index) => {
//     console.log(number*2);
//     console.log(index);
// });




// const users =[
//     {Name:"soban",gender:"male", age:22},
//     {Name:"hamza",gender:"male", age:23},
//     {Name:"khola",gender:"female", age:25},
// ]

// users.forEach(function(user){
//     console.log(user.Name);
//     console.log(user.age);
// })


// for(let user of users){
//     console.log(user.Name);
//      console.log(user.age);
// }


// users.forEach((user) => {
//     console.log(user.Name);
//     console.log(user.age);
// })

// map method

// const arr = [1,2,3,4,5];

// var square = function(number){
//     return number *number
// }

// console.log(arr.map(function(number){
//     return number*number;
// }))
//   const square = arr.map(number =>{
//       return number *number
//   })

//   console.log(square);



// const users =[
//     {Name:"soban",gender:"male", age:22},
//     {Name:"hamza",gender:"male", age:23},
//     {Name:"khola",gender:"female", age:25},
// ]

// const names = users.map(user =>{
// return user.age;
// });
// console.log(names);

// let [name1,name2] = names;
// console.log(name1);

// filter method

// const arr =[1,2,3,4,5,6,78,8];

// function iseven(num){
// return num %2===0;
// }


// console.log(arr.filter(iseven));

// const isodd = arr.filter(num=>{
//     return num %2!==0;
// })

// console.log(isodd);



// const cart = [
//     {Name:"mobile", price: 20000},
//     {Name:"laptop", price: 200000},
//     {Name:"charger",  price: 2000},
// ]


// const a = cart.reduce((total,current)=>{
//     return total + current.price
// },0);
// console.log(a);


// const  arr=[32,21,30,4,5];

// const a = arr.sort((a,b)=>{
//     return a-b;
// });
// console.log(a);

// const arr = [ 
//     {companyName:"salts", start:1880,end:2022,netWorth:4000000},  
//     {companyName:"tata", start:2000,end:2022,netWorth:5000000},
//     {companyName:"facebook", start:2021,end:2022,netWorth:6000000},
//     {companyName:"minecraft", start:2902,end:2022,netWorth:7000000},
//     {companyName:'pubg', start:1880,end:2022,netWorth:8000000},
//     {companyName:"youtube", start:1880,end:2022,netWorth:9000000},

// ]

// const Net = arr.reduce((total,current)=>{
//      return total +=current.netWorth
// },0);

// console.log(Net);

// find method 
// when find first true value


// const arr =[
//     {userID:1,userName:"soban"},
//     {userID:2,userName:"bilal"},
//     {userID:3,userName:"hamza"},
//     {userID:4,userName:"omair"},
//     {userID:5,userName:"salim"},

// ]

// const value =arr.find((user)=>{
//     return user.userID === 4;
// })



// console.log(value);



// const arr = [2,4,6,8,7];

// console.log(arr.every(num=>num%2===0));



// const arr = [
//     {name:"soban",age:22},
//     {name:"bilal",age:43},
//     {name:"don",age:12},
//     {name:"chota don",age:34},
//     {name:"khan",age:50},
// ]

// // console.log(arr.every(user => user.age<45));


// console.log(arr.some(user => user.age>50));



// const arr = new Array(10).fill("soban")

// console.log(arr);


//  const arr =[12,3,4,5,6,6,7,7];

// arr.fill(0,3,6);
// console.log(arr);

// splice method 
// insert and delete


// const arr = ["itm1","itm2","itm3"];
// delete
// arr.splice(1,1);
// console.log(arr);


// insert

// arr.splice(2,0,"soban");
// console.log(arr);

// const arr = ["itm1","itm2","itm3"];
// const arr1 =arr.slice(0);
// console.log(arr1);

// var user = new Set([1,2,3,4,5]);
// // console.log(user);
// for(let a of user){
//     console.log(a);
// }

// const arr =["jani",1,2,3];
// const number = new Set();
// number.add("soban");
// number.add("khan");
// number.add(arr)
// for(let Name of number){
//     console.log(Name);
// }


// console.log(number.has(arr));


// const person = new Map();

// person.set("firstName","soban khan");
// person.set(1,"one");
// person.set("age",7);

// // console.log(person.get(1));

// for(let key of person.keys()){
//     console.log(key);
// }

// for (let [key,value] of person){
//     console.log(key,value);
// }


// const user = {
//     id:1,
//     firstname:'soban',
// }

// const extraInfo= new Map();

// extraInfo.set(user,{age:12,gender:"male"});

// // console.log(extraInfo);
// console.log(extraInfo.get(user));
//  const a=function() {
//     console.log(`name of user is ${this.firstName} and age is ${this.age}`);
// };
// const user1 ={
//     firstName:"soban",
//     age:12,
//     fun:a,
// }
// const user2 ={
//     firstName:"jani",
//     age:22,
//     fun:a,
// }
// const user3 = {
//     firstName:"khan",
//     age:17,
//     fun:a,
// }

// user1.fun();
// user3.fun();
// user2.fun();


// function about(a,b){
//     console.log(`name is ${this.firstName} and age is ${this.age}`,a,b);
// }



// const user1 ={
//     firstName:"soban",
//     age:32,
// }
// const user2={
//     firstName:"khan",
//     age:22,
// }
// const user3 ={
//     firstName:"jani",
//     age:12,
// }
// about.apply(user1,["no","khan"]);
// about.call(user3,"khano","sems");
// about.call(user2,"sobano","bano");

// let func = about.bind(user3,"////soban",22);

// func();


// function createUser(Name,age,gender,adress){
//     const user = {};
//     user.firstName = Name;
//     user.age = age;
//     user.gender = gender;
//     user.adress= adress;
//     user.about = function(){
//         console.log(`${this.firstName} is ${this.age} years old`);
//     }

//     user.is18 = function(){
//         return this.age >=18;
//     };
//     return user;
// }

// var user1 = createUser("soban",22,"male","myadress");
// // // console.log(user1.gender);
// // // console.log(user1.about());
// // // console.log(user1.is18());

// user1.about();
// console.log(about);


// const obj ={
//    about : function(){
//         console.log(`${this.firstName} is ${this.age} years old`);
//     },

//     is18 : function(){
//         return this.age >=18;
//     },

// }


// function createUser(Name,age,gender,adress){
//     const user = {};
//     user.firstName = Name;
//     user.age = age;
//     user.gender = gender;
//     user.adress= adress;
// user.about =obj.about;
// user.is18 = obj.is18;
// return user;

// }
// var user1 = createUser("khan",22,"male","myadress");
// var user2 = createUser("soban",62,"male","myadress");
// var user3 = createUser("bashir",12,"male","myadress");

// user3.about();
// console.log(user3.is18());

// console.log(user2.gender);






// const obj = {
//     about: function () {
//         return (`${this.firstName} is ${this.age} years old`);
//     },

//     is18: function () {
//         return this.age >= 18;
//     },

// }



// function createUser(Name, age, gender, adress) {
//     const user = Object.create(obj);
//     user.firstName = Name;
//     user.age = age;
//     user.gender = gender;
//     user.adress = adress;

//     return user;

// }

// var user1 = createUser("soban", 22, "male", "myAdress")

// console.log(user1.about());
// console.log(user1.is18());



// function value(){
//     console.log("this is func");

// }

// value.prototype.abc = "soban";
// value.prototype.xyz = "khan";
// value.prototype.num = function(){
//     return 3*5;
// }
// console.log(value.prototype);
// value();

// function createUser(Name, age, gender, adress) {
//     const user = Object.create(createUser.prototype);
//     user.firstName = Name;
//     user.age = age;
//     user.gender = gender;
//     user.adress = adress;

//     return user;

// }


// createUser.prototype.about = function () {
//     return `${this.firstName} is ${this.age} years old`;
// }

// createUser.prototype.is18 = function () {
//     return this.age >= 18;
// }
// createUser.prototype.sing = function () {
//     return "lalallalal";
// }

// const user1 = createUser("soban", 22, "male", "myAdress");
// console.log(user1.sing());



// function  createUser(firstName,age){
//     this.firstName = firstName;
//     this.age = age;
// }
// createUser.prototype.about=function(){
//     return `${this.firstName} is ${this.age} years old`;
// }
// const user1 = new createUser("soban",22);
// console.log(user1.about());



// class createUser{
//     constructor(firstName,age,gender,adress){
//         this.firstName = firstName;
//         this.age = age;
//         this.gender = gender;
//         this.adress = adress;
//     }
//      about(){
//          console.log(this.firstName,this.age);
//      }

//      is18(){
//          return is18 >=18;
//      }

//      sing(){
//          return "lalalllalalallala";
//      }


// }
// const user1 = new createUser("soban",22,"male","my adress");
// const user2 = new createUser("khan",24,"male","my adress");
// const user3 = new createUser("maria",12,"female","my adress");

// user1.about();





// class animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         return ` ${this.name} is eating`
//     }


//     cute() {
//         return this.age <= 2
//     }

// }

// const  animal1 = new animal("dog",2);
// console.log(animal1.eat());


// class value extends animal {
//     constructor(name, age, speed) {
//         super(name, age)
//         this.speed = speed;

//     }

//     run() {
//         return `${this.name} is running at ${this.speed}kmph`
//     }
// }

// const animal1 = new value("cat", 1, 54);
// console.log(animal1.run());



// class person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;

//     }
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }

//     set fullName(fullName){
//       const [firstName,lastName] = fullName.split(" ")
//       this.firstName = firstName;
//       this.lastName = lastName;
//     }

// }

// const user1 = new person("soban","khan",22);
// // console.log(user1.fullName);

// user1.fullName = "khan soban";
// console.log(user1);








