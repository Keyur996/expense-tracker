import './ExpenseList.css';
import CardWrapper from '../card/CradWrapper';
import ExpenseItem from '../ExpenseItem';

const ExpenseList = (props) => {
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

export default ExpenseList;