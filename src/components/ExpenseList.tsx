import React from 'react';
import { Expense } from '@/hooks/useExpenses';
import { sortExpenses } from '@/utils/sortExpenses';

interface ExpenseListProps {
  expenses: Expense[];
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => {
  const [sortBy, setSortBy] = React.useState<'date' | 'amount'>('date');
  const sortedExpenses = sortExpenses(expenses, sortBy);

  return (
    <div className="expense-list">
      <div className="flex justify-between mb-2">
        <select onChange={(e) => setSortBy(e.target.value as 'date' | 'amount')} className="border p-2 rounded">
          <option value="date">Sort by Date</option>
          <option value="amount">Sort by Amount</option>
        </select>
      </div>
      {sortedExpenses.map((expense) => (
        <div key={expense.id} className="expense-item">
          <p>{expense.description} - ${expense.amount} on {expense.date}</p>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
