import React from 'react';
import { Link } from 'react-router-dom';
import BookIndexItem from './book_index_item';
import BookUploadContainer from './book_form_container';

class BookIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {activateProfileDrop: false};
    this.openProfile = this.openProfile.bind(this);
    this.closeProfile = this.closeProfile.bind(this);
  }

  componentWillMount(){
    this.props.fetchBooks();
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }

  openProfile () {
    this.setState({activateProfileDrop: true})
  }

  closeProfile () {
    this.setState({activateProfileDrop: false})
  }

  render() {
    let toggle;
    if (this.state.activateProfileDrop === true) {
      toggle = 'drop-down';
    } else {
      toggle = 'drop-down-closed';
    };

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

      return (
        <div className='book-index-wrap'>
          <header className="header">
            <nav className="header-nav">

              <ul className="header-list">
                <li><Link className='logo' to='/'>Logo Here</Link></li>
                <li>Discover</li>
                <li>About</li>
              </ul>

              <ul className="header-drop-down">
                <li
                  onMouseEnter={this.openProfile}
                  onMouseLeave={this.closeProfile}>
                  <ul className='drop-down-child'>
                    <li>
                      <ul
                        onMouseEnter={this.openProfile}
                        onMouseLeave={this.closeProfile}
                        className={toggle}>
                        <li>
                          drop down 1
                        </li>

                        <li onClick={this.handleClick}>Log out</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li onClick={() => this.props.openModal('upload')}>
                  Upload
                </li>

              </ul>
            </nav>
          </header>
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
