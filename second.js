// var firstName = "soban";
// var lastName = "khan";
// var fullName = firstName + " " + lastName;
// console.log(fullName);

// function myFunction (a){
//     return function(b){
//          console.log(Math.pow(b,a));
//     }

// }

// const ans = myFunction(4);
// ans(3);


// function myfun(){
//     a=0;
//     return function(){
        
//         if(a==0){console.log("hi you called me!");}
//         else if(a!=0)
//         console.log("main ek baar call ho chuka hooon");
//         a++;
//     }
    
   
// }


// const var1 = myfun();
// var1();
// var1();
// var1();

// const var2 = myfun();
// var2();
// var2();
// var2();


// console.log(document.getElementById("main-heading"));

// const body = document.querySelector("body");
// console.log(body);


// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.textContent);
// mainHeading.textContent = "changed text by textcontent";


// const header = document.querySelector(".header nav");
// console.log(header);

// const mainHeading = document.querySelector("#main-heading");
// // console.log(mainHeading.style);
// mainHeading.style.backroundColor = "blue";

// const header = document.getElementById("main-heading");
// header.style.color = "blue"

// const main_heading = document.querySelector("#main-heading");
// main_heading.style.color ="blue";

// const signup = document.querySelector(".signup-form input");
// console.log(signup.getAttribute("name"));

// const items = document.querySelector(".nav-items a");
// items.setAttribute("href","nohome");
// console.log(items.getAttribute("href"));


// const items = document.getElementsByClassName("nav-items");
// console.log(items);

// const items = document.querySelectorAll(".nav-items");
// console.log(items);

// const items = document.getElementsByTagName("a");

// console.log(items);

// for(i=0 ; i< items.length;i++){
//     items[i].style.backgroundColor= "#fff";
//     items[i].style.color="green";
//     // console.log(items[i]);
// }

// for(let item of items){
//     item.style.backgroundColor = "white";
//     item.style.color = "green";
//     item.style.fontWeight = "bold";
// }


// const headline = document.querySelector(".headline");
// headline.innerHTML = "<h1>Inner html changed </h1>";
// headline.innerHTML += "<button class = \" btn\">Learn More</button>";
// console.log(headline.innerHTML);



// const rootNode = document.getRootNode();
// // console.log(rootNode.childNodes);

// const htmlElementNode = rootNode.childNodes[1];
// console.log(htmlElementNode);

// const headeElmentNode = htmlElementNode.childNodes[0];
// // console.log(headeElmentNode);


// const todoSection = document.querySelector(".todo-section");
// todoSection.classList.add('bg-dark');
// console.log(todoSection.classList);

// const todo_section = document.querySelector(".todo-section");
// todo_section.classList.add("bg-dark");
// console.log(todo_section);

// console.log(todo_section.classList.contains("container"));


// const todolist = document.querySelector(".todo-list");
// // console.log(todolist.innerHTML);

// // todolist.innerHTML ="<li>new todo</li>";

// todolist.innerHTML = todolist.innerHTML + "<li>new todo</li>";


//  const newTodoItem = document.createElement("li");
//  const newTodoItemtext = document.createTextNode("new todo item");
//  newTodoItem.append(newTodoItemtext);
//  const todolist = document.querySelector(".todo-list");

//  todolist.append(newTodoItem);

// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "newtodo";
// const todolist = document.querySelector(".todo-list");

//  todolist.append(newTodoItem);


// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = 'newtodo';
//  const li2 =li.cloneNode(true);
// ul.append(li);
// ul.prepend(li2);


// const items = document.querySelectorAll(".todo-list li");

// const ul = document.querySelector(".todo-list");
// const items = ul.getElementsByTagName("li");
// const sixthElement = document.createElement("li");
// sixthElement.textContent = "item 6";
// ul.append(sixthElement);
// console.log(items);


// const btn = document.querySelector(".btn-headline");
// btn.addEventListener("click",function(){
//     console.log("you clicked me");
// })
 

// const allbtn = document.querySelectorAll(".buttons button");
// for(let btn of allbtn){
//     btn.addEventListener("click",function(e){
//     console.log(e.target);

// });
// }




