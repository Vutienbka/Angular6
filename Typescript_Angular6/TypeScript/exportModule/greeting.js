
let sayHelloInEnglish = ()=>
{
    return "HELLO";
}

let sayHelloInSpanish =() =>{
    return "Hola";
}

//Chuyen mot module hay file.js vao mot bien
module.exports={
    sayHelloInEnglish : sayHelloInEnglish,
    sayHelloInSpanish : sayHelloInSpanish
};

