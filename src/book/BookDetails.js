import React from 'react'
import { useValue } from '../context/bookContext';
import { Link, useParams } from 'react-router-dom';

const BookDetails = () => {
    const { id } = useParams();
    const { data, renderRating } = useValue()
    const book = data.find(book => book.id === parseInt(id));
    return (

        <div className='detailsContainer'>

            <div className="boxContainer">
                <Link to={'/'} >
                    <div className="icons">
                        X
                    </div>
                </Link>
                <div className="details-image">
                    <img src={book.volumeInfo.imageLinks?.smallThumbnail || ""} alt="" />
                </div>
                <div className="book-details">
                    <h2>{book.volumeInfo.title}</h2>
                    <h3>Subtitle: {book.volumeInfo.subtitle || "N/A"}</h3>
                    <h5>Publisher: {book.volumeInfo.publisher || "N/A"}</h5>
                    <h5>Published Date: {book.volumeInfo.publishedDate || "N/A"}</h5>
                    <h5>Page Count: {book.volumeInfo.pageCount || "N/A"}</h5>
                    <h5>Categories: {book.volumeInfo.categories ? book.volumeInfo.categories.join(', ') : "N/A"}</h5>
                    <h5>Authors: {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : "N/A"}</h5>
                    <h5> <span className="rating">{book.volumeInfo.averageRating ? renderRating(Math.round(book.volumeInfo.averageRating)) : ""}</span>
                        <span className='ratingUser'> {book.volumeInfo.ratingsCount ? `( ${book.volumeInfo.ratingsCount} )` : ""}</span>
                    </h5>

                </div>
            </div>
        </div>
    )
}

export default BookDetails
