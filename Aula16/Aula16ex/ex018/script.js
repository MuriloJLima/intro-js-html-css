var txtn = window.document.getElementById("num")
var num =[]


function Adicionar(){
    num.push(Number(txtn.value))
    // var ultimo = num[num.length -1]

    
    if(txtn.value != 0 && num.push() > 0 && num.push() <= 100){
        var res1 = window.document.getElementById("val")
        var item = document.createElement("option")
        item.text = `O valor ${txtn.value} foi adicionado`

        res1.appendChild(item)
    }
    else{
        window.alert("[ERRO]")
    }

    txtn.value = ''
    txtn.focus()
}

function Calcular(){
    
    var res = window.document.getElementById("res")
    res.innerHTML = `<P> Temos ${num.length} números cadastrados </P>`

    var max = Math.max(...num)
    res.innerHTML += `<P> O maior valor é ${max} </P>`

    var min = Math.min(...num)
    res.innerHTML += `<P> O menor valor é ${min} </P>`

    var soma = 0
    for(var p = 0; p < num.length; p++ ){
        soma += num[p]
    }

    res.innerHTML += `<P> A soma dos valores é de ${soma}</P>`

    var soma1 = 0
    for(var i = 0; i < num.length; i++ ){
        soma1 += num[i]
    }

    var media = soma1 / num.length

    res.innerHTML += `<P> A média dos valores é de ${media}</P>`
    
}
