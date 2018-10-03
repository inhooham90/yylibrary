import React from 'react';
import { Link } from 'react-router-dom';
import BookIndexItem from './book_index_item';
import BookUploadContainer from './book_form_container';

class BookIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.fetchBooks();
  }


  render() {

    const bookitems = this.props.books.map((book, key) => {
      return (
        <BookIndexItem
          book={book}
          currentUserId={this.props.currentUserId}
          key={key}
          />
      );
    }
  );

  let upload;
  if (this.props.admin) {
    upload = (<li onClick={() => this.props.openModal('upload')} className="new-button">
      Upload
    </li>)
  }
      return (
        <div className="main-div">
          <h1 className="page-title"> Books </h1>
          <ul className="book-index">
            <ul className="index-side">
              {upload}
            </ul>
            <ul className="index-main">
              {bookitems}
            </ul>
          </ul>
        </div>
      )
  }
}

export default BookIndex;

// below header
// div>
//   ul className='index-list'>
//     {bookitems}
//   /ul>
//  /div>


// user={this.props.users[book.artist_id]}
// openModalShow={this.props.openModalShow}
// fetchUser={this.props.fetchUser}
