
let salary = 0;
let expenses = [];

function addExpense() {
    const description = document.getElementById('expense-description').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);

    if (description === '' || isNaN(amount) || amount === 0) {
        alert('Please enter a valid description and amount for the expense.');
        return;
    }

    expenses.push({ description, amount });
    updateExpenseList();
    updateSummary();
    clearInputFields();
}

function subtractExpense() {
    const description = document.getElementById('expense-description').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);

    if (description === '' || isNaN(amount) || amount === 0) {
        alert('Please enter a valid description and amount for the expense.');
        return;
    }

    expenses.push({ description, amount: -amount }); // Use negative amount to subtract
    updateExpenseList();
    updateSummary();
    clearInputFields();
}

function updateExpenseList() {
    const expensesList = document.getElementById('expenses');
    expensesList.innerHTML = '';

    for (let i = 0; i < expenses.length; i++) {
        const expense = expenses[i];
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span>${expense.description}</span><span>$${expense.amount.toFixed(2)}</span>`;
        expensesList.appendChild(listItem);
    }
}

function updateSummary() {
    const totalSalary = parseFloat(document.getElementById('salary').value);
    if (isNaN(totalSalary) || totalSalary <= 0) {
        alert('Please enter a valid salary.');
        return;
    }
    salary = totalSalary;

    let totalExpenses = 0;
    for (let i = 0; i < expenses.length; i++) {
        totalExpenses += expenses[i].amount;
    }

    const remainingBudget = salary + totalExpenses; // Use addition for remaining budget

    document.getElementById('total-salary').textContent = '$' + salary.toFixed(2);
    document.getElementById('total-expenses').textContent = '$' + totalExpenses.toFixed(2);
    document.getElementById('remaining-budget').textContent = '$' + remainingBudget.toFixed(2);
}

function clearInputFields() {
    document.getElementById('expense-description').value = '';
    document.getElementById('expense-amount').value = '';
}
