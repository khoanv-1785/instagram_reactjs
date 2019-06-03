import { combineReducers } from 'redux';
import signInReducer from './signInReducer'
import signUpReducer from './signUpReducer'
import { reducer as reduxFormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux'

const reducer = combineReducers({
	form: reduxFormReducer,
	routing: routerReducer,
	signInReducer,
	signUpReducer
})

export default reducer