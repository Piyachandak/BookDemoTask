import {
    GETBOOKS_PROGRESS,
    GETBOOKS_SUCCESS,
    GETBOOKS_FAIL
} from "../ActionConstant";

import RestUtil from '../../Src/Util/RestUtil';
import { BOOKURL } from "../../Src/Util/Config";

export function getbooks(search, cat) {
    const URL = BOOKURL + "?q=" + search + "&subject:" + cat + "&startIndex=" + 0 + "&maxResults=" + 30;
    // console.log(URL)
    return (dispatch) => {
        dispatch(bookDispatch({}, GETBOOKS_PROGRESS))
        RestUtil(URL, {})
            .then((response) => response.json())
            .then((responseData) => {
                // console.log("Book List", responseData.items);
                dispatch(bookDispatch(responseData.items, GETBOOKS_SUCCESS))
            }).catch((error) => {
                // console.log("Book list fail", error);
                dispatch(bookDispatch(error, GETBOOKS_FAIL))
            });
    }
}

const bookDispatch = (data, actionType) => {
    return {
        payload: data,
        type: actionType
    }
}