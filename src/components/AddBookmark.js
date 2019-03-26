import React, { Component } from 'react'

export class AddBookmark extends Component {
state = {

}

arr = {};
FetchNameOfSite = (e) =>{
  this.setState({
      Name:e.target.value
  })
}

FetchUrl = (e) =>{
   this.setState({
       url:e.target.value
   })
}

AddBookmark= (e) =>{
    e.preventDefault();
    this.props.AddNewBookmark(this.state);
    
    // for clearing input
    this.setState({
        Name:'',
        url:''
    })
 
}

  render() {
    return (
      <div>
          <form style={form}>

          <label style={label}>Name:</label><br />
          <input type='text'  value={this.state.Name} style={input} onChange={this.FetchNameOfSite} /><br />

          <label style={label}>Url:</label><br />
          <input type='url' value={this.state.url} style={input} onChange={this.FetchUrl} /><br />
          
          <button style={button}  onClick={this.AddBookmark}>Add Bookmark</button>
          </form>
       
      </div>
    )
  }
}

export default AddBookmark

let form = {
    margin:'0 auto',
    height:'50vh'
}

let input = {
    lineHeight:'20px',
    padding:'0px 10px 0px ',
    borderRadius:'2px',
    width:'400px',
    height:'40px',
    marginBottom:'20px',
    marginTop:'15px',
    border:'2px solid black',
    outline:'none'
}

let label = {
    fontSize:'25px',
    position: 'relative',
    left: '-175px',
    color:'black'
}

let button = {
    padding:'10px',
    lineHeight:'16.8px',
    borderRadius:'3px',
    color:'white',
    background:'black',
    border:'2px solid black'
}