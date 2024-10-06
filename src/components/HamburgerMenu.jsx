import { useState } from "react";

export default function HamburgerMenu() {
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
            <a href="/">Home</a>
          </li>
          <li className="nav-links">
            <a href="/add-expense">Add Expense</a>
          </li>
          <li className="nav-links">
            <a href="/history">History</a>
          </li>
          <li className="nav-links">
            <a href="/signup">Sign Up</a>
          </li>
          <li className="nav-links">
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
