//day 36

// console.log(dosa); // not defined
// var dosa = "Crispy dosa";  //undefined
// console.log(dosa); //Crispy dosa

// let menu = "Masala Dosa";
// console.log(menu); //Masala Dosa
// menu = "Kari Dosa";
// console.log(menu);

// const menu = "dosa"
// menu = "Kesari"
// console.log(menu)


//fn scope
// function idl(){
//     var idli = "Fluffy";
//     console.log(idli);
// }
// idl();
// console.log(idli);

// var s = "Sambar";
// function Dosa(){
//     var serve = "Madurai Dosa";
//     console.log(s);
//     console.log(serve);
// }
// Dosa();
// console.log(serve); //not defined
// console.log(s)

// var a = 10;
// function add(){
//     console.log(a + 200);
// }
// add();

//Hoisting 
// console.log(a);
// var a = 10; //undefined
// console.log(a);  //10

// var a;
// console.log(a) // undefined
// a = 10;
// console.log(a); //10
// console.log(b); //canot access before initialization
// let b = 100;
// const c= 20;
// console.log(c)
// c = 200; // cant reassign when decalered with const keyword
// console.log(c);


//Hoisting in Function
welmsg();
function welmsg(){
    console.log("Hi");
}
// welmsg();

// hi();
// var hi = function (){
//     console.log("HI");
// }
// hi();