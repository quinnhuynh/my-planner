import './NewExpenses.css'; 
import ExpensesForm from './ExpensesForm';
import React,  { useState } from 'react';


  
function NewExpenses(props){
    const [isEditing, setIsEditing] = useState(false); 

    const saveExpenseData = (enteredExpenseData)=> {
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        }; 
        props.onAddExpense(expenseData); 
        setIsEditing(false);
        console.log(expenseData); 
    
    }; 

    const startEditingHandler = ()=>{
        setIsEditing(true); 
    }; 

    const endEditingHandler = ()=>{
        setIsEditing(false); 
    }; 

    return(
        <div className = 'new-expense'>
            {!isEditing && <button onClick = {startEditingHandler}> Add Expense </button>}
            {isEditing && <ExpensesForm 
            onSaveExpenseData = {saveExpenseData}
            onCancel = {endEditingHandler }
            />}

        </div>
    ); 
   
}; 

export default NewExpenses; 