import React, { useState, useContext } from "react";

import { AppContext } from "../context/AppContext";
import classes from "./styles.module.css"
const currencyArr = [
    {symbol: "$", name: "Dollar"},
    {symbol: "£", name: "Pound"},
    {symbol: "€", name: "Euro"},
    {symbol: "₹", name: "Rupee"},
    
]

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [currCurrency, setCurrCurrency] = useState(1);

    const handleChangeCurrency = (currencyIdx) => {
        setCurrCurrency(currencyIdx)
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currencyArr[currencyIdx].symbol,
        });
    }

    return (
        <div className="btn-group">
            <button type="button" className={`btn dropdown-toggle ${classes.currency}`} style={{color: "white", backgroundColor: "rgb(113 201 115)"}} data-bs-toggle="dropdown" aria-expanded="true">
                Currency ({currencyArr[currCurrency].symbol} {currencyArr[currCurrency].name})
            </button>
            <ul className="dropdown-menu" style={{padding: 0}}>
                {currencyArr.map((item, idx) => (
                    <li key={`currency_${idx}`}>
                        <button 
                            className={`dropdown-item ${classes.currency} ${currCurrency === idx ? classes.activeCurrency : ''}`} 
                            onClick={() => handleChangeCurrency(idx)}
                        >
                            {item.symbol} {item.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Currency;