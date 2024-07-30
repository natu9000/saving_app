function doubleNumbers() {
    const inputNumber1 = document.getElementById('inputNumber1').value;
    const inputNumber2 = document.getElementById('inputNumber2').value;
    const inputNumber3 = document.getElementById('inputNumber3').value;
    const inputNumber4 = document.getElementById('inputNumber4').value;

    const result1 = inputNumber1 * 2;
    const result2 = inputNumber2 * 2;
    const result3 = inputNumber3 * 2;
    const result4 = inputNumber4 * 2;

    document.getElementById('result1').textContent = `Result 1: ${result1}`;
    document.getElementById('result2').textContent = `Result 2: ${result2}`;
    document.getElementById('result3').textContent = `Result 3: ${result3}`;
    document.getElementById('result4').textContent = `Result 4: ${result4}`;
}
