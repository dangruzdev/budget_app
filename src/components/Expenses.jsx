import React, {useContext} from 'react';
import { AppContext } from './AppContext';



const Expenses = () => {
	const {expenses} = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost)
	}, 0)

	return (
		<div className='alert alert-primary'>
			<span>Потрачено: {totalExpenses} ₽</span>
		</div>
	);
};

export default Expenses;