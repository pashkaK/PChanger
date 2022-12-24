import React from 'react';

const RateItem = ({rate, error}) => {
    if (!error)
    return (
        <div className='rate__item'>
            <span>{rate.cc} : {rate.rate} </span>
        </div>
    );
    else return <div>{error}</div>
};

export default RateItem;