// =========================== key board event =========================

let input12 = document.querySelectorAll("input");
let submit1 = document.getElementsByClassName("submit1")[0];
let input1 = document.getElementsByClassName("input1")[0];

function keyFun(event) {
    console.log("event = ",event);
    console.log("key code",event.keyCode);
    console.log("code = ",event.code);
    console.log("key = ",event.key);
    console.log("key pressed");

    if(event.key == "ArrowUp")
    {
        console.log("key pressed up");
    }
}

for (let input of input12) {
    input.addEventListener("keyup", keyFun);
}
