import { useState } from "react";
import { Chart } from "react-google-charts";
import "./styles.css";
import TracksyLogo from "./assets/tracksy-logo.png";

export default function App() {
  return (
    <>
      <Header />
      <CurrentMonth />
      <RemainingBudget />
      <PieChart />
      <AddExpense />
    </>
  );
}

function Header() {
  return (
    <header>
      <img className="tracksy-logo" src={TracksyLogo} alt="Tracksy Logo" />
      <HamburgerMenu />
    </header>
  );
}

function HamburgerMenu() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="nav-container">
      <nav className="navbar">
        <div
          className={`menu-toggle ${isActive ? "is-active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-menu ${isActive ? "active" : ""}`}>
          <li className="nav-links">
            <a href="#home">Home</a>
          </li>
          <li className="nav-links">
            <a href="#add-expense">Add Expense</a>
          </li>
          <li className="nav-links">
            <a href="#history">History</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function CurrentMonth() {
  const currentDate = new Date(Date.now());
  const month = { month: "long" };

  const formattedDate = currentDate.toLocaleDateString("en-US", month);

  return <h1 className="formatted-date">{formattedDate} Budget</h1>;
}

function RemainingBudget() {
  return (
    <div className="remaining-budget-container">
      <h3>Remaining Budget</h3>
      <p>$XX.XX</p>
    </div>
  );
}

function PieChart() {
  const data = [
    ["Category", "Amount"],
    ["Fixed Costs", 1100],
    ["Groceries", 550],
    ["Medical", 242],
    ["Fun", 100],
    ["Eating Out", 275],
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

function AddExpense() {
  return (
    <div className="new-expense-container">
      <a className="new-expense-link" href="#add-expense">
        ADD NEW EXPENSE
      </a>
    </div>
  );
}
