import React, { useState } from 'react';

interface ExpenseFormProps {
  onAddExpense: (amount: number, description: string, date: string) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onAddExpense }) => {
  const [amount, setAmount] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const [date, setDate] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddExpense(amount, description, date);
    setAmount(0);
    setDescription('');
    setDate('');
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Amount"
        required
        className="border p-2 rounded"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
        className="border p-2 rounded"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-primary text-white p-2 rounded">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
