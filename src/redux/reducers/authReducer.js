import { authAPI } from '../../api/api'

const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
	id: null,
	login: null,
	email: null,
	isAuth: false,
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payload,
			}

		default:
			return state
	}
}

const setAuthUserData = (id, login, email, isAuth) => ({
	type: SET_USER_DATA,
	payload: { id, login, email, isAuth },
})

export const getAuthUserData = () => dispatch => {
	authAPI.me().then(data => {
		if (data.resultCode === 0) {
			const { id, login, email } = data.data
			dispatch(setAuthUserData(id, login, email, true))
		}
	})
}
export const login = (email, password, rememberMe) => dispatch => {
	authAPI.login(email, password, rememberMe).then(data => {
		if (data.resultCode === 0) {
			dispatch(getAuthUserData())
		}
	})
}
export const logout = () => dispatch => {
	authAPI.logout().then(data => {
		if (data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false))
		}
	})
}

export default authReducer
