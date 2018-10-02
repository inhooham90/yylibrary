import React from 'react';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';

class BookIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(

      <li className='index-items'>
        <ul className='index-item-info'>
          <img src={`${this.props.book.cover_url}`} />
          <li>{this.props.book.title}</li>
          <li>{this.props.book.author}</li>
          <li>{this.props.book.year}</li>
          <li>{this.props.book.description}</li>
        </ul>
      </li>);
  }
}

export default BookIndexItem;
// onClick={() => this.props.openModalShow(this.props.book.id)}
