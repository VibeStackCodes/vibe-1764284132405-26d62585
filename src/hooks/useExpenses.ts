import { useState } from 'react';

export interface Expense {
  id: number;
  amount: number;
  description: string;
  date: string;
}

const useExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [nextId, setNextId] = useState<number>(1);

  const addExpense = (amount: number, description: string, date: string) => {
    const newExpense: Expense = { id: nextId, amount, description, date };
    setExpenses((prev) => [...prev, newExpense]);
    setNextId((prev) => prev + 1);
  };

  return { expenses, addExpense };
};

export default useExpenses;
