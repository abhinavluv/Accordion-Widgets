import './App.css';

import Accordion from './components/Accordion.component';

const items = [
    { title: 'What is React?', content: 'A frontend JS Library' },
    { title: 'Why use it?', content: 'Component based, favorite' },
    {
        title: 'How do you use it?',
        content: 'Use components as building blocks',
    },
];

function App() {
    return (
        <div className='App'>
            <Accordion items={items} />
        </div>
    );
}

export default App;
