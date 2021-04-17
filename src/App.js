import { useState } from 'react';
import './App.css';

import Accordion from './components/Accordion.component';
import Search from './components/Search.component';
import Dropdown from './components/Dropdown.component';

const items = [
    { title: 'What is React?', content: 'A frontend JS Library' },
    { title: 'Why use it?', content: 'Component based, favorite' },
    {
        title: 'How do you use it?',
        content: 'Use components as building blocks',
    },
];

const options = [
    { label: 'The Color Red', value: 'red' },
    { label: 'The Color Green', value: 'green' },
    { label: 'The Color Blue', value: 'blue' },
];

function App() {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);
    return (
        <div className='App'>
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            <button onClick={() => setShowDropdown(!showDropdown)}>
                Toggle Dropdown
            </button>
            {showDropdown ? (
                <Dropdown
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            ) : null}
        </div>
    );
}

export default App;
