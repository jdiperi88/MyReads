import React, {Component} from 'react'
import { get, getAll, search, update } from '../BooksAPI'
import { Link } from 'react-router-dom'

class SearchList extends Component{
    render(){
        let { 
            book,
            handleReadingChange
        } = this.props
        const style = { width: 128, height: 193, backgroundImage: `url(${book.imageLinks? book.imageLinks.thumbnail:'' })` }
        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={style}></div>
                    <div className="book-shelf-changer">
                    <select value={book.shelf} onChange={(e)=>{
                        handleReadingChange(e,book)
                    }}>
                        <option value="none" disabled selected value>Move to...</option>
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
        )
    }
}

export default SearchList;