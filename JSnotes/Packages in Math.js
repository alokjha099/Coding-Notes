
const fs= require('fs');
const math=require('./math');
// .directory_name finds the module inside the user directory and if not then find in 
// the Internal directory, if we cant find in internal storage also then find in the node
// modules

// fs.writeFile('./test.txt','Hello World',()=>{});

// console.log({__filename,__dirname});
// this code gets bound in a function lets say execute() which once executed has 
// execute(require,...) basically they get bound in wrapper function first and then 
// they execute

console.log(math(2,3))


***********************************************************************************************************



function add(x,y){
    return x+y;
}

function sub(x,y){
    return x-y;
}



// we need to export the functions that we want math directory to access, 
// also module.export is the default export and it can be only one in a module like math
// if we simply execute the module then this will execute as this is the default module

module.exports=add;
