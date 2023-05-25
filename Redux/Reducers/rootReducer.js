import { combineReducers } from 'redux'
import BookReducer from './BookReducer'
import CategoryReducer from './CategoryReducer'

const rootReducer = combineReducers({
    BookReducer: BookReducer,
    CategoryReducer: CategoryReducer
})
export default rootReducer; 