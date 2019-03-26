import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import AddBookmark from './components/AddBookmark'
import DisplayBookmarker from './components/DisplayBookmarker';

class App extends Component {

  state = {
    bookmark:[
      {
        id:'1',
        name:'React Native',
        url:'https://facebook.github.io/react-native'
      }
    ]
  }
  
  
  AddNewBookmark = (NewBookmark) =>{
    
    // randomly creating a new ID
    let newID = Math.floor(Math.random() * 12)
    let overNew = {
     id:newID,
     name:NewBookmark.Name,
     url:NewBookmark.url
    }
    // adding new bookmark to the state
    this.setState({
      bookmark:[...this.state.bookmark, overNew]
    })
  }

  //deleting a bookmark
  DeleteBookmark = (id) =>{
    this.setState({
      bookmark:[...this.state.bookmark.sefilter(bookmark => bookmark.id !== id
      )]
    })
  }

  render() {
    return (
      <div className="App">
          <Header />
          <AddBookmark AddNewBookmark={this.AddNewBookmark} />
          <DisplayBookmarker  bookmark={this.state.bookmark} DeleteBookmark={this.DeleteBookmark}/>
      </div>
    );
  }
}

export default App;
