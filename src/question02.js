import leia from 'readline-sync';

var notas = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
]

var nota1 = leia.keyInSelect(notas, "Dê uma primeira nota de 0 a 10 para o Carnaval de 2025: ");
var nota2 = leia.keyInSelect(notas, "Dê uma segunda nota de 0 a 10 para o Carnaval de 2025: ");
var nota3 = leia.keyInSelect(notas, "Dê uma terceira nota de 0 a 10 para o Carnaval de 2025: ");
var nota4 = leia.keyInSelect(notas, "Dê uma quarta nota de 0 a 10 para o Carnaval de 2025: ");
var nota5 = leia.keyInSelect(notas, "Dê uma quinta nota de 0 a 10 para o Carnaval de 2025: ");
var nota6 = leia.keyInSelect(notas, "Dê uma sexta nota de 0 a 10 para o Carnaval de 2025: ");

if(nota1 > nota2 && nota1 > nota3 && nota1 > nota4 && nota1 > nota5 && nota1 > nota6){
    if(nota6 < nota1 && nota6 < nota2 && nota6 < nota3 && nota6 < nota4 && nota6 < nota5){
        var media = (nota2 + nota3 + nota4 + nota5) / 4
        console.log("- - - - -")
        console.log("A primeira e a sexta nota foram ignoradas.")
        console.log("A média das notas foi: " + media)
    }
    else if(nota5 < nota1 && nota5 < nota2 && nota5 < nota3 && nota5 < nota4 && nota5 < nota6){
        var media = (nota2 + nota3 + nota4 + nota6) / 4
        console.log("- - - - -")
        console.log("A primeira e a quinta nota foram ignoradas.")
        console.log("A média das notas foi: " + media)
    }
    else if(nota4 < nota1 && nota4 < nota2 && nota4 < nota3 && nota4 < nota5 && nota4 < nota6){
        var media = (nota2 + nota3 + nota5 + nota6) / 4
        console.log("- - - - -")
        console.log("A primeira e a quarta nota foram ignoradas.")
        console.log("A média das notas foi: " + media)
    }
    else if(nota3 < nota1 && nota3 < nota2 && nota3 < nota4 && nota3 < nota5 && nota3 < nota6){
        var media = (nota2 + nota4 + nota5 + nota6) / 4
        console.log("- - - - -")
        console.log("A primeira e a terceira nota foram ignoradas.")
        console.log("A média das notas foi: " + media)
    }
    else if(nota2 < nota1 && nota2 < nota3 && nota2 < nota4 && nota2 < nota5 && nota2 < nota6){
        var media = (nota3 + nota4 + nota5 + nota6) / 4
        console.log("- - - - -")
        console.log("A primeira e a segunda nota foram ignoradas.")
        console.log("A média das notas foi: " + media)
    }
}else if(nota2 > nota1 && nota2 > nota3 && nota2 > nota4 && nota2 > nota5 && nota2 > nota6){
    if(nota6 < nota1 && nota6 < nota2 && nota6 < nota3 && nota6 < nota4 && nota6 < nota5){
        var media = (nota1 + nota3 + nota4 + nota5) / 4
        console.log("- - - - -")
        console.log("A segunda e a sexta nota foram ignoradas.")
        console.log("A média das notas foi: " + media)
    }
    else if(nota5 < nota1 && nota5 < nota2 && nota5 < nota3 && nota5 < nota4 && nota5 < nota6){
        var media = (nota2 + nota3 + nota4 + nota6) / 4
        console.log("- - - - -")
        console.log("A segunda e a quinta nota foram ignoradas.")
        console.log("A média das notas foi: " + media)
    }
    else if(nota4 < nota1 && nota4 < nota2 && nota4 < nota3 && nota4 < nota5 && nota4 < nota6){
        var media = (nota1 + nota3 + nota5 + nota6) / 4
        console.log("- - - - -")
        console.log("A segunda e a quarta nota foram ignoradas.")
        console.log("A média das notas foi: " + media)
    }
    else if(nota3 < nota1 && nota3 < nota2 && nota3 < nota4 && nota3 < nota5 && nota3 < nota6){
        var media = (nota1 + nota4 + nota5 + nota6) / 4
        console.log("- - - - -")
        console.log("A segunda e a terceira nota foram ignoradas.")
        console.log("A média das notas foi: " + media)
    }
    else if(nota1 < nota2 && nota1 < nota3 && nota1 < nota4 && nota1 < nota5 && nota1 < nota6){
        var media = (nota3 + nota4 + nota5 + nota6) / 4
        console.log("- - - - -")
        console.log("A segunda e a primeira nota foram ignoradas.")
        console.log("A média das notas foi: " + media)
    }
}else if(nota3 > nota1 && nota3 > nota2 && nota3 > nota4 && nota3 > nota5 && nota3 > nota6){
    if(nota6 < nota1 && nota6 < nota2 && nota6 < nota3 && nota6 < nota4 && nota6 < nota5){
        var media = (nota1 + nota2 + nota4 + nota5) / 4
        console.log("- - - - -")
        console.log("A terceira e a sexta nota foram ignoradas.")
        console.log("A média das notas foi: " + media)
    }
    else if(nota5 < nota1 && nota5 < nota2 && nota5 < nota3 && nota5 < nota4 && nota5 < nota6){
        var media = (nota1 + nota2 + nota4 + nota6) / 4
        console.log("- - - - -")
        console.log("A terceira e a quinta nota foram ignoradas.")
        console.log("A média das notas foi: " + media)
    }
    else if(nota4 < nota1 && nota4 < nota2 && nota4 < nota3 && nota4 < nota5 && nota4 < nota6){
        var media = (nota1 + nota2 + nota5 + nota6) / 4
        console.log("- - - - -")
        console.log("A terceira e a quarta nota foram ignoradas.")
        console.log("A média das notas foi: " + media)
    }
    else if(nota2 < nota1 && nota2 < nota3 && nota2 < nota4 && nota2 < nota5 && nota2 < nota6){
        var media = (nota1 + nota4 + nota5 + nota6) / 4
        console.log("- - - - -")
        console.log("A terceira e a segunda nota foram ignoradas.")
        console.log("A média das notas foi: " + media)
    }
    else if(nota1 < nota2 && nota1 < nota3 && nota1 < nota4 && nota1 < nota5 && nota1 < nota6){
        var media = (nota2 + nota4 + nota5 + nota6) / 4
        console.log("- - - - -")
        console.log("A terceira e a primeira nota foram ignoradas.")
        console.log("A média das notas foi: " + media)
    }
}else if(nota4 > nota1 && nota4 > nota2 && nota4 > nota3 && nota4 > nota5 && nota4 > nota6){
    if(nota6 < nota1 && nota6 < nota2 && nota6 < nota3 && nota6 < nota4 && nota6 < nota5){
        var media = (nota1 + nota2 + nota3 + nota5) / 4
        console.log("- - - - -")
        console.log("A quarta e a sexta nota foram ignoradas.")
        console.log("A média das notas foi: " + media)
    }
    else if(nota5 < nota1 && nota5 < nota2 && nota5 < nota3 && nota5 < nota4 && nota5 < nota6){
        var media = (nota1 + nota2 + nota3 + nota6) / 4
        console.log("- - - - -")
        console.log("A quarta e a quinta nota foram ignoradas.")
        console.log("A média das notas foi: " + media)
    }
    else if(nota3 < nota1 && nota3 < nota2 && nota3 < nota4 && nota3 < nota5 && nota3 < nota6){
        var media = (nota1 + nota2 + nota5 + nota6) / 4
        console.log("- - - - -")
        console.log("A quarta e a terceira nota foram ignoradas.")
        console.log("A média das notas foi: " + media)
    }
    else if(nota2 < nota1 && nota2 < nota3 && nota2 < nota4 && nota2 < nota5 && nota2 < nota6){
        var media = (nota1 + nota3 + nota5 + nota6) / 4
        console.log("- - - - -")
        console.log("A quarta e a segunda nota foram ignoradas.")
        console.log("A média das notas foi: " + media)
    }
    else if(nota1 < nota2 && nota1 < nota3 && nota1 < nota4 && nota1 < nota5 && nota1 < nota6){
        var media = (nota2 + nota3 + nota5 + nota6) / 4
        console.log("- - - - -")
        console.log("A quarta e a primeira nota foram ignoradas.")
        console.log("A média das notas foi: " + media)
    }
}else if(nota5 > nota1 && nota5 > nota2 && nota5 > nota3 && nota5 > nota4 && nota5 > nota6){
    if(nota6 < nota1 && nota6 < nota2 && nota6 < nota3 && nota6 < nota4 && nota6 < nota5){
        var media = (nota1 + nota2 + nota3 + nota4) / 4
        console.log("- - - - -")
        console.log("A quinta e a sexta nota foram ignoradas.")
        console.log("A média das notas foi: " + media)
    }
    else if(nota4 < nota1 && nota4 < nota2 && nota4 < nota3 && nota4 < nota5 && nota4 < nota6){
        var media = (nota1 + nota2 + nota3 + nota6) / 4
        console.log("- - - - -")
        console.log("A quinta e a quarta nota foram ignoradas.")
        console.log("A média das notas foi: " + media)
    }
    else if(nota3 < nota1 && nota3 < nota2 && nota3 < nota4 && nota3 < nota5 && nota3 < nota6){
        var media = (nota1 + nota2 + nota4 + nota6) / 4
        console.log("- - - - -")
        console.log("A quinta e a terceira nota foram ignoradas.")
        console.log("A média das notas foi: " + media)
    }
    else if(nota2 < nota1 && nota2 < nota3 && nota2 < nota4 && nota2 < nota5 && nota2 < nota6){
        var media = (nota1 + nota3 + nota4 + nota6) / 4
        console.log("- - - - -")
        console.log("A quinta e a segunda nota foram ignoradas.")
        console.log("A média das notas foi: " + media)
    }
    else if(nota1 < nota2 && nota1 < nota3 && nota1 < nota4 && nota1 < nota5 && nota1 < nota6){
        var media = (nota2 + nota3 + nota4 + nota6) / 4
        console.log("- - - - -")
        console.log("A quinta e a primeira nota foram ignoradas.")
        console.log("A média das notas foi: " + media)
    }
}else if(nota6 > nota1 && nota6 > nota2 && nota6 > nota3 && nota6 > nota4 && nota6 > nota5){
    if(nota5 < nota1 && nota5 < nota2 && nota5 < nota3 && nota5 < nota4 && nota5 < nota6){
        var media = (nota1 + nota2 + nota3 + nota4) / 4
        console.log("- - - - -")
        console.log("A sexta e a quinta nota foram ignoradas.")
        console.log("A média das notas foi: " + media)
    }
    else if(nota4 < nota1 && nota4 < nota2 && nota4 < nota3 && nota4 < nota5 && nota4 < nota6){
        var media = (nota1 + nota2 + nota3 + nota5) / 4
        console.log("- - - - -")
        console.log("A sexta e a quarta nota foram ignoradas.")
        console.log("A média das notas foi: " + media)
    }
    else if(nota3 < nota1 && nota3 < nota2 && nota3 < nota4 && nota3 < nota5 && nota3 < nota6){
        var media = (nota1 + nota2 + nota4 + nota5) / 4
        console.log("- - - - -")
        console.log("A sexta e a terceira nota foram ignoradas.")
        console.log("A média das notas foi: " + media)
    }
    else if(nota2 < nota1 && nota2 < nota3 && nota2 < nota4 && nota2 < nota5 && nota2 < nota6){
        var media = (nota1 + nota3 + nota4 + nota5) / 4
        console.log("- - - - -")
        console.log("A sexta e a segunda nota foram ignoradas.")
        console.log("A média das notas foi: " + media)
    }
    else if(nota1 < nota2 && nota1 < nota3 && nota1 < nota4 && nota1 < nota5 && nota1 < nota6){
        var media = (nota2 + nota3 + nota4 + nota5) / 4
        console.log("- - - - -")
        console.log("A sexta e a primeira nota foram ignoradas.")
        console.log("A média das notas foi: " + media)
    }
}else{
    var media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6) / 6
    console.log("- - - - -")
    console.log("Muitas notas repetidas!")
    console.log("A média das notas foi: " + media)
}