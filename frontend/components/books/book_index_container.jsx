import { connect } from 'react-redux';
import BookIndex from './book_index';
import {
  fetchBook,
  fetchBooks,
  receiveErrors,
  receiveNoErrors,
} from '../../actions/book_actions';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
// , openModalShow


const mapStateToProps = (state) => {
  return {
    currentUserId: state.session.currentUserId,
    errors: state.errors,
    books: Object.values(state.entities.books),
    users: state.entities.users,
  };
};

const mapDispatchToProps = (dispatch) => ({
  // fetchBook: (id) => dispatch(fetchBook(id)),
  fetchBooks: () => dispatch(fetchBooks()),
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  // openModalShow: book => dispatch(openModalShow(book)),
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookIndex);
