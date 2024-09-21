let total = 0;

    function addExpense() {
        
        const productName = document.getElementById('productName').value.trim();
        const productCost = parseFloat(document.getElementById('productCost').value);

        if (!productName || isNaN(productCost) || productCost <= 0) {
            alert("Please enter a valid product name and cost.");
            return;
        }

        // Add to table
        const expenseTable = document.getElementById('expenseBody');
        const row = expenseTable.insertRow();
        const productCell = row.insertCell(0);
        const costCell = row.insertCell(1);

        productCell.textContent = productName;
        costCell.textContent = `$${productCost.toFixed(2)}`;

        // Update the total
        total += productCost;
        document.getElementById('totalCost').textContent = total.toFixed(2);

        // Clear input fields
        document.getElementById('productName').value = '';
        document.getElementById('productCost').value = '';
    }