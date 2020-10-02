import React from 'react'

export default function SearchBar(props) {
  return (
    <div>
      <label>Search: </label>
      <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={props.title}
            onChange={e => props.titleChanged(e.target.value)}/>
      <div>
        <label>Print Type: </label>
        <select>
          <option>All</option>
        </select>
        <label>Book Type: </label>
        <select id="bookType" onChange={e => props.isFreeOrPaid(e)}>
          <option>All</option>
          <option>Free-Ebook</option>
          <option>Paid-E-Book</option>
        </select>
      </div>
      <button onClick={()=> props.handleClick(props.title)}>Search</button>
    </div>
  )
}

//state of printType and bookType are being saved and kept track of options selected create handlers
//passing printType and bookType selection into the submit handler
//make sure fetch request is utilizing the new parameters
