import CurrentMonth from "../components/CurrentMonth";
import RemainingBudget from "../components/RemainingBudget.jsx";
import PieChart from "../components/PieChart.jsx";
import AddExpenseButton from "../components/AddExpenseButton.jsx";

export default function HomePage() {
  return (
    <>
      <CurrentMonth />
      <RemainingBudget />
      <PieChart />
      <AddExpenseButton />
    </>
  );
}
