import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState(' ');
    const [results, setResults] = useState([]);

    // runs at initial render only
    // useEffect(() => {
    //     console.log('Search component rendered only once');
    // }, []);

    // runs at initial render and at every re-render
    // useEffect(() => {
    //     console.log('Search component rendered at every re-render');
    // });

    // runs at initial render and every re-render whenever term changes
    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get(
                'https://en.wikipedia.org/w/api.php',
                {
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: term,
                    },
                }
            );
            setResults(data.query.search);
        };
        if (term) search();
    }, [term]);

    const renderedResults = results.map((result) => {
        return (
            <div className='item' key='result.pageid'>
                <div className='content'>
                    <div className='header'>{result.title}</div>
                    {result.snippet}
                </div>
            </div>
        );
    });

    return (
        <div>
            <div>
                <div className='ui form'>
                    <div className='field'>
                        <label htmlFor='searchTerm'>Enter Search Term</label>
                        <input
                            type='text'
                            id='searchTerm'
                            value={term}
                            onChange={(e) => setTerm(e.target.value)}
                        />
                    </div>
                </div>
                <div className='ui celled list'>{renderedResults}</div>
            </div>
        </div>
    );
};

export default Search;

// https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=program
