function calculateFractions() {
    const inputA = document.getElementById('inputA').value;
    const inputB = document.getElementById('inputB').value;
    const inputC = document.getElementById('inputC').value;
    const inputD = document.getElementById('inputD').value;

    // 入力値が数値かどうかを確認し、ゼロ除算を防止
    if (!inputA || !inputB || !inputC || !inputD) {
        document.getElementById('result1').textContent = "Please enter all four numbers.";
        document.getElementById('result2').textContent = "";
        return;
    }
    if (inputB == 0 || inputD == 0) {
        document.getElementById('result1').textContent = "Denominators (b and d) cannot be zero.";
        document.getElementById('result2').textContent = "";
        return;
    }

    const result1 = inputA / inputB;
    const result2 = inputC / inputD;

    document.getElementById('result1').textContent = `a/b = ${result1}`;
    document.getElementById('result2').textContent = `c/d = ${result2}`;
}
