console.log("Hello World")

function getComputerChoice() {
    let option = Math.random();
    let resultado_compu;
    if (option <= 0.33) {
        resultado_compu = "piedra";
    }
    else if (option <= 0.66) {
        resultado_compu = "papel";
    }
    else {
        resultado_compu = "tijeras";
    }
    return resultado_compu

}

function getHumanChoice() {
    let message = "elige piedra (1), papel (2) o tijera (3)"
    let resultado_compu;
    let option = prompt(message);
    if (option == 1) {
        resultado_compu = "piedra";
    }
    else if (option == 2) {
        resultado_compu = "papel";
    }
    else {
        resultado_compu = "tijeras";
    }
    return resultado_compu
}

function playRound(HumanChoice, computerChoice) {
    let ganador;
    if (HumanChoice == "piedra") {
        if (computerChoice == "piedra") {
            console.log(" Ambos sacaron piedra, empatan")
            ganador = "ninguno"
        }
        else if (computerChoice == "papel") {
            console.log(" Perdiste! Papel le gana a piedra")
            ganador = "computer"
        }
        else {
            console.log("Ganaste! Piedra gana a tijeras")
            ganador = "human"
        }
    }

    else if (HumanChoice == "papel") {
        if (computerChoice == "papel") {
            console.log(" Ambos sacaron papel, empatan")
            ganador = "ninguno"
        }
        else if (computerChoice == "tijeras") {
            console.log(" Perdiste! Tijera gana a papel")
            ganador = "computer"
        }
        else {
            console.log("Ganaste! Papel gana a piedra")
            ganador = "human"
        }
    }

    else {
        if (computerChoice == "tijeras") {
            console.log(" Ambos sacaron tijera, empatan")
            ganador = "ninguno"
        }
        else if (computerChoice == "piedra") {
            console.log(" Perdiste! Piedra le gana a tijera")
            ganador = "computer"
        }
        else {
            console.log("Ganaste! Tijeras gana a papel")
            ganador = "human"
        }
    }
    return ganador;
}


function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    n = 5
    for (let i = 0; i < n; i++){
        let computer = getComputerChoice(); 
        let human = getHumanChoice();
        let ganador = playRound(human, computer);
    
        if (ganador == "human") {
            humanScore += 1
            console.log("El humano ganó un punto")
        }

        else if (ganador == "computer") {
            computerScore += 1
            console.log("Gané un punto, jajajaja")
        }
    }
    console.log(`marcador final: 
        humano: ${humanScore} 
                 vs 
        supermo: ${computerScore}`)
}

let juego = playGame();
console.log(juego)
