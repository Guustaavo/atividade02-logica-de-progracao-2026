import leia from 'readline-sync';

var number1 = leia.questionInt("Escreva o primeiro número inteiro: ");
var number2 = leia.questionInt("Escreva o segundo número inteiro: ");
var number3 = leia.questionInt("Escreva o terceiro número inteiro: ");

if(number1 >= number2 && number2 >= number3){
    console.log("- - - - -")
    console.log("Na ordem crescente ficou: " + number3 + ", " + number2 + ", " + number1)
}else if(number3 >= number2 && number2 >= number1){
    console.log("- - - - -")
    console.log("Na ordem crescente ficou: " + number1 + ", " + number2 + ", " + number3)
}else if(number2 >= number1 && number2 >= number3 && number3 >= number1){
    console.log("- - - - -")
    console.log("Na ordem crescente ficou: " + number1 + ", " + number3 + ", " + number2)
}else if(number2 >= number1 && number2 >= number3 && number1 >= number3){
    console.log("- - - - -")
    console.log("Na ordem crescente ficou: " + number3 + ", " + number1 + ", " + number2)
}else if(number1 >= number2 && number3 >= number2 && number1 >= number3){
    console.log("- - - - -")
    console.log("Na ordem crescente ficou: " + number2 + ", " + number3 + ", " + number1)
}else if(number1 >= number2 && number3 >= number2 && number3 >= number1){
    console.log("- - - - -")
    console.log("Na ordem crescente ficou: " + number2 + ", " + number1 + ", " + number3)
}else{
    console.log("Números inválidos!")
}