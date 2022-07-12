import './Expenses.css'; 
import Card from '../UI/Card'; 
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

const Expenses= (props)=> {
  const [inputSelectYear, setSelectYear] = useState('2020'); 

  const listenToChange = selectedYear =>{
    setSelectYear(selectedYear);
  }; 

  const filterYear = props.items.filter(expense=> {
    return expense.date.getFullYear().toString() === inputSelectYear; 
  }); 

      return(
        <div>
        <Card className = 'expenses'>
        <ExpensesFilter 
        value = {inputSelectYear} 
        onChange={listenToChange}
        />
        <ExpenseChart expenses ={filterYear} /> 
        <ExpenseList items ={filterYear} />
      </Card>
      </div>
          

    ); 

}; 
export default Expenses; 
