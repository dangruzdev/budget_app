import React, {useContext, useState} from "react";
import { AppContext } from "./AppContext";

const Budget = () => {
  const {budget, dispatch} = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = () => {
    dispatch({type: 'CHANGE_BUDGET', payload: newBudget});
  }

  return (
    <div className="alert alert-secondary">
      <span>Бюджет: <input type="number" value={newBudget} onChange={(e) => setNewBudget(e.target.value)} />
      </span>
            <button className="btn btn-secondary" onClick={handleBudgetChange}>Изменить</button>
    </div>

  );
};

export default Budget;
