import { useEffect, useState } from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import FinancialBalance from './FinancialBalance';

const FinancialOverview = () => {
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/balance')
      .then(res => res.json())
      .then(data => {
        setBalance(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  // map all data first
  // const allTitles = balance.map(item => item.title);

  // If you want ONLY one specific item
  const totalBalance = balance.find(item => item.title === 'Total Balance');
  const incomeData = balance.find(item => item.title === 'Income');
  const expenses = balance.find(item => item.title === 'Expenses');

  return (
    <div>
      <FinancialBalance
        totalBalance={totalBalance}
        incomeData={incomeData}
        expenses={expenses}
      />
    </div>
  );
};

export default FinancialOverview;
