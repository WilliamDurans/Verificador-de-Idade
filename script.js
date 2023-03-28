function concluir() {
    var data = new Date()
    var ano = data.getFullYear()
    var rano = document.getElementById("txtano")
    var r = document.querySelector("div#resultado")
    
    if (rano.value.length == 0 || rano.value > ano) {
        alert("Não foi possivel completar essa ação. Verifique seus dados.")
    } else {
        var sexo = document.getElementsByName("sexo")
        var idade = ano - Number(rano.value)
        r.innerHTML = `Você tem ${idade} anos idade.`
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        if (sexo[0].checked) {
            genero = "Homem"
            img.setAttribute("src", "masculino.png")
        } else if (sexo[1].checked) {
            genero = "Mulher"
            img.setAttribute("src", "feminino.png")
        }

        r.style.textAlign = "center"
        r.innerHTML = `Achamos um(a) ${genero} com ${idade} anos.`
        r.appendChild(img)
    }
}