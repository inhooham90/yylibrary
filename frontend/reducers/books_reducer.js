import {
  RECEIVE_ALL_BOOKS,
  RECEIVE_BOOK,
  REMOVE_BOOK,
} from '../actions/book_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const BooksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_BOOKS:
      return merge({}, action.books);
    case RECEIVE_BOOK:
      return merge({}, oldState, {[action.book.id]: action.book});
    case REMOVE_BOOK:
      let newState = merge({}, oldState);
      delete newState[action.bookId];
      return newState;
    case RECEIVE_USER:
      return merge({}, action.books);
    default:
      return oldState;
  }
};

export default BooksReducer;
