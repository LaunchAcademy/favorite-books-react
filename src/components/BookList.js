import React from "react"

const BookList = (props) => {
  let id = 0
  const bookListItems = props.books.map(book => {
    id++
    return <li key={id}>{book.title}</li>
  })
  return (
    <ul>
      { bookListItems }
    </ul>
  )
}

export default BookList