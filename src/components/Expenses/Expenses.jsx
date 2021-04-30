import './Expenses.css';
import CardWrapper from '../UI/card/CradWrapper';
import ExpenseItem from './expense-Item/ExpenseItem';

const Expenses = (props) => {
    const expenses = props.expenses;
    return (
        <CardWrapper className="expenses">
            {expenses.map((expense) => {
                return <ExpenseItem title={expense.title}
                    date={expense.date}
                    amount={expense.amount}
                />
            })}
        </CardWrapper>
    );
}

export default Expenses;