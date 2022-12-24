import {useState} from "react";
import axios from "axios";
import {useFilterRates} from "./useFilterRates";

export const useFetching = () => {
    const [error, setError] = useState('');
    const [rates, setRates] = useState([{}]);
    const fetching = async () => {
        try {
            const response = await axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
            setRates([...rates,...response.data])
        } catch (e) {
            setError(e.message)
        }
    }

    const filterRates = useFilterRates(rates)
    return [fetching, filterRates, error]
}