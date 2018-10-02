import React from 'react';
import { connect } from 'react-redux';
import {createBook, receiveNoErrors } from '../../actions/book_actions';
import BookForm from './book_form';
import { closeModal } from '../../actions/modal_actions';


const mapStateToProps = state => {
  return {
    currentUserId: state.session.currentUserId,
    errors: state.errors.upload,
    books: Object.values(state.entities.books)
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    action: book => dispatch(createBook(book)),
    clearErrors: () => dispatch(receiveNoErrors()),
    closeModal: () => dispatch(closeModal())
  })
};


export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
