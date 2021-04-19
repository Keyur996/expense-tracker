import './ExpenseList.css'
import ExpenseItem from '../ExpenseItem';

const ExpenseList = (props) => {
    const expenses = props.expenses;
    return (
        <div className="expenses">
            {expenses.map((expense) => {
                return <ExpenseItem title={expense.title}
                    date={expense.date}
                    amount={expense.amount}
                />
            })}
        </div>
    );
}

export default ExpenseList;