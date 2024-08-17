// event bubbling simple means to execute parent listener also when child event fired

// to prevent that that call event.stoppropagation() function

let div = document.querySelector("div")
let ul = document.querySelector("ul")
let li = document.querySelectorAll("li")

div.addEventListener("click",dclickk);
ul.addEventListener("click",uclickk);

for(const lii of li)
{
    lii.addEventListener("click",lclickk);
}

function dclickk(event){
    event.stopPropagation();
    console.log("dclicked");
}
function uclickk(event){
    event.stopPropagation();
    console.log("uclicked");
}
function lclickk(event){
    event.stopPropagation();
    console.log("lclicked");
}