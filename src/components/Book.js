import React, {Component} from 'react'
import { get, getAll, search, update } from '../BooksAPI'
import { Link } from 'react-router-dom'

class SearchList extends Component{
    render(){
        let { 
            book,
            handleReadingChange,
            currentlyReading,
            wantToRead,
            read,
            index
        } = this.props
        let shelf = 'none'
        if(currentlyReading && currentlyReading.indexOf(book.title)>=0){
            shelf = 'currentlyReading'
        }else if(wantToRead && wantToRead.indexOf(book.title)>=0){
            shelf = 'wantToRead'
        }else if(read && read.indexOf(book.title)>=0){
            shelf = 'read'
        }
        const style = { width: 128, height: 193, backgroundImage: `url(${book.imageLinks? book.imageLinks.thumbnail:'' })` }
        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={style}></div>
                    <div className="book-shelf-changer">
                    <select value={book.shelf?book.shelf:shelf} onChange={(e)=>{
                        handleReadingChange(e,book)
                    }}>
                        <option  disabled selected value>Move to...</option>
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