var i = window.document.getElementById("inicio")
var f = window.document.getElementById("fim")
var res = window.document.getElementById("res")
var botao = window.document.getElementById("botao")

botao.addEventListener("click",clicar)

function clicar () {

    if (i.value.length == 0 || f.value.lenght == 0 ) {
        alert("digite um número porfavor")
    } else {

        let io = Number(i.value)
        let fo = Number(f.value)
        res.innerHTML = ""
        if (fo > io) {
            alert("O numero do final da tabuada deve ser menos que o do numero")
        }
        while(fo <= io ) {

        res.innerHTML += ` ${io} x ${fo} = ${io*fo} <br>`
        fo++
     }    
   }
}