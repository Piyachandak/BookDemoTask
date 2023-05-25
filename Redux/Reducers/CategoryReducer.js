import {
   GETCATEGORY_PROGRESS,
   GETCATEGORY_SUCCESS,
   GETCATEGORY_FAIL
} from "../ActionConstant";

const initalState = {
    isLoading: false,
    categoryResponse: []
}

const CategoryReducer = (state = initalState, action) => {
    //console.log("CategoryReducer", action);
    switch (action.type) {
        case GETCATEGORY_PROGRESS:
            return {
                ...state,
                isLoading: true
            };
        case GETCATEGORY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                categoryResponse: action.payload
            };
        case GETCATEGORY_FAIL:
            return {
                ...state,
                isLoading: false,
                categoryResponse: action.payload
            }
        default:
            return state;
    }
}

export default CategoryReducer;