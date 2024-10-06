import { Chart } from "react-google-charts";

export default function BudgetComparisonChart() {
  // Sample budget and expense data for development purposes
  const budgetData = [
    { month: "January", budget: 1000 },
    { month: "February", budget: 1200 },
    { month: "March", budget: 1500 },
    { month: "April", budget: 1100 },
    { month: "May", budget: 1300 },
    { month: "June", budget: 1400 },
    { month: "July", budget: 1600 },
    { month: "August", budget: 1800 },
    { month: "September", budget: 1500 },
    { month: "October", budget: 1700 },
    { month: "November", budget: 1900 },
    { month: "December", budget: 2000 },
  ];

  const expenseData = [
    { month: "January", spent: 800 },
    { month: "February", spent: 1300 },
    { month: "March", spent: 1200 },
    { month: "April", spent: 900 },
    { month: "May", spent: 1400 },
    { month: "June", spent: 1300 },
    { month: "July", spent: 1500 },
    { month: "August", spent: 1600 },
    { month: "September", spent: 1600 },
    { month: "October", spent: 1750 },
    { month: "November", spent: 1850 },
    { month: "December", spent: 2100 },
  ];

  // Combine the data
  const combinedData = budgetData.map((budgetItem) => {
    const expenseItem = expenseData.find(
      (item) => item.month === budgetItem.month
    );
    const spent = expenseItem ? expenseItem.spent : 0;

    return [
      budgetItem.month,
      budgetItem.budget,
      spent, // Actual spending
    ];
  });

  // Prepare the final data for Google Charts
  const finalData = [
    ["Month", "Set Budget", "Actual Spending", { role: "style" }],
    ...combinedData.map((item) => {
      const isExceeded = item[2] > item[1];
      return [
        item[0], // Month
        item[1], // Set Budget
        item[2], // Actual Spending
        isExceeded ? "red" : "green",
      ];
    }),
  ];

  const options = {
    hAxis: { title: "Month" },
    vAxis: { title: "Amount ($)" },
    series: {
      0: { color: "blue", visibleInLegend: false }, // Set Budget bar color
      1: { type: "bars", visibleInLegend: false, color: "red" },
    },
    chartArea: {
      width: "80%",
      height: "50%",
      top: 40,
      left: 70,
      bottom: 100,
    },
    legend: {
      position: "top",
      alignment: "center",
      textStyle: {
        color: "black", // Legend text color
      },
    },
    tooltip: { isHtml: true }, // Allow HTML tooltips for custom formatting
  };

  return (
    <div className="history-chart-container">
      <h1>Budget vs. Actual Spending</h1>
      <Chart
        chartType="ColumnChart"
        data={finalData}
        options={options}
        width="100%"
        height="400px"
      />
      <div className="legend-container">
        <ul>
          <li>
            <span style={{ color: "blue" }}>■</span> Set Budget
          </li>
          <li>
            <span style={{ color: "green" }}>■</span> Within Budget
          </li>
          <li>
            <span style={{ color: "red" }}>■</span> Exceeded Budget
          </li>
        </ul>
      </div>
    </div>
  );
}
