let req = prompt("enter what u wnanna doo")
let arr = [];
while(true)
{
    if(req=="quit")
    {
        console.log("quittingg");
        break;
    }
    else if(req=='list')
    {
        for(i of arr)
        {
            console.log(i);
        }
    }
    else if(req=="add")
    {
        let a = prompt("enter list item")
        arr.push(a);
        //arr[arr.length-1]=prompt("enter list item")
    }
    else if(req == "delete")
    {
        let index = prompt("enter index")
        arr.slice(index,1);
    }
    else
    {
        alert("enter correct operation")
    }

    req = prompt("enter what u wnanna doo")
}