import * as actions from './actionType';

export const createModal = dispatch => imagen =>{
    dispatch({
        type: actions.OPEN_MODAL,
        payload: imagen
    });
};

export const closeModal = dispatch =>  {
    dispatch({
        type: actions.CLOSE_MODAL,
        payload: null
    });
};

