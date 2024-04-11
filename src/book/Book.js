import React from 'react'
import { useValue } from '../context/bookContext'
import { Link } from 'react-router-dom'
import './style.css';
import './media.css'

const Book = () => {
    const { data, filterSearch, handleQuery, query, renderRating } = useValue()
    console.log(data,)
    
    return (
        <div className='bookContainer'>
            <div className="inputbox">
                <input
                    type="text"
                    placeholder='Search with Categories or by Author Name'
                    onChange={handleQuery}
                    value={query}
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
                                <h3>Categories: {item.volumeInfo.categories ? item.volumeInfo.categories.join(', ') : ""}</h3>
                                <h4>Authors: {item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : ""}</h4>
                                <h2> <span  className="rating">{item.volumeInfo.averageRating ? renderRating(Math.round(item.volumeInfo.averageRating)) : ""}</span>
                                    <span className='ratingUser'> {item.volumeInfo.ratingsCount ? `( ${item.volumeInfo.ratingsCount} )` : ""}</span>
                                </h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Book
