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


