import leia from "readline-sync";

var options = [
    "Celsius -> Fahrenheit", "Fahrenheit -> Celsius", "Celsius -> Kelvin", "Kelvin -> Celsius", "Fahrenheit -> Kelvin", "Kelvin -> Fahrenheit" 
]
var unidades = [
    "Celsius", "Kelvin", "Fahrenheit"
]
var escolha = leia.keyInSelect(unidades, "Escolha a unidade de medida da temperatura: ")
if(escolha === 0){
    var temperatura = leia.questionFloat("Digite a temperatura atual em celsius: ")
    var conversao = leia.keyInSelect(options, "Escolha o tipo de conversão que você quer fazer: ")
    if(conversao === 0){
        console.log((temperatura * 1.8) + 32)
    }else if(conversao === 2){
        console.log(temperatura + 273.15)
    }else{
        console.log("Selecione um tipo de conversão válido!")
    }
}
else if(escolha === 1){
    var temperatura = leia.questionFloat("Digite a temperatura atual em kelvin: ")
    var conversao = leia.keyInSelect(options, "Escolha o tipo de conversão que você quer fazer: ")
    if(conversao === 3){
        console.log(temperatura - 273.15)
    }else if(conversao === 5){
        console.log((temperatura - 273.15) * 1.8 + 32)
    }else{
        console.log("Selecione um tipo de conversão válido!")
    }
}
else if(escolha === 2){
    var temperatura = leia.questionFloat("Digite a temperatura atual em fahrenheit: ")
    var conversao = leia.keyInSelect(options, "Escolha o tipo de conversão que você quer fazer: ")
}