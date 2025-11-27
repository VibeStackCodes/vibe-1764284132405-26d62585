import { Outlet } from 'react-router-dom';
import { Suspense, useState } from 'react';
import { ErrorBoundary } from '@/components/error-boundary';
import { VibeStackBadge } from '@/components/vibestack-badge';
import ExpenseForm from '@/components/ExpenseForm';
import ExpenseList from '@/components/ExpenseList';
import useExpenses from '@/hooks/useExpenses';

/**
 * Main App component with routing
 * Uses React Router for SPA navigation
 */
function App() {
  const { expenses, addExpense } = useExpenses();

  return (
    <ErrorBoundary>
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center">
            <p className="text-muted-foreground">Loading...</p>
          </div>
        }
      >
        <div className="p-4">
          <ExpenseForm onAddExpense={addExpense} />
          <ExpenseList expenses={expenses} />
        </div>
      </Suspense>
      <VibeStackBadge />
    </ErrorBoundary>
  );
}

export default App;
