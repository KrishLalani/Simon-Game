let inp = document.getElementById("taskInput");
let btn = document.getElementById("addTaskBtn");
let ul = document.getElementById("tasksList");

btn.addEventListener("click", function() {
    let searchText = inp.value;
    let dbtn = document.createElement('button');
    let ubtn = document.createElement('button');
    let input = document.createElement('input');
    input.style.display = 'none';
    let li = document.createElement('li');
    li.innerText = searchText;
    dbtn.innerText = "delete";
    ubtn.innerText = "update";
    ul.appendChild(li);
    li.appendChild(input);
    li.appendChild(dbtn);
    li.appendChild(ubtn);

    // Add event listener to the delete button
    dbtn.addEventListener("click", function() {
        li.remove(); // Remove the parent <li> element
    });

    // Add event listener to the update button
    
});
