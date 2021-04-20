import './ExpenseItem.css';
import CardWrapper from './card/CradWrapper';
import ExpenseDate from './expense-date/ExpenseDate';

const ExpenseItem = (props) => {
    return (
        <CardWrapper className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </CardWrapper>
    );
}

export default ExpenseItem;