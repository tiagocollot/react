//! import './ExpenseItem.css';  Step 1

// function ExpenseItem() {
//   const expenseDate = new Date(2022, 2, 8);
//   const expenseTitle = 'Car Insurance';
//   const expenseAmount = 294.97;

//   return (
//     <div className="expense-item">
//       <div>{expenseDate.toISOString()}</div>
//       <div className="expense-item__description">
//         <h2>{expenseTitle}</h2>
//         <div className="expense-item__price">${expenseAmount}</div>
//       </div>
//     </div>
//   );
// }

// export default ExpenseItem;

//! Step 2
// import './ExpenseItem.css';

// function ExpenseItem(props) {

//   return (
//     <div className="expense-item">
//       <div>{props.date.toISOString()}</div>
//       <div className="expense-item__description">
//         <h2>{props.title}</h2>
//         <div className="expense-item__price">${props.amount}</div>
//       </div>
//     </div>
//   );
// }

// export default ExpenseItem;

//! Step 3
// import './ExpenseIteve const mont...to ExpenseDate.Jsm.css';

// function ExpenseItem(props) {
//   const month = props.date.toLocaleString('en-US', { month: 'long' });
//   const day = props.date.toLocaleString('en-US', { day: '2-digit' });
//   const year = props.date.getFullYear();

//   return (
//     <div className="expense-item">
//         <div>
//           <div>{month}</div>
//           <div>{day}</div>
//           <div>{year}</div>
//         </div>
//       <div className="expense-item__description">
//           <h2>{props.title}</h2>
//           <div className="expense-item__price">${props.amount}</div>
//         </div>
//     </div>
//   );
// }

// export default ExpenseItem;


//! Step 5  Cut and move the const month, day, year to ExpenseDate.js
//! and respective DIV
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from './Card';

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
    </Card>
  );
}

export default ExpenseItem;
