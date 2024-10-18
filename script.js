// function adicionarCaracter(caracter) {
//     const valorInput = document.querySelector('.display').value
    
//     document.querySelector('.display').value = valorInput + caracter
// }

//     function limparTela() {
//         document.querySelector('.display').value = ''
//     }

//     function calcular() {
//         const valorInput = document.querySelector('.display').value

//         document.querySelector('.display').value = eval(valorInput)
//     }

//     function inverte() {
//         const valorInput = document.querySelector('.display').value

//         document.querySelector('.display').value = valorInput * -1
//     }


// Limitando em no máximo quatro dígitos após a vírgula

function adicionarCaracter(caracter) {
    const display = document.querySelector('.display');
    display.value += caracter;
}

function limparTela() {
    document.querySelector('.display').value = '';
}

function calcular() {
    try {
        const valorInput = document.querySelector('.display').value;
        const resultado = eval(valorInput);

        // Limita o resultado a no máximo 4 casas decimais
        document.querySelector('.display').value = parseFloat(resultado.toFixed(4));
    } catch (error) {
        // Em caso de erro, limpa a tela e exibe mensagem de erro
        document.querySelector('.display').value = 'Erro';
    }
}

function inverte() {
    const display = document.querySelector('.display');
    display.value = parseFloat(display.value) * -1;
}
