export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = modal => {
  return {
    type: OPEN_MODAL,
    modal
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

export const openModalShow = bookId => {
  return {
    type: OPEN_MODAL_SHOW,
    modal: 'book',
    bookId
  }
}
