import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import Expenses from './components/Expenses';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AddExpenseForm from './components/AddExpenseForm';
import { AppProvider } from './components/AppContext';

// import './App.css'

const App = () => {
  return (
    <AppProvider>
    <div className="container">
      <h1 className="mt-3">Мой бюджет</h1>
      <div className='row mt-3'>
      <div className='col-sm'>
						<Budget />
					</div>
					<div className='col-sm'>
						<Remaining />
					</div>
					<div className='col-sm'>
						<Expenses />
					</div>
      </div>
      <h3 className='mt-3'>Траты</h3>
			<div className='row mt-3'>
				<div className='col-sm'>
					<ExpenseList />
				</div>
			</div>
      <h3 className='mt-3'>Добавить расход</h3>
			<div className='row mt-3'>
				<div className='col-sm'>
					<AddExpenseForm />
				</div>
			</div>
    </div>
    </AppProvider>
  )
}

export default App
