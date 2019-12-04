import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    let [results, setResults] = useState([])
    let [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'espoo'
                }
            });
            setResults(response.data.businesses);
        } catch (error) {
            setErrorMessage('Something went wrong')
        }
    }

    useEffect(() => {
        searchApi('pasta')
    }, []);

    return [searchApi, results, errorMessage]
}