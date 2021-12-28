import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        console.log("hi there")
        try {
            const response = await yelp.get('/search', {
                params: {
                    term: searchTerm,
                    location: 'west palm beach',
                    limit: 50
                }
            });
            setResults(response.data.businesses)
        } catch (e) {
            setErrorMessage('Something went wrong')
            console.log(e)
        }
    }

    useEffect(() => {
        searchApi('pasta')
    }, []);

    return [searchApi, results, errorMessage]
}