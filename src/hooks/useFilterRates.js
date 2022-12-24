import {useMemo} from "react";

export const useFilterRates = (rates) => {
    const filterRates = useMemo(() => {
        return [...rates.filter(rate => rate.cc === 'USD' || rate.cc === 'EUR')]
    }, [rates])
    return filterRates
}