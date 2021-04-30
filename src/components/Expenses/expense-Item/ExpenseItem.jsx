import './ExpenseItem.css';
import CardWrapper from '../../UI/card/CradWrapper';
import ExpenseDate from '../expense-date/ExpenseDate';
import { useState } from 'react';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    const changeTitle = () => {
        setTitle('Updated');
        console.log(title);
    }

    return (
        <CardWrapper className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
                <button onClick={changeTitle}>change title</button>
            </div>
        </CardWrapper>
    );
}

export default ExpenseItem;