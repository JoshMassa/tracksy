import SetBudget from "../components/SetBudget";
import ExpenseCategory from "../components/ExpenseCategory";
import ExpenseAmount from "../components/ExpenseAmount";
import SaveExpenseButton from "../components/SaveExpenseButton";

export default function AddExpense() {
  return (
    <>
      <SetBudget />
      <ExpenseCategory />
      <ExpenseAmount />
      <SaveExpenseButton />
    </>
  );
}
