import thunk from 'redux-thunk'
import {
	applyMiddleware,
	combineReducers,
	legacy_createStore as createStore,
} from 'redux'

import profileReducer from './reducers/profileReducer'
import dialogsReducer from './reducers/dialogsReducer'
import sidebarReducer from './reducers/sidebarReducer'
import usersReducer from './reducers/usersReducer'
import authReducer from './reducers/authReducer'

const reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	auth: authReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

window.store = store
export default store
