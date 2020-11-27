function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
var name = window.prompt('Введите свое имя и давайте начнем!!');
window.confirm ('Ну что, ' + name + ' ты готов??' )
ready(choices);
var backs=[
"linear-gradient(rgba(207, 0, 15, 1),rgba(0,0,0,0.5))",
"linear-gradient(rgba(38, 166, 91, 1),rgba(0,0,0,0.5))",
"linear-gradient(rgba(34, 167, 240, 1),rgba(0,0,0,0.5))",
"linear-gradient(#c21500,#ffc500)",
"linear-gradient(rgba(249, 105, 14, 1),rgba(0,0,0,0.5))",
"linear-gradient(rgba(154, 18, 179, 1),rgba(0,0,0,0.5))"
];
var content =
[
  {question: 'Из какого города футбольный клуб "Аякс"?', choices: ["Гаага", "Ротердам", "Эйндховен", "Амстердам"], correct: 3,picture:'img/ajax.jpg'},
  {question: 'В каком городе не проходил чемпионат мира по футболу 2018?', choices: ['Волгоград', 'Краснодар', 'Нижний Новгород', 'Саранск'], correct: 1 ,picture:'img/krasnodar.jpg'},
  {question: 'Как называется домашний стадион Реал Мадрида?', choices: ['Камп Ноу', 'Вандо Метраполитано', 'Сантьяго Бернабеу', 'Месталья'], correct: 2,picture:'img/rm.jpg'},
  {question: 'Как зовут этого футболиста?', choices: ['Канте', 'Мбаппе', 'Гризманн', 'Погба'], correct: 3,picture:'img/pogba.jpg'},
  {question: 'Какой из этих клубов никогда не выигрывал Лигу Чемпионов?', choices: ['Стяуа ', 'Красная звезда Белград','Реймс', 'Марсель'], correct: 0,picture:'img/davies.jpg'},
  {question: 'Какой из этих клубов проводил вничью все групповые игры Лиги чемпионов в 2002/03?', choices: ['Ливерпуль', 'Рубин', 'Спартак', 'Динамо Киев', 'АЕК'], correct: 2,picture:'img/liga.jpg'}
    
];
var x = 0;
var y = 1;
var score = 0;
function colorit(){  
  if(content[x]['correct']==0){
    document.getElementById("button1").style.backgroundColor = "green";
    document.getElementById("button2").style.backgroundColor = "red";
    document.getElementById("button3").style.backgroundColor = "red";
    document.getElementById("button4").style.backgroundColor = "red";   
  }
   if(content[x]['correct']==1){
     document.getElementById("button1").style.backgroundColor = "red";
    document.getElementById("button2").style.backgroundColor = "green";
    document.getElementById("button3").style.backgroundColor = "red";
    document.getElementById("button4").style.backgroundColor = "red";
   }
   if(content[x]['correct']==2){
    document.getElementById("button1").style.backgroundColor = "red";
    document.getElementById("button2").style.backgroundColor = "red";
    document.getElementById("button3").style.backgroundColor = "green";
    document.getElementById("button4").style.backgroundColor = "red";    
  }
   if(content[x]['correct']==3){
     document.getElementById("button1").style.backgroundColor = "red";
    document.getElementById("button2").style.backgroundColor = "red";
    document.getElementById("button3").style.backgroundColor = "red";
    document.getElementById("button4").style.backgroundColor = "green";
   }
   document.getElementById("next").style.backgroundColor="#4CAF50";
   document.getElementById("next").disabled = false;
}
function myFunction1() {  
if(content[x]['correct']==0){
    score++;      
  }  
  colorit();
}
function myFunction2() { 
  if(content[x]['correct']==1){
    score++;      
  }  
  colorit();
}
function myFunction3() { 
    if(content[x]['correct']==2){
    score++;      
  }  
  colorit();
  
}
function myFunction4() { 
  if(content[x]['correct']==3){
    score++;      
  }  
  colorit();
}
function choices() {
  if (content[x] === undefined) {   
     document.getElementById("button1").style.visibility = "hidden";
    document.getElementById("button2").style.visibility = "hidden";
    document.getElementById("button3").style.visibility = "hidden";
    document.getElementById("button4").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "hidden";  
     document.querySelector(".question").style.visibility = "hidden";
      document.querySelector(".questionNumber").textContent = "Ваш результат";
    document.querySelector("#content3").style.top="20%;"
    document.querySelector("#content3").style.height="70%";
    document.getElementById("pict").src= "img/neymar.jpg";     
    document.querySelector("#content3").style.backgroundImage="linear-gradient(#e43a15,#e65245)";

      if(score >= 4){
          document.querySelector('.score').textContent =name+', а ты хорош! У тебя ' + score + ' из 6';
      }
      if (score < 4){
          document.querySelector('.score').textContent = name+', тебе есть куда расти, у тебя ' + score + ' из 6';
      }
      if (score = 0){
           document.querySelector('.score').textContent = name+', ничего сегодня просто не твой день, у тебя ' + score;
      }

  } else {
    var questionNumber = document.querySelector('.questionNumber');
    questionNumber.textContent = 'Вопрос ' + y;

var question = document.querySelector('.question');
    question.textContent = content[x]['question'];
document.querySelector("#content3").style.backgroundImage=backs[x];
     document.getElementById("pict").src= content[x]['picture'];
document.getElementById("button1").style.backgroundColor = "white";
  document.getElementById("button2").style.backgroundColor = "white";
  document.getElementById("button3").style.backgroundColor = "white";
  document.getElementById("button4").style.backgroundColor = "white"; 
  document.getElementById("next").style.backgroundColor="red"; 
  document.getElementById("next").disabled = true;
   document.getElementById("button1").innerText=content[x]['choices'][0];
   document.getElementById("button2").innerText=content[x]['choices'][1];
     document.getElementById("button3").innerText=content[x]['choices'][2];
   document.getElementById("button4").innerText=content[x]['choices'][3];
  }
}

function next() {
  var inputs = document.querySelectorAll('input');
  x++;
  y++;  
  choices();  
}
  window.setInterval(function(){
   if(window.innerWidth>600){
    document.querySelector('#content3').style.width="60%";
    document.querySelector('#content3').style.left="25%"; 
    document.querySelector('.menu_list').style.display="block";
    document.querySelector('.widget').style.height="100%";
    document.querySelector('.widget').style.width="20%"; 
  }
},0); 