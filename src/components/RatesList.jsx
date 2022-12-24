import React, {useEffect} from 'react';
import RateItem from "./RateItem";
import {useFetching} from "../hooks/useFetching";

const RatesList = () => {
    const [fetching, filterRates, error] = useFetching()
    useEffect(() => {
        fetching()
    }, [])

    return (
        <div className='wrapper__list'>
            {filterRates.map(rate =>
                <RateItem error={error} key={rate.rate} rate={rate}></RateItem>
            )}
        </div>
    );
};

export default RatesList;