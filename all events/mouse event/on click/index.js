let btn = document.getElementById("button");
console.dir(btn);

// btn.onclick = function () {
//     console.log("clicked");
// }

// =================  OR  ========================

function PLS() {
    console.log("clicked");
}

// btn.onclick = PLS;

// =================  OR  ========================

// for all button
// for (const btns of btn) {
//     btns.onmouseenter = PLS;
// }

btn.addEventListener("click",PLS);
// btn.addEventListener("Click",PLS);



// =============  this in event ===============================


function funn() {
    this.style.backgroundColor = "red";
}

let btnn1 = document.querySelectorAll("button");

for (const btns of btnn1) {
    btns.addEventListener("click",funn);
}

