import { useState, useEffect } from 'react';
import axios from 'axios';
import baseURL from '../APIs/breakingBadAPI';
import '../CSS/app.css';
import Header from './Header';
import Body from './Body';

const App = () => {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(baseURL);
            setCharacters(res.data);
            setIsLoading(false);
        }

        fetchData();
    }, []);

    return (
        <div>
            <Header />
            <Body isLoading={isLoading} characters={characters} />
        </div>
    );
}

export default App;
