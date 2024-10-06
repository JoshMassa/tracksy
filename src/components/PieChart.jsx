import { Chart } from "react-google-charts";

export default function PieChart() {
  const data = [
    ["Category", "Amount"],
    ["Fixed Costs", 1100],
    ["Groceries", 550],
    ["Medical", 242],
    ["Fun", 100],
    ["Dining Out", 275],
    ["Misc", 485],
    ["Remaining Budget", 748],
  ];

  const options = {
    chartArea: {
      width: "90%",
      height: "80%",
    },
    legend: {
      alignment: "center",
      textStyle: {
        color: "white",
      },
    },
    tooltip: { isHtml: true },
    backgroundColor: "#123450",
  };

  return (
    <div className="chart-container">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width="100%"
        height="250px"
        legendToggle
      />
    </div>
  );
}
