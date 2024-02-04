function calculateTip() {
    let billAmount = parseFloat(document.getElementById('billAmount').value);
    let tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        alert("Por favor, ingrese números válidos.");
        return;
    }

    let tipAmount = (billAmount * tipPercentage) / 100;
    let totalAmount = billAmount + tipAmount;

    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
}
