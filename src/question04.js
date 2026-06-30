import leia from 'readline-sync';

var idade = leia.questionInt("Nos informe sua idade: ")
var diarias = leia.questionInt("Nos informe quantos dias você pretende ficar aqui: ")


if(idade > 60){
    if(diarias <= 5){
        var valor = (diarias * 100) * 0.80
        console.log("A diária seria R$100,00, mas você receberá 20% de desconto.")
        console.log("Valor final: R$" + valor)
    }else if(diarias >= 6 && diarias <= 10){
        var valor = (diarias * 90) * 0.80
        console.log("A diária seria R$90,00, mas você receberá 20% de desconto.")
        console.log("Valor final: R$" + valor)
    }else if(diarias >= 11){
        var valor = (diarias * 80) * 0.80
        console.log("A diária seria R$80,00, mas você receberá 20% de desconto.")
        console.log("Valor final: R$" + valor)
    }
}else{
        if(diarias <= 5){
            var valor = (diarias * 100)
            console.log("A diária seria R$100,00, mas você receberá 20% de desconto.")
            console.log("Valor final: R$" + valor)
        }else if(diarias >= 6 && diarias <= 10){
            var valor = (diarias * 90)
            console.log("A diária seria R$90,00, mas você receberá 20% de desconto.")
            console.log("Valor final: R$" + valor)
        }else if(diarias >= 11){
            var valor = (diarias * 80)
            console.log("A diária seria R$80,00, mas você receberá 20% de desconto.")
            console.log("Valor final: R$" + valor)
        }else{
            console.log("Digite números válidos.")
        }
}