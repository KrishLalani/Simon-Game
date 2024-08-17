let gameseq = [];
let userseq = [];

let btn = ["square1","square2","square3","square4"];
let level = 0;
let started = false;

let hlevel = document.querySelector(".hlevel");


document.addEventListener("keypress",function(){
    if(started == false)
    {
        console.log("game started");
        // level++;
        started=true;
    }
    levelUp();
});


function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },500); 
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    },500); 
}

function checkAns(idx){
    // let idx = level-1;

    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length)
        {
            setTimeout(levelUp(),1000);
        }
        console.log("correct");
    }
    else
    {
        console.log("oops games over better luck next time");
        hlevel.innerText = "oops games over better luck next time";
        resetGame();
    }
}

function levelUp()
{
    userseq = [];
    level++;
    hlevel.innerText ="Level "+level;


    let ranNo =  Math.floor(Math.random()*3);
    let ransqr = btn[ranNo];
    let ranBtn = document.querySelector(`#${ransqr}`);
    gameseq.push(ransqr);
    console.log(gameseq);

    btnflash(ranBtn);
    
}



function btnPress(){
    console.log("btn pressed");
    let btn = this;
    // console.log(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    console.log(userseq);

    checkAns(userseq.length-1);
    userflash(btn);
}

let allsquare = document.querySelectorAll(".square");

for(let square of allsquare)
{
    square.addEventListener("click",btnPress);  
}



function resetGame(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;

    hlevel.innerText = level;

    levelUp();
}