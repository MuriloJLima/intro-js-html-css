var agora = new Date()
var hora = agora.getHours()

console.log(`agora são ${hora}h`)

// if (hora < 24 && hora >= 0){
//     if(hora < 5){
//         console.log("madrugada")
//     }
//     else if(hora < 12){
//         console.log("manhã")
//     }
//     else if(hora < 18){
//         console.log("tarde")
//     }
//     else{
//         console.log("noite")
//     }
// }else{
//     console.log("o dia tem 24 hrs")
// }

if(hora < 5){
    console.log("madrugada")
}
else if(hora < 12){
    console.log("manhã")
}
else if(hora < 18){
    console.log("tarde")
}
else{
    console.log("noite")
}