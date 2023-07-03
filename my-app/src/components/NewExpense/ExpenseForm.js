import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const [showForm, setShowForm] = useState(false);

    const changeTitleInput = (event) => {
        setTitle(event.target.value);
    };

    const changeAmountInput = (event) => {
        setAmount(event.target.value);
    };

    const changeDateInput = (event) => {
        setDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        let newExpense = {
            title: title,
            amount: +amount,
            date: new Date(date)
        }

        props.onSaveExpenseData(newExpense);
        setTitle('');
        setAmount('');
        setDate('');
    };

    const onShowHideForm = () => {
        setShowForm((prevValue)=> {
            return !prevValue;
        });
    };


    if (!showForm) {
        return <button onClick={onShowHideForm}>Add Expense</button>
    }

    return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={title} onChange={changeTitleInput}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value={amount} onChange={changeAmountInput}/>
            </div>
            <div className='new-expense__control'>
                <label>Label</label>
                <input type='date' min='2020-01-01' max='2025-12-31' value={date} onChange={changeDateInput}/>
            </div>
        </div>
        <div className='new-expense__actions'>
             <button type='button' onClick= {onShowHideForm}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
    );
};

export default ExpenseForm;