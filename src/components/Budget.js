import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    },0);

    const handleBudgeChange = (event) => {
        if(event.target.value < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");

        } else if (event.target.value > 20_000) {
            alert("The value cannot exceed remaining found $20000");
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: event.target.value,
            });
        }

    }

    return (
        <div className="alert alert-secondary" style={{display: "flex"}}>
            <span style={{whiteSpace: "nowrap", lineHeight: '30px', marginRight: "5px"}}>Budget: {currency}</span>
            <input type="number" step="10" value={budget} onChange={handleBudgeChange}/>
        </div>
    )
}


export default Budget;