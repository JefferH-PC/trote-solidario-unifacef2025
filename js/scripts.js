function calcular() {
    // Vamos criar 2 variáveis
    // JS as variáveis não possuem tipo
    let mascote, homenagem, leite, suplemento, kit, caracter, tarefa, arroz5kg, arroz1kg, feijao2kg, feijao1kg, macarrao, oleo, sangue, sangueAd, acao, contArre, contAcao, soma, equipe

    // Recupera o valor digitado pelo usuário
    mascote = Number(document.getElementById("mascote").value)
    homenagem = Number(document.getElementById("homenagem").value)
    leite = Number(document.getElementById("leite").value)
    kit = Number(document.getElementById("kit").value)
    suplemento = Number(document.getElementById("suplemento").value)
    caracter = Number(document.getElementById("caracter").value)
    arroz5kg = Number(document.getElementById("arroz5kg").value)
    arroz1kg = Number(document.getElementById("arroz1kg").value)
    feijao2kg = Number(document.getElementById("feijao2kg").value)
    feijao1kg = Number(document.getElementById("feijao1kg").value)
    macarrao = Number(document.getElementById("macarrao").value)
    oleo = Number(document.getElementById("oleo").value)
    sangue = Number(document.getElementById("sangue").value)
    acao = Number(document.getElementById("acao").value)
    contArre = Number(document.getElementById("contArre").value)
    contAcao = Number(document.getElementById("contAcao").value)
    equipe = document.getElementById("calculadora__equipe").value
    
     soma = mascote + homenagem + (2 * leite) + caracter + (arroz5kg * 5) + arroz1kg + (feijao2kg * 2) + feijao1kg + (macarrao / 2) + oleo + acao + contAcao + contArre

     if (equipe == "Laranja"){
        if (kit >= 97 && suplemento >= 49){
            soma = soma + 5000 + ((kit - 97) * 30) + ((suplemento - 49) * 15)
        }
        else if (kit >= 78 && suplemento >= 39){
            soma = soma + 4000 + ((kit - 78) * 30) + ((suplemento - 39) * 15)
        }
        else if (kit >= 49 && suplemento >= 25){
            soma = soma + 2500 + ((kit - 49) * 30) + ((suplemento - 25) * 15)
        }
        else if (kit >= 19 && suplemento >= 10){
            soma = soma + 1000 + ((kit - 19) * 30)  + ((suplemento - 10) * 15)
        }
        if (sangue >= 49) {
            soma = soma + 2500 + ((sangue - 49) * 20)
        }
        else {
            soma = soma + (sangue * 20)
        }
     }
     else if (equipe == "Preta"){
        if (kit >= 103 && suplemento >= 52){
            soma = soma + 5000 + ((kit - 103) * 30) + ((suplemento - 52) * 15)
        }
        else if (kit >= 82 && suplemento >= 42){
            soma = soma + 4000 + ((kit - 82) * 30) + ((suplemento - 42) * 15)
        }
        else if (kit >= 52 && suplemento >= 26){
            soma = soma + 2500 + ((kit - 52) * 30) + ((suplemento - 26) * 15)
        }
        else if (kit >= 21 && suplemento >= 10){
            soma = soma + 1000 + ((kit - 21) * 30)  + ((suplemento - 10) * 15)
        }
        if (sangue >= 52) {
            soma = soma + 2500 + ((sangue - 52) * 20)
        }
        else {
            soma = soma + (sangue * 20)
        }
     }
     else if (equipe == "Roxa"){
        if (kit >= 102 && suplemento >= 51){
            soma = soma + 5000 + ((kit - 102) * 30) + ((suplemento - 51) * 15)
        }
        else if (kit >= 82 && suplemento >= 41){
            soma = soma + 4000 + ((kit - 82) * 30) + ((suplemento - 41) * 15)
        }
        else if (kit >= 51 && suplemento >= 26){
            soma = soma + 2500 + ((kit - 49) * 30) + ((suplemento - 25) * 15)
        }
        else if (kit >= 20 && suplemento >= 10){
            soma = soma + 1000 + ((kit - 20) * 30)  + ((suplemento - 10) * 15)
        }
        if (sangue >= 51) {
            soma = soma + 2500 + ((sangue - 51) * 20)
        }
        else {
            soma = soma + (sangue * 20)
        }
     }
     else if (equipe == "Verde"){
        if (kit >= 88 && suplemento >= 44){
            soma = soma + 5000 + ((kit - 88) * 30) + ((suplemento - 44) * 15)
        }
        else if (kit >= 70 && suplemento >= 35){
            soma = soma + 4000 + ((kit - 70) * 30) + ((suplemento - 35) * 15)
        }
        else if (kit >= 44 && suplemento >= 22){
            soma = soma + 2500 + ((kit - 44) * 30) + ((suplemento - 22) * 15)
        }
        else if (kit >= 18 && suplemento >= 9){
            soma = soma + 1000 + ((kit - 18) * 30)  + ((suplemento - 10) * 15)
        }
        if (sangue >= 44) {
            soma = soma + 2500 + ((sangue - 44) * 20)
        }
        else {
            soma = soma + (sangue * 20)
        }
     }
     else {
        if (kit >= 93 && suplemento >= 47){
            soma = soma + 5000 + ((kit - 93) * 30) + ((suplemento - 47) * 15)
        }
        else if (kit >= 74 && suplemento >= 38){
            soma = soma + 4000 + ((kit - 74) * 30) + ((suplemento - 38) * 15)
        }
        else if (kit >= 47 && suplemento >= 24){
            soma = soma + 2500 + ((kit - 47) * 30) + ((suplemento - 24) * 15)
        }
        else if (kit >= 19 && suplemento >= 9){
            soma = soma + 1000 + ((kit - 19) * 30)  + ((suplemento - 9) * 15)
        }
        if (sangue >= 47) {
            soma = soma + 2500 + ((sangue - 47) * 20)
        }
        else {
            soma = soma + (sangue * 20)
        }
     }
     
    // Vamos calcular a pontuação considerando metas de kit e supl
    document.getElementById("soma").innerHTML = `Total de Pontos: ${soma}`
}