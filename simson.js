let gameseq = [];
let userseq = [];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

let btns = ["yellow","red","purple","green"];

document.addEventListener( "keypress" , function (){
    if ( started == false ){
        started = true ;
        console.log(" Game Started !! ")

        levelup();
    }
})

function gameflash(btnn){
    btnn.classList.add("flash");
    setTimeout(function(){
        btnn.classList.remove("flash");
    },250);
}
function userflash(btnn){
    btnn.classList.add("userflash");
    setTimeout(function(){
        btnn.classList.remove("userflash");
    },250);
}

function levelup (){
    userseq = [];
    level++ ;
    h2.innerText = `level ${level}`;
    // random btn
    let random = Math.floor( Math.random() * 3);
    let randomclr = btns[random]; 
    let randombtn = document.querySelector(`.${randomclr}`);
    // btnflash(randombtn);
    // console.log(random);
    // console.log(randomclr);
    // console.log(randombtn);
    gameseq.push(randomclr);
    console.log(gameseq)
    gameflash(randombtn);
};

function checkans(idx){
// console.log ( `level ${level}`);
// let idx = level - 1;
if( userseq[idx] === gameseq[idx] ){
    // console.log("same seq");
    if( userseq.length == gameseq.length ){
      setTimeout(levelup, 1000);   
    }
}else{
    h2.innerHTML = `Game Over, Your score was <b> ${level} <b> <br> Press any key to start again !!`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function() {
         document.querySelector("body").style.backgroundColor = "white";
    },200)
    reset ();
}

}

function btnpressed(){
     
   let btn = this;
   userflash(btn);
   usercolor = btn.getAttribute("id");
  userseq.push(usercolor);
//   console.log(userseq);

checkans(userseq.length - 1 );
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpressed); 
}

function reset (){
    started = false ;
    gameseq = [] ;
    userseq = [] ;
    level = 0;
}