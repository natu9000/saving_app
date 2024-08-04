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

    const result1 = Math.floor(price1 / gram1 * 10) /10;
    const result2 = Math.floor(price2 / gram2 * 10) /10;

    document.getElementById('result1').textContent = `グラム当たり ${result1} 円`;
    document.getElementById('result2').textContent = `グラム当たり ${result2} 円`;
}
