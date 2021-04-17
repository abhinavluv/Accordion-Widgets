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

        if (term && !results.length) {
            search();
        } else {
            const timeoutId = setTimeout(() => {
                if (term) search();
            }, 500);
            // useEffect with a param term will get called when component first renders and whenever term changes
            // if useEffect returns a function along with the other code, the whole function with the returned func will get called when component renders
            // but when the term changes, the return function gets called first after which the other existing code gets executed.
            // cleanup code is normally written in the returned function like below where we are clearing the timeout
            // above will wait for 500ms before triggering a request to API (throttling/debouncing)
            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [term]);

    const renderedResults = results.map((result) => {
        return (
            <div className='item' key={result.pageid}>
                <div className='right floated content'>
                    <a
                        className='ui button'
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                        Go to Article
                    </a>
                </div>
                <div className='content'>
                    <div className='header'>{result.title}</div>
                    {/* below is done bcoz api was returning content with embedded html elements */}
                    <span
                        dangerouslySetInnerHTML={{
                            __html: result.snippet,
                        }}></span>
                    {/* {result.snippet} */}
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
