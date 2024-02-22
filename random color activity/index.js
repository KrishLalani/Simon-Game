gen = document.querySelector(".generate");

// p = document.querySelector(".box");

function random_color() {
    console.log("genreted color");
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `(${red},${green},${blue})`

    return color;
    //p.style.backgroundColor = rgb(123,233,42);
}

function change_col(){
    h = document.querySelector(".h1");
    let rnd_col = random_color();
    h.innerText = rnd_col;

    let div = document.getElementById("box");
    // div.innerText = "hello"
    // div.style.backgroundColor=rnd_col;
    div.innerText = "hello world";
    div.style.backgroundColor = `rgb${rnd_col}`
    // div.innerText.fontcolor="red";
    
    // div.style.backgroundColor = rnd_col;


    // div.style.backgroundColor = rnd_col;
}

gen.addEventListener('click',change_col);