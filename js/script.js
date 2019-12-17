
let food = 100;
let clean = 100;
let happines = 100;


function Loop(time = 5){

  food = food - parseInt(time);
  clean = clean - parseInt(time);
  happines = happines - parseInt(time);

  document.getElementById('food').style.width = food + 'px';
  document.getElementById('clean').style.width = clean + 'px';
  document.getElementById('happines').style.width = happines + 'px';

  document.getElementById('food').innerHTML = food + '%';
  document.getElementById('clean').innerHTML = clean + '%';
  document.getElementById('happines').innerHTML = happines + '%';
}

function Cheker(){
  if(food <= 0 || clean <= 0 || happines <= 0){
  document.getElementById('mensagem').innerHTML = 'YOU DIED';
  Loop(time = 0);
  Start(1);
  }
}

function Start(n){
  if(n !== 1 ){
  let timer = setInterval(Loop, 1000);
  let cheker = setInterval(Cheker, 0000);
  }
  else{
      clearInterval(timer);
  }
}

function Feed(){
  if(food >= 70){
    food = 100;
  }
  else{
    food += 30;
  }
  if( clean <= 20){
    clean = 0;
  }
  else{
    clean = clean - 20;
  }
  document.getElementById('food').innerHTML = food + '%';
  document.getElementById('food').style.width = food + 'px';
  document.getElementById('clean').innerHTML = clean + '%';
  document.getElementById('clean').style.width = clean + 'px';
}


function Wash(){
  if(clean >= 60){
    clean = 100;
  }
  else{
    clean += 40;
  }
  if( happines <= 20){
    happines = 0;
  }
  else{
    happines = happines - 20;
  }
  document.getElementById('clean').innerHTML = clean + '%';
  document.getElementById('clean').style.width = clean + 'px';
  document.getElementById('happines').innerHTML = happines + '%';
  document.getElementById('happines').style.width = happines + 'px';
}


function Run(){
  if(happines >= 85){
    happines = 100;
  }
  else{
    happines += 15;
  }
  if( food <= 20){
    food = 0;
  }
  else{
    food = food - 20;
  }
  document.getElementById('happines').innerHTML = happines + '%';
  document.getElementById('happines').style.width = happines + 'px';
  document.getElementById('food').innerHTML = food + '%';
  document.getElementById('food').style.width = food + 'px';
}

Start();
