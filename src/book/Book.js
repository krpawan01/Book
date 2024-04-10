import React from 'react'
import { useValue } from '../context/bookContext'
import { Link } from 'react-router-dom'
import './style.css'

const Book = () => {
    const { data, filterSearch, handleQuery } = useValue()
    console.log(data,)
    return (
        <div className='bookContainer'>
            <div className="inputbox">
                <input
                    type="text"
                    placeholder='Search with title'
                    onChange={handleQuery}
                />
            </div>
            <div className="books">
                {filterSearch.map((item, index) => (
                    <Link to={`/detail/${item.id}`}>
                        <div className='book' key={index}>
                            <div className="image">
                                <img src={item.volumeInfo.imageLinks?.thumbnail || ""} />
                            </div>
                            <div className="book-details">
                                <h2>{item.volumeInfo.title}</h2>
                                <h3>Categories: {item.volumeInfo.categories ? item.volumeInfo.categories.join(', ') : "N/A"}</h3>
                                <h4>Authors: {item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : "N/A"}</h4>
                                <h5>Rating: {item.volumeInfo.averageRating || "N/A"}</h5>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Book
