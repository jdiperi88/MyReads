import React, {Component} from 'react'
import { get, getAll, search, update } from '../BooksAPI'

class ShelfStatus extends Component{
    render(){
        let { 
            handleReadingChange,
            status,
            statusTitle
        } = this.props
        return(
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{statusTitle}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {status ?     
                        status.map(((book, i)=>{
                            return(
                                book.title&&
                                <li key={i}>
                                    <div className="book">
                                        <div className="book-top">
                                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks? book.imageLinks.thumbnail:'' })` }}></div>
                                            <div className="book-shelf-changer">
                                            <select onChange={(e)=>{
                                                handleReadingChange(e,book)
                                            }}>
                                                <option disabled selected value value="none">Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                            </div>
                                        </div>
                                        <div className="book-title">{book.title}</div>
                                        <div className="book-authors">{book.author}</div>
                                    </div>
                                </li>
                                
                            )
                        }))


                    :
                    <p>No Results Found...</p>}
                    </ol>
                  </div>
                </div>
        )
    }
}

export default ShelfStatus;