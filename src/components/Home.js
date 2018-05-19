import React, {Component} from 'react'
import { get, getAll, search, update } from '../BooksAPI'
import { Link } from 'react-router-dom'
import ShelfStatus from './ShelfStatus';

class Home extends Component{
    render(){
        let { 
          handleReadingChange,
          currentlyReading,
          wantToRead,
          read 
        
        } = this.props
        return(
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <ShelfStatus 
                    handleReadingChange={handleReadingChange}
                    status={currentlyReading}
                    statusTitle={'Currently Reading'}
                  />
                  <ShelfStatus 
                    handleReadingChange={handleReadingChange}
                    status={wantToRead}
                    statusTitle={'Want to Read'}
                  />
                  <ShelfStatus 
                    handleReadingChange={handleReadingChange}
                    status={read}
                    statusTitle={'Read'}
                  />
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )
    }
}

export default Home;