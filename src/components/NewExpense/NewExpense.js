import React,{useState} from 'react';
import './NewExpense.css';

import ExpenseForm from './ExpenseForm';
// Assignment4
const NewExpense = (props) =>{
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
       props.onAddExpense(expenseData);
       setIsEditing(false);
    };
    const addEditHandler = () => {
        setIsEditing(true);
      };
      const cancelEditHandler = () => {
        setIsEditing(false);
      };



    return <div className='new-expense'>
        {!isEditing && (
        <button onClick={addEditHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelEditHandler}
        />
      )}
    </div>
};
export default NewExpense;