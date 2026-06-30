import leia from 'readline-sync';

var gols = leia.questionInt("Informe quantos gols o jogador fez: ");
var passeCerto = leia.questionInt("Informe quantos passes certos o jogador fez: ");
var passeErrado = leia.questionInt("Informe quantos passes errados o jogador fez: ");

var pontosGols = gols * 50
var pontosPassesCertos = passeCerto * 10
var pontosPassesErrados = passeErrado * -5

var total = pontosGols + pontosPassesCertos + pontosPassesErrados

if(total < 50){
    console.log("Péssima partida.")
    console.log("O jogador fez " + total + " pontos.")
}else if(total >= 50 && total < 100){
    console.log("Partida ruim.")
    console.log("O jogador fez " + total + " pontos.")
}else if(total >= 100 && total < 150){
    console.log("Fez o básico.")
    console.log("O jogador fez " + total + " pontos.")
}else if(total >= 150 && total < 200){
    console.log("Foi bem na partida.")
    console.log("O jogador fez " + total + " pontos.")
}else{
    console.log("Jogou demais!")
    console.log("O jogador fez " + total + " pontos.")
}