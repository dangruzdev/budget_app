import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                )
            };
        case 'CHANGE_BUDGET':
            return {
                ...state,
                budget: action.payload
            };
		default:
			return state;
    }
};

const initialState = {
    budget: 50000,
    expenses: [
        { id: 12, name: 'Шоппинг', cost: 3000 },
		{ id: 13, name: 'Ремонт', cost: 4000 },
		{ id: 14, name: 'Бензин', cost: 850 },
    ]
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider
        value={{
            budget: state.budget,
            expenses: state.expenses,
            dispatch,
        }}
        >
            {props.children}
        </AppContext.Provider>
    )
}