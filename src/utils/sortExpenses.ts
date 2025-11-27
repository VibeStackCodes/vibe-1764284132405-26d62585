import { Expense } from '@/hooks/useExpenses';

export const sortExpenses = (expenses: Expense[], sortBy: 'date' | 'amount') => {
  return [...expenses].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else {
      return a.amount - b.amount;
    }
  });
};
