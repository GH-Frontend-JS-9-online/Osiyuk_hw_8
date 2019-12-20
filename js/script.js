
let food = Math.floor(Math.random() * (105 - 55)) + 55;
let clean = Math.floor(Math.random() * (105 - 55)) + 55;
let happines = Math.floor(Math.random() * (105 - 55)) + 55;
let level = 0;
let score = 0;

function Restart(){
   score = 0;
   food = Math.floor(Math.random() * (105 - 55)) + 55;
   clean = Math.floor(Math.random() * (105 - 55)) + 55;
   happines = Math.floor(Math.random() * (105 - 55)) + 55;
   document.getElementById('die_events').style.display = 'none';
  if(level === 1){
    EasyLevel();
  }
  if(level === 2){
    hardLevel();
  }

}
function chooseAnother(){
  score = 0;
  food = Math.floor(Math.random() * (105 - 55)) + 55;
  clean = Math.floor(Math.random() * (105 - 55)) + 55;
  happines = Math.floor(Math.random() * (105 - 55)) + 55;
  document.getElementById('levels').style.display = 'block';
  document.getElementById('main').style.display = 'none';
  document.getElementById('die_events').style.display = 'none';
}
function hardLevel(){
  document.getElementById('main').style.display = 'block';
  function Chek(){
    if(food <= 0 || clean <= 0 || happines <= 0){
      clearInterval(loop);
      clearInterval(chek);
    }
  }
  document.getElementById('levels').style.display = 'none';
  level = 2;
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
  let loop = setInterval(Loop,5000);
  let chek = setInterval(Chek,000);
  function Timer(){
    score++;
    document.getElementById('scoree').innerHTML = 'Your Score: ' + score;
    if(food <= 0 || clean <= 0 || happines <= 0){
      clearInterval(timer);
      document.getElementById('die_events').style.display = 'block';
    }
  }
  let timer = setInterval(Timer,1000);
  Loop();
  Timer();
}

function EasyLevel(){
  document.getElementById('main').style.display = 'block';
  function Chek(){
    if(food <= 0 || clean <= 0 || happines <= 0){
      clearInterval(loop);
      clearInterval(chek);
    }
  }
  document.getElementById('levels').style.display = 'none';
  level = 1;
  function Loop(time = 3){


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
  let loop = setInterval(Loop,5000);
  let chek = setInterval(Chek,000);
  function Timer(){
    score++;
    document.getElementById('scoree').innerHTML = 'Your Score: ' + score;
    if(food <= 0 || clean <= 0 || happines <= 0){
      clearInterval(timer);
      document.getElementById('die_events').style.display = 'block';
    }
  }
  let timer = setInterval(Timer,1000);
  Loop();
  Timer();
}


function Feed(){
  if(food >= 70 && level === 1){
    food = 100;
  }
  else if(food >= 40 && level === 2){
    food = 70;
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
  if(clean >= 60  && level === 1){
    clean = 100;
  }
  else if( clean >= 30  && level === 2){
    clean = 70;
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
  if(happines >= 85  && level === 1){
    happines = 100;
  }
  else if(happines >= 55  && level === 2){
    happines = 70;
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
