import { combineReducers } from 'redux';
import signInReducer from './signInReducer'
import signUpReducer from './signUpReducer'
import postReducer from './postReducer'
import { reducer as reduxFormReducer } from 'redux-form';

const reducer = combineReducers({
	form: reduxFormReducer,
	signInReducer,
	signUpReducer,
	postReducer,
})

export default reducer