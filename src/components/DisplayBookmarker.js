import React, { Component } from 'react'
import Bookmark from './Bookmark';

export class DisplayBookmarker extends Component {

  render() {
   let bookmarks  = this.props.bookmark.map((bookmarks) =>{
            return  <Bookmark key={bookmarks.id} bookmarks={bookmarks} DeleteBookmark={this.props.DeleteBookmark}/>
   })
    return (
      <div>
         {bookmarks}
     
      </div>
    )
  }
}

export default DisplayBookmarker
