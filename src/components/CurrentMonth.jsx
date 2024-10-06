export default function CurrentMonth() {
  const currentDate = new Date(Date.now());
  const month = { month: "long" };

  const formattedDate = currentDate.toLocaleDateString("en-US", month);

  return <h1 className="formatted-date">{formattedDate} Budget</h1>;
}
