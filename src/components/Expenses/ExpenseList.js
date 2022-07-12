import './ExpensesFilter.css';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css'; 

const ExpenseList = props =>{
    if (props.items.length === 0){
        return <h2 className = 'expenses-list__fallback'> Found no Content </h2>; 
    }

    return(
        <ul className= 'expenses_list'> 
            {props.items.map((expense) => ( 
            <ExpenseItem 
          key ={expense.id} 
          title = {expense.title} 
          amount = {expense.amount} 
          date = {expense.date} 
      />
      ))}
        </ul>


    ); 
            }; 

 export default ExpenseList; 