function verificar(){
    var txtano = window.document.getElementById("ano")
    var ano = Number(txtano.value)

    var rsexo = window.document.getElementsByName("radsex")
    var genero = ''

    var date = new Date()
    var atual = date.getFullYear()
    var idade = atual - ano

    var res = window.document.getElementById("res")

    if (rsexo[0].checked){
        genero = "masculino"
    }
    else{
        genero = "feminino"
    }

    res.innerHTML = `Seu sexo é ${genero} e vc tem ${idade} anos`
}