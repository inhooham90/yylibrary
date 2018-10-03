import React from 'react';
import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    currentUser:state.entities.users[state.session.currentUserId]
   };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))

})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
