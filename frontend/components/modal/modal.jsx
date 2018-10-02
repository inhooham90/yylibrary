import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
// import ProfileUpdateContainer from '../profile/profile_update_container';
import BookFormContainer from '../books/book_form_container';

function Modal({ modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'signin':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'upload':
      component = <BookFormContainer />;
      break;
    // case 'photo':
    //   component = <BookShowContainer />;
    //   break;
    // case 'profile':
    //   component = <ProfileUpdateContainer />;
    //   break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
