function calculatePricePerGram() {
    const price1 = document.getElementById('price1').value;
    const gram1 = document.getElementById('gram1').value;
    const price2 = document.getElementById('price2').value;
    const gram2 = document.getElementById('gram2').value;

    // 入力値が数値かどうかを確認し、ゼロ除算を防止
    if (!price1 || !gram1 || !price2 || !gram2) {
        document.getElementById('result1').textContent = "Please enter all four numbers.";
        document.getElementById('result2').textContent = "";
        return;
    }
    if (gram1 == 0 || gram2 == 0) {
        document.getElementById('result1').textContent = "Grams (1 and 2) cannot be zero.";
        document.getElementById('result2').textContent = "";
        return;
    }

    const result1 = price1 / gram1;
    const result2 = price2 / gram2;

    document.getElementById('result1').textContent = `Price per gram 1 = ${result1}`;
    document.getElementById('result2').textContent = `Price per gram 2 = ${result2}`;
}
