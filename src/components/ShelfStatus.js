import React, {Component} from 'react'
import { get, getAll, search, update } from '../BooksAPI'
import Book from './Book'
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
                                    <Book 
                                        handleReadingChange={handleReadingChange}
                                        book = {book}
                                    />
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