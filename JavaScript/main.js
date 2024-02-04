function calculateTip() {
    var billAmount = parseFloat(document.getElementById('billAmount').value);
    var tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        alert("Por favor, ingrese números válidos.");
        return;
    }

    var tipAmount = (billAmount * tipPercentage) / 100;
    var totalAmount = billAmount + tipAmount;

    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
}
