import { React, useState } from 'react';
import './App.css';

import Accordion from './components/Accordion.component';
import Search from './components/Search.component';
import Dropdown from './components/Dropdown.component';
import Translate from './components/Translate.component';
import Route from './components/Route.component';
import Header from './components/Header.component';

const items = [
    { title: 'What is React?', content: 'A frontend JS Library' },
    { title: 'Why use it?', content: 'Component based, favorite' },
    {
        title: 'How do you use it?',
        content: 'Use components as building blocks',
    },
];

const options = [
    { label: 'The Color Red', value: 'red', color: 'red' },
    { label: 'The Color Green', value: 'green', color: 'chartreuse' },
    { label: 'The Color Blue', value: 'blue', color: 'blue' },
];

function App() {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div className='App'>
            <Header />
            <Route path='/'>
                <Accordion items={items} />
            </Route>
            <Route path='/search'>
                <Search />
            </Route>
            <Route path='/dropdown'>
                <Dropdown
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                    title={'Select a Color'}
                />
            </Route>
            <Route path='/translate'>
                <Translate />
            </Route>
        </div>
    );
}

export default App;
