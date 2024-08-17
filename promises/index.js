

// function saveToDb(data,success,failure)
// {
//     data = Math.floor(Math.random()*10);
//     if(data>1)
//     {
//         success();
//     } 
//     else
//     {
//         failure();
//     }
// }

// saveToDb(3,
//             ()=>{console.log("success");},
//             ()=>{console.log("failure");}
//         );



// ===================== promise dive into two part 1 resolve 2 reject ==============================


function saveToDb(data)
{
    data = Math.floor(Math.random()*10);
    return new Promise((resolve,reject)=>{
        data = Math.floor(Math.random()*10);
            if(data>5)
            {
                resolve("done");
            } 
            else
            {
                reject("sorry");
            }
    })
}

// ============== optimize using Promise ======================

saveToDb("dsfsd")
{

}