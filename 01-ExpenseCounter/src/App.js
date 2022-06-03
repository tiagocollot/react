import Expenses from './components/Expenses';
import React from "react";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return React.createElement(
    'div',
    {},
    React.createElement('h2', {}, "Expenses Counter"),
    React.createElement(Expenses, {items: expenses})
  );
  // return (
  //   <div>
  //     <h2 style={{ textAlign: "center", fontSize: 30 }}>Expenses Counter</h2>
  //     <Expenses items={expenses} />
  //     <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 30 }}>
  //       Give it a good use!
  //     </p>
  //   </div>
  // );
}

export default App;
