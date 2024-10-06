export default function ExpenseCategory() {
  return (
    <div className="expense-category-container">
      <h1>Expense Category</h1>
      <select className="expense-category-select">
        <option>Select A Category</option>
        <option>Fixed Costs</option>
        <option>Groceries</option>
        <option>Medical</option>
        <option>Fun</option>
        <option>Dining Out</option>
        <option>Misc</option>
      </select>
    </div>
  );
}
