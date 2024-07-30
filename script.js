function calculateFraction() {
    const inputA = document.getElementById('inputA').value;
    const inputB = document.getElementById('inputB').value;
    const inputC = document.getElementById('inputC').value;
    const inputD = document.getElementById('inputD').value;

    // 入力値が数値かどうかを確認し、ゼロ除算を防止
    if (!inputA || !inputB || !inputC || !inputD) {
        document.getElementById('result').textContent = "Please enter all four numbers.";
        return;
    }
    if (inputB == 0 || inputD == 0) {
        document.getElementById('result').textContent = "Denominators (b and d) cannot be zero.";
        return;
    }

    const result = (inputA / inputB) * (inputC / inputD);
    document.getElementById('result').textContent = `Result: ${result}`;
}
