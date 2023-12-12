let name = "Mithun"
let email = "mithun.s@pw.live"
let age = "21"

if(typeof name !== "string"){
    console.log(`Name should be a String`);
}else if (typeof email !== "string"){
    console.log(`Email should be a String`);
}
else if (typeof age !== "number" ){
    console.log(`Age should be a Number`);
}
else {
    console.log(`nothing`);
}
     