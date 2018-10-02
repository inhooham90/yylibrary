import * as BookApiUtil from '../util/book_api_util';

export const RECEIVE_ALL_BOOKS = "RECEIVE_ALL_BOOKS";
export const RECEIVE_BOOK = "RECEIVE_BOOK";
export const REMOVE_BOOK = "REMOVE_BOOK";
export const RECEIVE_UPLOAD_ERRORS = 'RECEIVE_UPLOAD_ERRORS';
export const RECEIVE_NO_ERRORS = 'RECEIVE_NO_ERRORS';

export const fetchBooks = () => dispatch => (
  BookApiUtil.fetchBooks().then(payload => dispatch(receiveAllBooks(payload)))
);

export const fetchBook = id => dispatch => (
  BookApiUtil.fetchBook(id).then(book => dispatch(receiveBook(book)))
);


export const createBook = book => {
  return dispatch => {
    return BookApiUtil.createBook(book).then(book => {
      return dispatch(receiveBook(book));
    }, errors => {
      return dispatch(receiveErrors(errors.responseJSON));
    });
  };
};


export const updateBook = book => {
  return dispatch => {
    return BookApiUtil.updateBook(book).then(book => {
      return dispatch(receiveBook(book));
    }
    // , errors => {
    //   return dispatch(receiveErrors(errors.responseJSON));
    // }
  );
  };
};

export const deleteBook = bookId => {
  return dispatch => {
    return BookApiUtil.deleteBook(bookId).then(book => {
      return dispatch(removeBook(bookId));
    });
  };
};

export const receiveAllBooks = payload => ({
  type: RECEIVE_ALL_BOOKS,
  books: payload.books,
  users: payload.users
});

export const receiveBook = book => ({
  type: RECEIVE_BOOK,
  book
});

export const removeBook = bookId => ({
  type: REMOVE_BOOK,
  bookId
});

export const receiveNoErrors = () => {
  return {
    type: RECEIVE_NO_ERRORS,
  };
};

function receiveErrors(errors) {
  return {
    type: RECEIVE_UPLOAD_ERRORS,
    errors
  };
}
