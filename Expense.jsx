import React, { useState } from 'react';

function Expense() {
  const [budget, setBudget] = useState(10000);
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  const remaining = budget - totalExpenses;

  const addExpense = (e) => {
    e.preventDefault();
    if (!expenseName || !expenseAmount) return;
    
    const newExpense = {
      id: Date.now(),
      name: expenseName,
      amount: Number(expenseAmount)
    };

    setExpenses([...expenses, newExpense]);
    setExpenseName('');
    setExpenseAmount('');
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <div className="main">
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}> 
      <h1>My Expense Tracker</h1>
      
      <div className='head1'>
        <h2>Budget: ${budget}</h2>
        <h2>Remaining: ${remaining}</h2>
        <h2>Spent: ${totalExpenses}</h2>
      </div>

      <form onSubmit={addExpense} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Expense name"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(e.target.value)}
        />
        <button type="submit" >Add Expense</button>
      </form>

      <div>
        <h2>Your Expenses</h2>
        {expenses.length === 0 ? (
          <p>No expenses yet</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {expenses.map((expense) => (
              <li key={expense.id} >
                <span>{expense.name}</span>
                <span>${expense.amount}</span>
                <button onClick={() => deleteExpense(expense.id)}>remove</button >
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    </div>
  );
}

export default Expense;