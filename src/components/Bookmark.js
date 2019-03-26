import React, { Component } from 'react'

export class Bookmark extends Component {


  render() {
    let { id, name, url } = this.props.bookmarks
    return (
      <div>
         <div style= {bookmark}>
          <p style={nameOfSite}>{name}</p>
            <button style={button}>
                <a style={LinkButton} target="_blank" rel="noopener noreferrer" href={url}>
                    Visit
                </a>
            </button>
            <button style={button} onClick={this.props.DeleteBookmark.bind(this,id)}>
                Delete
            </button>
         </div>
      </div>
    )
  }
}

export default Bookmark

let bookmark = {
    color:'white',
    width:'50%',
    margin:'0 auto',
    height:'13vh'
}

let nameOfSite = {
    color:'black',
    fontSize:'17px',
    paddingTop:'10px'
}

let button = {
    marginLeft:'10px',
    padding:'10px',
    lineHeight:'1.8px',
    borderRadius:'3px',
    color:'white',
    background:'black',
    border:'2px solid black',
}

let LinkButton = {
    textDecoration:'none',
    color:'white'
}