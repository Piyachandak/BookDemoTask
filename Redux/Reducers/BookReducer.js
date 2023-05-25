import {
    GETBOOKS_PROGRESS,
    GETBOOKS_SUCCESS,
    GETBOOKS_FAIL
} from "../ActionConstant";

const initalState = {
    isLoading: false,
    bookResponse: []
}

const BookReducer = (state = initalState, action) => {
    //console.log("BookReducer", action);
    switch (action.type) {
        case GETBOOKS_PROGRESS:
            return {
                ...state,
                isLoading: true
            };
        case GETBOOKS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                bookResponse: action.payload
            };
        case GETBOOKS_FAIL:
            return {
                ...state,
                isLoading: false,
                bookResponse: action.payload
            }
        default:
            return state;
    }
}

export default BookReducer;