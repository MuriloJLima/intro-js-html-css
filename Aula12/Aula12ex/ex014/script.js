
function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")

    var data = new Date()
    //var hora = data.getHours()
    var hora = 18

    msg.innerHTML = `AGORA SÃO ${hora} HORAS`

    if (hora >= 0 && hora < 12){
        img.src = 'fotomanha.jpg'
        document.body.style.background = 'blue'
    }
    else if (hora >= 12 && hora < 18){
        img.src = 'fototarde.jpg'
        document.body.style.background = 'orange'
    }
    else{
        img.src = 'fotonoite.jpeg'
        document.body.style.background = 'black'
    }
}