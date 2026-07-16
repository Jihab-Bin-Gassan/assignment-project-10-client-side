import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const ResultsChart = ({ totalIncome, totalExpense, totalBalance }) => {
  const chartData = [
    {
      type: 'Income',
      amount: totalIncome,
    },
    {
      type: 'Expense',
      amount: totalExpense,
    },
    {
      type: 'Balance',
      amount: totalBalance,
    },
  ];

  return (
    <div className="w-2/3 h-90 my-20">
      <p className="text-[#5c23be] text-lg font-bold">Report By Chart</p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={650}
          height={350}
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 40,
            bottom: 40,
          }}
        >
          <XAxis
            dataKey="type"
            label={{
              value: 'Transaction Type',
              position: 'bottom',
              offset: 15,
            }}
          />

          <YAxis
            width={80}
            tickFormatter={value => `$${value}`}
            label={{
              value: 'Amount ($)',
              angle: -90,
              position: 'left',
              offset: 20,
            }}
          />

          <Tooltip formatter={value => [`$${value}`, 'Amount']} />

          <Bar dataKey="amount">
            {chartData.map((entry, index) => (
              <Cell
                key={index}
                fill={
                  entry.type === 'Income'
                    ? '#2cdda2dd'
                    : entry.type === 'Expense'
                      ? '#f45151ec'
                      : '#7835ecde'
                }
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResultsChart;
