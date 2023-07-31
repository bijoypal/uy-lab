document.write(Date());
// window.alert("Accept");
// alert("Warning");

console.log(18+12);

// document.querySelector('h1').innerHTML="i am from js ";

var hello = "<h1> Hello bijoy</h1>";
// var, const,let

document.write(hello);

var friend = {
    fname: 'habib',
    age: 27,
    habbies: 'watching movie',
    occupation: 'student'
}

console.log(friend.habbies);

if ('usser' == 'user'){
    document.write('welcome admin <br>')
} else{
    document.write('sorry, not allowed <br>')
}

// initalization, condition, increment/drecrement
for(var i=1; i<= 10; i++){
    document.write(i);
}


var birthYear = document.querySelector("#birthYear");
var option = "";

for(var i = 1905; i<= 2023; i++){
    option += `<option>${i}</option>`;
}

birthYear.innerHTML = option;


for (var i = 12; i<= 20; i++){

    document.write(`<div class= "namta">`);
    for (var j=1; j<= 10; j++){
        document.write(`${i} X ${j} = ${i * j} <br>`);
    }
    document.write(`</div>`);
}
 
// var birthYear = Number(prompt('Enter Your Birthyear'));
console.log(birthYear);

var age = 2023- birthYear;
console.log(age);

if(age > 18){
    document.write('<h1>Congrats! you can apply</h1>');
}
else{
    document.write('<h1>sorry! you are not adult</h1>');
}

// popup

var activePopup = document.querySelector(".active_popup");
var Popup = document.querySelector(".popup");
var closePopup = document.querySelector(".close_popup");

activePopup.addEventListener('click', function(){
    Popup.classList.add("d_block");
})

closePopup.addEventListener('click', function(){
    Popup.classList.remove("d_block");
})

// jws
// js Bangladesh
// Stack Learner
// anisur islam
// traning with live project

