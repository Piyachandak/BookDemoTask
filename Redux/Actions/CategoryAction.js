import {
    GETCATEGORY_PROGRESS,
    GETCATEGORY_SUCCESS,
    GETCATEGORY_FAIL
} from "../ActionConstant";

import RestUtil from '../../Src/Util/RestUtil';
import { CATEGORYURL } from "../../Src/Util/Config";

export function getCatgoryList() {
    return (dispatch) => {
        dispatch(categoryDispatch({}, GETCATEGORY_PROGRESS))
        RestUtil(CATEGORYURL, {})
            .then((response) => response.json())
            .then((responseData) => {
                //console.log("Category List", responseData.items);
                dispatch(categoryDispatch(responseData.items, GETCATEGORY_SUCCESS))
            }).catch((error) => {
                // console.log("Category list fail", error);
                dispatch(categoryDispatch(error, GETCATEGORY_FAIL))
            });
    }
}

const categoryDispatch = (data, actionType) => {
    return {
        payload: data,
        type: actionType
    }
}