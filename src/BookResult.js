import React from 'react';

const BookResult = (props) => {
  return (
    props.books.map((book, index) => { 
      const {listPrice} = book.saleInfo;
      const {imageLinks, title, authors} = book.volumeInfo;
      //use dash if no price to avoid previous error if undefined
      let amount = listPrice ? listPrice.amount : '(No Price Listed)';
      let thumbnail = imageLinks ? imageLinks.thumbnail : 'No image found';
      /*<img src="no image found" />
      {thumbnail && <img />} --> { someBoolean && yourTag}*/
      return (
        <div className="bookList">
          <section className="bookListItem" key={index}>
           <img className="imageResult" src={book.volumeInfo.imageLinks.smallThumbnail} alt=""/>
            {/* 'truthy/falsey' if thumbnail is equal to true then create this tag */}
            {thumbnail && <img alt=""/>}
            <div className="bookTitle">{title}</div>
            <div className="bookAuthor">Author: {authors.map(author => {
              return <p>{author}</p>
              //applied practice
            })}</div>
            <div className="bookPrice">Price: ${amount}</div>
            <div className="bookDescription">Description:{book.description}</div>
          </section>
        </div>
      )
    })
  )
};


// 1. need to be able to click on book to display more info/link to purchase...
// 2. add printType and bookType query parameters and filter results accordingly

export default BookResult;
//Create a baselineFeatures document: *ref: Traversy document- Kevin: data types...most used data structures...re: baseline features...'everything wrapped in props'...accessing data from objects and passing data between functions + react fundamentals...Read: react fundamentals breakdown by Kevin
//book?.saleInfo.listPrice.amount