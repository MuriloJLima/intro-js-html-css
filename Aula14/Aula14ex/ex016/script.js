function Contar(){
    var txti = window.document.getElementById("ini")
    var txtf = window.document.getElementById("fim")
    var txtp = window.document.getElementById("pas")

    var ini = Number(txti.value)
    var fim = Number(txtf.value)
    var pas = Number(txtp.value)

    var res = window.document.getElementById("res")

    if (txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0 ){
        window.alert("erro")
        res.innerHTML = "[ERRO]"
    }
    else{
        res.innerHTML = "contando: "

        if(txtp.value <= 0 ){
            window.alert("considerando passo 1")
            pas = 1
        }

        if(ini < fim){
            //contagem crescente
            for(var c = ini; c <= fim; c += pas){
                res.innerHTML += `${c} \u{1f449} `
            }

        }
        else{
            //contagem regressiva
            for(var c = ini; c >= fim; c -= pas){
                res.innerHTML += `${c} \u{1f449} `
            }
        }

        res.innerHTML += `\u{1f3c1}`
    }

    // for(ini; ini <= fim; ini + pas)
    // res.innerHTML = ini
}