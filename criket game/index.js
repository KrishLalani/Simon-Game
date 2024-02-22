parseInt(num) = prompt("enter number");
run = 0;
while(true)
{
    botnum = Math.floor(Math.random()*10 + 1) ;
    if(parseInt(num) == botnum)
    {
        console.log("ohhh no out");
        console.log(`run = ${run}`);
        break;
    }
    else
    {
        run = run + num;
        console.log("carry on");
        parseInt(num) = prompt("enter number");
    }
}