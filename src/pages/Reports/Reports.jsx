// import { Line, LineChart } from 'recharts';

import { use, useEffect, useState } from 'react';
import ResultsChart from '../../components/ResultsChart/ResultsChart';
import { AuthContext } from '../../provider/AuthContext';

const Reports = () => {
  const { user } = use(AuthContext);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // fetch(`http://localhost:3000/transactions?email=${user?.email}`)
    fetch(`http://localhost:3000/transactions`)
      .then(res => res.json())
      .then(data => {
        setTransactions(data);
      });
  }, [user]);

  const totalIncome = transactions
    .filter(item => item.type === 'Income')
    .reduce((sum, item) => sum + Number(item.amount), 0);

  const totalExpense = transactions
    .filter(item => item.type === 'Expense')
    .reduce((sum, item) => sum + Number(item.amount), 0);

  const totalBalance = totalIncome - totalExpense;
  return (
    <div className="max-w-11/12 mx-auto py-25">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#5c23be]">
          Report Of The Transactions
        </h2>
        <p className="text-gray-600 mt-3 px-80">
          Check the report by the chart of the transaction, which will be easier
          to understand for your transaction monitor.
        </p>
      </div>
      <div>
        <ResultsChart
          totalIncome={totalIncome}
          totalExpense={totalExpense}
          totalBalance={totalBalance}
        />
        <p className="text-gray-400 text-xl font-medium text-center underline">
          Chart of the transactions
        </p>
      </div>
    </div>
  );
};

export default Reports;
