// let form = document.querySelector("form");

// form.addEventListener("submit",function (event) {
//     event.preventDefault();   // to stop action
//     console.log("submitted");
//     alert("form submitted");
// });



// ================ how to assccess form date ================


// let form = document.querySelector("form");
// // let inppass = document.getElementById("inppass");

// form.addEventListener("submit",function (event) {
//     event.preventDefault();   // to stop action
//     // console.log("submitted");
//     // alert("form submitted");
    
    
//     let input = this.elements[0];     /// alternate way
//     let inppass = this.elements[1];
    
//     console.dir(input);
//     console.log(input.value);   // get value written in text  box
//     console.log(inppass.value);   // get value written in text  box
// });


// ================ change event ================


let input = document.querySelector("input");
input.addEventListener("change",function(){
    console.log("value changed");
})
