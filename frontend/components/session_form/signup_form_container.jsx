import React from 'react';
import { connect } from 'react-redux';
import SignUpForm from './signup_form';
import { signup, receiveNoErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    currentUser: state.session.currentUserId
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(receiveNoErrors()),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
