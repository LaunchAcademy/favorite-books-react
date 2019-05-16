import React, {Component} from "react"

class BookForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ""
    }
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.onAddNewBook(this.state)
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value})
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <h3>Add a new Book</h3>
      <div>
        <label>Title</label>
        <input 
          type="text" 
          name="title" 
          onChange={this.handleTitleChange} 
          value={this.state.title} />
      </div>
      <div>
        <input type="submit" value="Add Book" />
      </div>
    </form>
  }
}

export default BookForm