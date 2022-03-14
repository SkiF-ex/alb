import Homepage from './components/Homepage/index';
import './App.css';
import { useState } from 'react';

function App() {
    const handlePage = (page) => {
        setPage(page)
    }

    const [page, setPage] = useState(<Homepage handlePage={handlePage}/>);

    return (
        <main className='main'>
            {page}
        </main>
    );
}

export default App;
