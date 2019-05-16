import React, {Component} from "react"
import BookList from "./BookList"
import BookForm from "./BookForm"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }

    this.addNewBook = this.addNewBook.bind(this)
  }

  componentDidMount() {
    fetch("/api/v1/books.json").then((resp) => {
      if(resp.ok) {
        return resp.json()
      }
      else{
        throw new Error(resp.text())
      }
    }).
    then(books => {
      this.setState({books: books})
    })
  }

  addNewBook(book) {
    fetch("/api/v1/books.json", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      credentials: "same-origin",
      body: JSON.stringify(book)
    }).then((result) => {
      //result is what comes back from the server.js {title: 'name'}
      return result.json()
    }).then((book) => {
      this.setState({
        books: [...this.state.books, book]
        // books: this.state.books.concat(book)
      })
    })
  }

  render() {
    return (
      <div>
        <BookList books={this.state.books} />
        <BookForm onAddNewBook={this.addNewBook} />
      </div>
    )
  }
}

export default App