import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import BookResult from './BookResult';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      books : [],
      title : '',
      author : [],
      price : '',
      description : '',
      bookType : 'none',
      currentBookSelected : ''
    }
  }

  //onChange handler for book inputs
  updateTitle = (title) => {
    this.setState({
      title 
    });
  }
  updateAuthor = (author) => {
    this.setState({
      author
    })
  }
  updatePrice = price => {
    this.setState({
      price
    })
  }
  updateDescription = description => {
    this.setState({
      description
    })
  }
  displayImageDetails = () => {

  //set up onClick...grab id for which book is clicked by grabbing props...place in state so we can update it...use filter if none clicked display all
}

  isFreeOrPaid = (bookType) => {
    //filter to find one that matches...and update state
    this.setState({
      
    })
  }

  // onChange updates filter in state
  // add filter in render previous to map

  // &printType=${printType}&filter=${bookType}
  handleClick = (userInput, printType, bookType) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${userInput}&key=AIzaSyCUlfp8xopsPwMu2CAv3xcxt_wADYP_n1c`;
    //GET https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=yourAPIKey
    const options = {
      method: 'GET',
      headers: {
        // 'Authorization': '',
        'Content-Type': 'application/json'
      }
    };
    fetch(url, options)
    .then(res => {
      if(!res.ok) {
        throw new Error('Something went wrong, please try again.');
      }
      return res;
    })
    .then(res => res.json())
    .then(data => {
      //view and construct desired endpoints in console
      console.log(data)
      this.setState({
        books: data.items
      });
    })
    .catch(err => {
      this.setState({
        error: err.message
      });
    })
  }

  
  //methods
  render(){
    return(
      <>
        <SearchBar bookType={this.state.bookType} title={this.state.title} titleChanged={this.updateTitle} handleClick={this.handleClick}/>
        <BookResult books={this.state.books} author={this.updateAuthor} price={this.updatePrice} description={this.updateDescription}/>
      </>
    )
  }
  
}

/*

Initialize what to expect in state

Steps to create a controlled input:
create onChange handler to create a controlled input
-onChange, value, name of property (must match name in state)
pass handler down to desired component
Creating a submit handler:
grab value of what user inputs
created click event handler that takes in prop passed to grab our input value
*/

export default App;

//https://gomakethings.com/how-to-use-the-fetch-method-to-make-multiple-api-calls-with-vanilla-javascript/
//create method for handlers 
//pass handlers as props
//invoke handlers on desired elements
//find endpoints, test in postman then do fetch call Google API 
