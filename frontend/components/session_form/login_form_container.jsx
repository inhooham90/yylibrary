import React from 'react';
import { connect } from 'react-redux';
import LogInForm from './login_form';
import { login, receiveNoErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    currentUser: state.session.currentUserId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(receiveNoErrors()),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
