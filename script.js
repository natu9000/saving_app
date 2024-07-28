function doubleNumber() {
    const inputNumber = document.getElementById('inputNumber').value;
    const result = inputNumber * 2;
    document.getElementById('result').textContent = `Result: ${result}`;
}