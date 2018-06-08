import React, {Component} from 'react'
import { get, getAll, search, update } from '../BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book';

class SearchList extends Component{
    render(){
        let { 
            handleSearchChange,
            searchResults,
            searchError,
            searchQuery,
            handleReadingChange,
            currentlyReading,
            wantToRead,
            read
        } = this.props
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" value={searchQuery}
                  onChange={(e)=>{
                    handleSearchChange(e);
                  }}
                />

              </div>
            </div>
            <div className="search-books-results">
            {searchQuery!=='' &&
                <ol className="books-grid">
                    {!searchError && searchResults ?
                        
                        searchResults.map(((book, i)=>{
                            return(
                                book.title&&
                                <li key={i}>
                                    <Book 
                                        handleReadingChange={handleReadingChange}
                                        book = {book}
                                        currentlyReading={currentlyReading}
                                        wantToRead={wantToRead}
                                        read={read}
                                        index={i}
                                    />
                                </li>
                                
                            )
                        }))


                    :
                    <p>No Results Found...</p>}
                </ol>
            }
            {searchQuery==='' && <div className='text-align'>Please Enter a title or Author</div>}
            </div>
          </div>
        )
    }
}

export default SearchList;