import React, { useState } from 'react';
import Dropdown from './Dropdown.component';
import Convert from './Convert.component';

const options = [
    { label: 'Afrikaans', value: 'af' },
    { label: 'Arabic', value: 'ar' },
    { label: 'Hindi', value: 'hi' },
    { label: 'French', value: 'fr' },
    { label: 'German', value: 'de' },
    { label: 'Marathi', value: 'mr' },
    { label: 'Sindhi', value: 'sd' },
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label htmlFor='inputText'>Input Text</label>
                    <input
                        id='inputText'
                        type='text'
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                    />
                </div>
                <Dropdown
                    options={options}
                    selected={language}
                    onSelectedChange={setLanguage}
                    title={'Select a Language'}
                />
                <hr />
                <h3 className='ui header'>Output</h3>
                <Convert language={language} text={text} />
            </div>
        </div>
    );
};

export default Translate;
