import * as actions from '../actions/actionType';

export default (
    state = {
        modal: false,
    },
    action
) => {
    switch(action.type){
        case actions.OPEN_MODAL:
        return {
            ...state,
            modal: action.payload
        };
        case actions.CLOSE_MODAL:
        return{
            ...state,
            modal: false
        }
        default:
            return {...state};
    }
};




