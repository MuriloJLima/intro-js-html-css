function Gerar(){
    var txtn = window.document.getElementById("txtnum")
    var res = window.document.getElementById("tab")
    
    if(txtn.value.length != 0){
        var n = Number(txtn.value)

        res.innerHTML = ''

        for(var c = 1; c <= 10; c++){

            var r = n *c

            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${r}`
            
            res.appendChild(item)
        }
    }
    else{
        window.alert("[ERRO]")
    }
}