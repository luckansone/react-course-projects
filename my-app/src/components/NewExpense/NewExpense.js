import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (expenseData) => {
        const newExpenseData = {
            id: Math.random().toString(),
            ...expenseData
        }
        props.onAddExpenseData(newExpenseData);
    };
    
    return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
    )
};

export default NewExpense;
