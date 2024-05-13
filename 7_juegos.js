function playGame(userChoice) {
    const choices = ['piedra', 'papel', 'tijeras'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result;

    if (userChoice === computerChoice) {
        result = "Empate";
    } else if (
        (userChoice === 'piedra' && computerChoice === 'tijeras') ||
        (userChoice === 'papel' && computerChoice === 'piedra') ||
        (userChoice === 'tijeras' && computerChoice === 'papel')
    ) {
        result = "¡Ganaste!";
    } else {
        result = "¡Perdiste!";
    }

    document.getElementById('result').innerText = `Elegiste ${userChoice}. La computadora eligió ${computerChoice}. ${result}`;
}

// Generar un número aleatorio entre 1 y 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

const guessInput = document.getElementById('guessInput');

const message = document.getElementById('message');

function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    if (userGuess === randomNumber) {
        message.textContent = '¡Felicidades! ¡Has adivinado el número!';
        message.style.color = 'green';
    } else if (userGuess < randomNumber) {
        message.textContent = 'El número es más alto. Intenta de nuevo.';
        message.style.color = 'red';
    } else {
        message.textContent = 'El número es más bajo. Intenta de nuevo.';
        message.style.color = 'red';
    }

    guessInput.value = '';
}


function adivinarNumero() {
    var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    var numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
    
    if (isNaN(numeroUsuario)) {
        document.getElementById('resultado').innerHTML = 'Por favor, ingresa un número válido.';
    } else if (numeroUsuario === numeroAleatorio) {
        document.getElementById('resultado').innerHTML = '¡Felicidades! Has adivinado el número correctamente.';
    } else if (numeroUsuario < numeroAleatorio) {
        document.getElementById('resultado').innerHTML = 'El número es mayor. Intenta nuevamente.';
    } else if (numeroUsuario > numeroAleatorio) {
        document.getElementById('resultado').innerHTML = 'El número es menor. Intenta nuevamente.';
    }
}