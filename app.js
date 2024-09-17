// var head= document.querySelector("#head");
// head.innerHTML="hello html";
// function on(){


//     if(head.innerHTML==="Off"){
//     head.innerHTML="On"}
//         else{
//            head.innerHTML="Off";
//         }

// }
// var num1=document.querySelector("#num1");
//  var num2=document.querySelector("#num2");
//  var total=document.querySelector("#total");
// function Sum()
// {
//     var total=num1+num2;
//    return total

// }






// var num1 = document.querySelector("#num1");
// var num2 = document.querySelector("#num2");
// var total = document.querySelector("#total");

// function Sum() {
//     var result = +num1.value + +num2.value; // Calculate the sum of num1 and num2
//     total.innerHTML = result; // Display the result in the 'total' element

//     num1.value = ""; // Clear the input fields
//     num2.value = "";
// }
// function division() {
//     var result = +num1.value / +num2.value; // Calculate the sum of num1 and num2
//     total.innerHTML = result; // Display the result in the 'total' element

//     num1.value="";
//     num2.value=""; // Clear the input fields
// }
// function Multiply(){
//     var result = +num1.value * +num2.value; // Calculate the sum of num
//     total.innerHTML = result; // Display the result in the 'total' element
//     num1.value="";
//     num2.value="";
// }
// function Subract(){
//     var result = +num1.value - +num2.value; // Calculate the sum of num
//     total.innerHTML = result; // Display the result in the 'total' element
//     num1.value="";
//     num2.value="";
// }



// var total=document.querySelector("#total");
// function totals(){
// total.innerHTML="<h1>Sufiyan</h1><p>lorem3</p>";
// // console.log(total.innerHTML);
// }

// var h1=document.querySelector("#head");
//  count=0;
// function increase(){
//     count++;
//     h1.innerHTML=count;}

//     function decrease(){
//         if(count>0){
//             count--;
//             h1.innerHTML=count;
//         }else{
//             h1.innerHTML="Decremental is not valid"

//         }
//     }

// let str= "apnacollege";
// str=str.toUpperCase();
// console.log(str);
// console.log(newstr);


// let str="Apna college"
// console.log(str.slice(5,13));

// let str1="Muhammad";
// let str2="Sufiyan";
// console.log(str1.concat(str2));



// let str="yello";
// console.log(str.replace("y","l"));

// let fullName =prompt("Enter your name ");
// let userName ="@"+ fullName + fullName.length;
// console.log(userName);


// let hero=["Sufiyan","Faraz","Salhain","sameer"];
// // for(let i=0;i<hero.length;i++){
// //     console.log(hero[i]);
// // }
// for(let heros of hero){
//     console.log(heros.replace("s","f"));
// }

// let num=[85,95,78,89];
// let sum=0;
// for(let i=0;i<num.length;i++){
//     sum+=num[i];
//     }
//     console.log(sum);


//     totalMarks=sum/num.length;
//     console.log(totalMarks);


// let num=[85,95,78,89];
// for (let i=0;i<num.length;i++){
//     let offer=num[i]/10;
//     // console.log(offer);
//     let value=num[i]-offer;
//     console.log(value);
// }



// let num=[85,95,78,89];
// for (let nums of num){
//     let offer=nums/10;
//     let value=nums-offer;
//     console.log(`index ${nums}",${value}`);
// }



//  let num=[85,95,78,89];
//  num.push("99","100");
//  console.log(num);
//   num.unshift("99","100");
//   console.log(num);
//   num.splice(0,2,"99","100");
//   console.log(num);
//   num.splice(0,2);
//   console.log(num);
//   num.splice(2,0,102);
//   console.log(num);
// //   num.pop("1,2");
// //   console.log(num);


// let companies=["Bloomber","Denim ","Netflix","chilltime","lucky"];
// companies.shift();delete first index

// companies.splice(2,1,"sufi") for the specific state

// companies.push("Amazon")
// console.log(companies);

// let array=["mango","apple", "banana","orange"];
// for (let i=0;i<array.length-1; i++){
//     console.log(array[i]);
// }
// console.log(array.push("heald"));


// let num=document.querySelector("#num");
// let print=document.querySelector("#print");
// for (let i=0;i<10;1++){
//     console.log(num+ "*"+i+"="+num*i);
// }

// function change(){

//     print.innerHTML=num+ "*"+i+"="+num*i;
// }


// TABLE PRINT

// let num = document.querySelector("#num");
// let print = document.querySelector("#print");



// function change() {
//     let numValue = num.value;
//     num.value="";
//     if (numValue === "") {
//         print.innerHTML = "Please enter a number";
//     }
//     else {
      
//         // num.value = "";
//         let result = "";
//         for (let i = 0; i <= 10; i++) {
//             result += numValue + " * " + i + " = " + (numValue * i) + "<br>";
//         }
//         print.innerHTML = result;
//     }
// }


// CHAPTER #01
// alert("Hello JavaScript")
//  alert("Error! Please Enter A valid Password")
// var name=document.querySelector("#name");
// var nameValue=name.value;

// alert(`Welcom to JS Land .... \n happy Coding\n ${nameValue}` )
// var Name=document.querySelector("#name");
// var nameValue=Name.value;
// alert("Welcom to JS Land .... \n happy Coding"+nameValue);

// CHAPER 2

// var userName="Abc";
// console.log(userName);

// let userName="hello";
// let nameValue = prompt("Enter your name ");
// console.log(nameValue)
// console.log(userName);

// let userName="hello";
// let nameValue = prompt("Enter your name ");
// console.log(nameValue);
// console.log(userName);
//  let newstr=alert(nameValue,userName);

// console.log(newstr);

// Collect student's biodata
// let studentName = prompt("Enter the student's name:");
// let studentAge = prompt("Enter the student's age:");
// let studentGrade = prompt("Enter the student's grade:");
// let studentSchool = prompt("Enter the student's school:");
// let studentHobbies = prompt("Enter the student's hobbies:");

// // Display the collected biodata in alert boxes
// alert("Student's Name: " + studentName +"\nStudent's Age: " + studentAge+"\nStudent's Grade: " + studentGrade+"\nStudent's School: " + studentSchool);
// alert("Student's Age: " + studentAge);
// alert("Student's Grade: " + studentGrade);
// alert("Student's School: " + studentSchool);
// alert("Student's Hobbies: " + studentHobbies);

// CHAPTER 3
// let birthYear = 2002;
// document.querySelector('#birthMessage').innerText = `My birth year is ${birthYear}`;

// let visitorName = "John Doe";      
// let productTitle = "T-shirt";      
// let quantity = 5;                  


// document.querySelector('#orderMessage').innerText = `${visitorName} ordered ${quantity} ${productTitle}(s) on XYZ Clothing store.`;


// CHAPTER 4
// let variable1 = "Value1", variable2 = "Value2", variable3 = "Value3";
// let number;

//         // b. Show the value of variable in your browser
//         document.querySelector('#output').innerText = "Value after variable declaration is: " + number;

//         // c. Initialize the variable with some number
//         number = 5;

//         // d. Show the value of variable in your browser
//         document.querySelector('#output').innerText += "\nInitial value: " + number;

//         // e. Increment the variable
//         number++;

//         // f. Show the value of variable in your browser
//         document.querySelector('#output').innerText += "\nValue after increment is: " + number;

//         // g. Add 7 to the variable
//         number += 7;

//         // h. Show the value of variable in your browser
//         document.querySelector('#output').innerText += "\nValue after addition is: " + number;

//         // i. Decrement the variable
//         number--;

//         // j. Show the value of variable in your browser
//         document.querySelector('#output').innerText += "\nValue after decrement is: " + number;

//         // k. Show the remainder after dividing the variable’s value by 3
//         let remainder = number % 3;

//         // l. Output the remainder
//         document.querySelector('#output').innerText += "\nThe remainder is: " + remainder;

// const ticketPrice = 600; 
// const numberOfTickets = 5;
// const totalCost = ticketPrice * numberOfTickets;
// document.querySelector('#output').innerText = `The cost of buying ${numberOfTickets} movie tickets is ${totalCost} PKR.`;


// let celsius = 25; 

// let fahrenheit = (celsius * 9/5) + 32;

// document.querySelector('#output').innerText = `${celsius}°C is ${fahrenheit}°F`;

// fahrenheit = 77;  

// celsius = (fahrenheit - 32) * 5/9;
// document.querySelector('#fahrenheit').innerText = `${fahrenheit}°F is ${celsius.toFixed(2)}°C`;


// let radius = 10; 

// const pi = 3.142;
// let circumference = 2 * pi * radius;
// document.querySelector('#circumferenceOutput').innerText = `The circumference is ${circumference}`;
// let area = pi * radius * radius;
// document.querySelector('#areaOutput').innerText = `The area is ${area}`;



// todo ap


function rerender()
{
    print.innerHTML='';
    for (var i=0;i<array.length;i++){
        print.innerHTML +=`<li>${array[i]}
         <button onclick="deletetodo(${i})"><i class="fa-solid fa-trash"></i></button>
         <button onclick="edittodo(${i})"><i class="fa-solid fa-pen-to-square"></i></button></li>`
    }
}
var input =document.querySelector("#input");
var print=document.querySelector("#print");
var array=[];


function add(){
    // inputOne=input.value;
// for (var i=0;i<array.length;i++){
   array.push(input.value);
   rerender();
   input.value='';
    // var value=array.push(input.value);
    // print.innerHTML=value;
    
// }
}
function deletetodo(index) {
    array.splice(index, 1);
    rerender()
}

function edittodo(index) {
    var updatedVal = prompt('enter updated value');
    array.splice(index , 1 , updatedVal);
    rerender()
}
// var array = []; // Initialize the array

// function add() {
//     var inputOne = document.getElementById('input').value; // Get the input value
//     array.push(inputOne); // Add the input value to the array

//     document.getElementById('print').innerHTML = array.join(', '); // Display the updated array
// }

