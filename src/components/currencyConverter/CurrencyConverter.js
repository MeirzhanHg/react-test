
import { useState, useEffect } from 'react';

import ConvertCurrency from '../services/ConvertCurrencyService';
import './currencyConverter.scss'

const CurrencyConverter = (props) => {

    const [convert, setConvert] = useState(0)
    const [currency, setCurrency] = useState('usd')
    const [current, setCurrent] = useState(100)

    const convertValue = new ConvertCurrency();

    useEffect(() => {
        if(current) {
            getCurrency(currency);
        } else {
            reset()
        }        

    }, [current])

    const getCurrency = (curr) => {
        convertValue.getResource('KZT', curr, current)
                .then(res => {
                    setCurrency(res.query.from)
                    setConvert((res.result.toFixed(0)))
                })
                .catch(err => console.log(err))
    }

    const convertToCurrency = (e) => {
        let curr = e.target.innerText;

        if (current) {
            getCurrency(curr);
        } else {
            reset()
        }
    }

    const onChange = (e) => {
        setCurrent(e.target.value)
    }

    const reset = () => {
        setCurrent(current => '')
        setConvert(convert => null)
    }

    return (
        <div className="app">
            <p>Введите валюту в тенге</p>
            KZT: <input type="text"
                value={current}
                onChange={onChange} />
            <div className="convert">{currency}: {convert}</div>
            <div className="controls">
                <button onClick={convertToCurrency}>USD</button>
                <button onClick={convertToCurrency}>EUR</button>
                <button onClick={convertToCurrency}>RUB</button>
                <button onClick={reset}>RESET</button>
            </div>
        </div>
    )

}


export default CurrencyConverter;