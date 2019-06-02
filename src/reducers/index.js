import { combineReducers } from 'redux';
import signInReducer from './signInReducer'
import signUpReducer from './signUpReducer'
import { reducer as reduxFormReducer } from 'redux-form';

const reducer = combineReducers({
	form: reduxFormReducer,
	signInReducer,
	signUpReducer
})

export default reducer