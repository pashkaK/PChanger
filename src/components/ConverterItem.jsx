import React from 'react';

const ConverterItem = ({value, currency, onChangeCurrency, onInputValue}) => {
    const possibleCurrencies = ['UAH', 'USD', 'EUR']
    return (
        <div className="converter__currency currency-box">
            <input
                type="number"
                value={value}
                onInput={(e) => (onInputValue(parseInt(e.target.value)))}
            />
            <select
                name="currency"
                value={currency}
                onChange={(e) => onChangeCurrency(e.target.value)}
            >
                {
                    possibleCurrencies.map((item, index) =>
                        <option value={item} key={index}>{item}</option>
                    )
                }
            </select>
        </div>
    );
};

export default ConverterItem;