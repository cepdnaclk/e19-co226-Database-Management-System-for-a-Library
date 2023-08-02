import React, { Component } from 'react';

class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookTitle: "",
    };
  }

  handleSearch = (event) => {
    this.setState({ bookTitle: event.target.value });
  };

  handleSelectBook = (event) => {
    const selectedBookId = event.target.value;
    const selectedBook = this.props.books.find(br => br.bookId === parseInt(selectedBookId));
    this.setState({ bookTitle: selectedBook ? selectedBook.bookTitle : "" });
    // You can handle what happens when a book is selected here, like updating the selected book in the parent component.
    console.log("Selected book ID:", selectedBookId);
  };

  render() {
    const { bookTitle } = this.state;
    const { books } = this.props;

    const filteredBooks = books.filter(br =>
      br.bookTitle.toLowerCase().includes(bookTitle.toLowerCase())
    );

    return (
      <div>
        <span className="input-group-text col">Book</span>
        <input
          type="text"
          value={bookTitle}
          onChange={this.handleSearch}
          className="form-control"
          placeholder="Search for a book..."
        />
        {filteredBooks.length > 0 && (
          <select
            className="form-select"
            onChange={this.handleSelectBook}
            value=""
          >
            <option value="" hidden>Select a book</option>
            {filteredBooks.map(br => (
              <option key={br.bookId} value={br.bookId}>{br.bookTitle}</option>
            ))}
          </select>
        )}
      </div>
    );
  }
}

export default BookSearch;
