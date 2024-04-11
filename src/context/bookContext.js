import axios from 'axios'; 
import { createContext, useContext, useEffect, useState } from "react";

const bookContext = createContext();

function useValue() {
    const value = useContext(bookContext);
    return value;
}

const CostumBookContext = ({ children }) => {
    const [data, setData] = useState([]);
    const [filterSearch, setFilterSearch] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get('https://d1krvzwx5oquy1.cloudfront.net/books.json');
            setData(response.data);
            setFilterSearch(response.data);
        } catch (err) {
            console.log("error =>>>>>>>>>> ", err);
        }
    };

    const handleQuery = (e) => {
        const searchQuery = e.target.value.toLowerCase();
        setQuery(searchQuery);
        const filteredData = data.filter((book) =>
            (book.volumeInfo.authors && book.volumeInfo.authors.join(', ').toLowerCase().includes(searchQuery)) ||
            (book.volumeInfo.categories && book.volumeInfo.categories.join(', ').toLowerCase().includes(e.target.value.toLowerCase()))
        );
        setFilterSearch(filteredData);
    };

    const renderRating = (rating) => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push('★');
            } else {
                stars.push('☆');
            }
        }
        return stars.join('');
    };

    return (
        <>
            <bookContext.Provider value={{ data, filterSearch, query, handleQuery, renderRating }}>
                {children}
            </bookContext.Provider>
        </>
    )
}

export default CostumBookContext;

export { bookContext, useValue };