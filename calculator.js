// Variáveis globais
let displayValue = '';
let operator = '';
let previousValue = '';

// Função para atualizar o visor
function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

// Função para adicionar números no visor
function appendNumber(number) {
    if (number === '.' && displayValue.includes('.')) return;
    displayValue += number;
    updateDisplay();
}

// Função para limpar o visor
function clearDisplay() {
    displayValue = '';
    operator = '';
    previousValue = '';
    updateDisplay();
}

// Função para executar operações
function operate(op) {
    if (operator !== '') {
        calculate();
    }
    operator = op;
    previousValue = displayValue;
    displayValue = '';
}

// Função para calcular o resultado
function calculate() {
    const currentValue = parseFloat(displayValue);
    const prevValue = parseFloat(previousValue);

    switch (operator) {
        case '+':
            displayValue = prevValue + currentValue;
            break;
        case '-':
            displayValue = prevValue - currentValue;
            break;
        case '*':
            displayValue = prevValue * currentValue;
            break;
        case '/':
            displayValue = prevValue / currentValue;
            break;
    }

    operator = '';
    previousValue = '';
    updateDisplay();
}

// Função para calcular a porcentagem
function calculatePercentage() {
    const currentValue = parseFloat(displayValue);
    const percentageValue = currentValue / 100;

    displayValue = percentageValue;}
// Função para excluir o último número
function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

// Função para limpar a soma inteira
function deleteAll() {
    displayValue = '';
    operator = '';
    previousValue = '';
    updateDisplay();
}