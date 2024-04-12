import React, { useContext } from "react"; 

import { TiDelete, } from "react-icons/ti" ;
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { AppContext } from "../context/AppContext";

const ExpensesItem = (props) => {
    const {dispatch, currency} = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name,
            cost: 10
        }

        dispatch({
            type: "ADD_EXPENSE",
            payload: expense
        })
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name,
            cost: -10
        }

        dispatch({
            type: "ADD_EXPENSE",
            payload: expense
        })
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
                <FaPlusCircle 
                    size='2.4em' 
                    color="green" 
                    onClick={() => increaseAllocation(props.name)}
                />
            </td>
            <td>
                <FaMinusCircle 
                    size='2.4em' 
                    color="red" 
                    onClick={() => decreaseAllocation(props.name)}
                />
            </td>
            <td>
                <TiDelete 
                    size='1.5em' 
                    onClick={handleDeleteExpense}
                ></TiDelete>
                </td>
        </tr>
    )
}

export default ExpensesItem;