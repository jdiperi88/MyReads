import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Switch,BrowserRouter as Router, Route} from 'react-router-dom'
import { get, getAll, search, update } from './BooksAPI'
import SearchList from './components/SearchList'
import Home from './components/Home';
class BooksApp extends React.Component {
  componentDidMount(){
    getAll().then((res)=>{
      console.log(res)
      this.setState({
        currentlyReading: res.filter(book=>{
          return book.shelf=='currentlyReading'
        }),
        wantToRead: res.filter(book=>{
          return book.shelf=='wantToRead'
        }),
        read: res.filter(book=>{
          return book.shelf=='read'
        }),
        none:[]
      })
    })
  }

  componentDidUpdate(prev){
    console.log(prev)
    getAll().then((res)=>{
      this.setState({
        currentlyReading: res.filter(book=>{
          return book.shelf=='currentlyReading'
        }),
        wantToRead: res.filter(book=>{
          return book.shelf=='wantToRead'
        }),
        read: res.filter(book=>{
          return book.shelf=='read'
        }),
      })
    })
  }
  state = {
    showSearchPage: false,
    searchQuery:'',
    searchResults: '',
    searchError: false,
    currentlyReading:[],
    wantToRead:[],
    read:[],
    none:[]
  }
  handleReadingChange=(e, book)=>{
    console.log(e.target.value, book);
    let readingChoice = e.target.value
    update(book,readingChoice)
      .then(res=>{
        let {wantToRead,currentlyReading,read} = res
        this.setState({
          currentlyReading,
          wantToRead,
          read
        })

      })
  }
  handleSearchChange=(e)=>{
    let searchQuery = e.target.value
    this.setState({
      searchQuery
    })
    if(searchQuery !== ''){
    search(searchQuery)
      .then((res)=>{
      if(res.length>0){
        this.setState({
          searchResults:res,
          searchError:false
        })

      }else{
        this.setState({
          searchError:true
        })
      }
      })
    }
    
    
  }

  render() {
    let { 
        searchResults,
        searchError,
        searchQuery,
        wantToRead,
        currentlyReading,
        read 
    } = this.state
    return (

      <div className="app">
        <Router>
          <div>
            <Switch>
              <Route exact path='/' render={(props)=>{
                return(<Home 
                    handleReadingChange={this.handleReadingChange}
                    currentlyReading={currentlyReading}
                    wantToRead={wantToRead}
                    read={read}
                />)

              }} />
              <Route exact path='/search' render={(props)=>{
                return(
                  <SearchList 
                    handleSearchChange={this.handleSearchChange}
                    searchResults={searchResults}
                    searchError={searchError}
                    searchQuery={searchQuery}
                    handleReadingChange={this.handleReadingChange}
                  />
                )
              }}/> 
            </Switch>   
          </div>
        </Router>
      </div>

    )
  }
}

export default BooksApp
