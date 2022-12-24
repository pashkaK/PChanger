import React, {useEffect, useState} from 'react';
import ConverterItem from "./ConverterItem";
import {useFetching} from "../hooks/useFetching";

const Converter = () => {
    const [fromRate, setFromRate] = useState('UAH')
    const [toRate, setToRate] = useState('USD')
    const [fromPrice, setFromPrice] = useState(0)
    const [toPrice, setToPrice] = useState(1)
    const [fetching, filterRates, error] = useFetching()

    const possibleCurrencies = {
        'UAH' : 1,
        'USD' : filterRates.find(rate => rate.cc === 'USD')?.rate,
        'EUR' : filterRates.find(rate => rate.cc === 'EUR')?.rate
    }
    const onChangeFromPrice = (value) => {
        const result = value * (possibleCurrencies[fromRate]/possibleCurrencies[toRate]);
        setToPrice(result.toFixed(4))
        // setToPrice(rounding(result))
        setFromPrice(value)
    }
    const onChangeToPrice = (value) => {
        const result = value * (possibleCurrencies[toRate]/possibleCurrencies[fromRate]);
        setFromPrice(result.toFixed(4))
        setToPrice(value)
    }

    const swapCurrencies = () => {
        setFromPrice(toPrice);
        setToPrice(fromPrice);
        setFromRate(toRate);
        setToRate(fromRate);

    }

    useEffect(() => {
        fetching()
    }, [])

    useEffect(() => {
        onChangeFromPrice(fromPrice)
    }, [fromRate])
    //
    useEffect(() => {
        onChangeToPrice(toPrice)
    }, [toRate])
    useEffect(() => {
        onChangeToPrice(1)
    }, [filterRates])


    return (
        <div className="converter__container">
            <h1 className='converter__title'>Enter the value of one of the currencies</h1>
            <div className="converter">

                <ConverterItem value={fromPrice} currency={fromRate} onChangeCurrency={setFromRate} onInputValue={onChangeFromPrice}/>
                <svg viewBox="0 0 24 24" onClick={swapCurrencies}>
                    <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/>
                </svg>
                <ConverterItem value={toPrice} currency={toRate} onChangeCurrency={setToRate} onInputValue={onChangeToPrice} />

            </div>
        </div>
    );
};

export default Converter;