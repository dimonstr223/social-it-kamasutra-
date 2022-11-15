import { profileAPI } from '../../api/api'

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

const initialState = {
	posts: [{ id: 1, message: 'Wussap baby. Want some chill? ^_^' }],
	userProfile: null,
	status: '',
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			const newPost = {
				id: 2,
				message: action.newPostText,
			}
			return { ...state, posts: [...state.posts, newPost], newPostText: '' }

		case SET_USER_PROFILE:
			return {
				...state,
				userProfile: action.userProfile,
			}
		case SET_STATUS:
			return {
				...state,
				status: action.status,
			}
		default:
			return state
	}
}

// ACTION-CREATORS
export const addPost = newPostText => ({ type: ADD_POST, newPostText })
const setUserProfile = userProfile => ({
	type: SET_USER_PROFILE,
	userProfile,
})
const setStatus = status => ({ type: SET_STATUS, status })

// THUNK-CREATORS
export const getUserProfile = iserId => dispatch => {
	profileAPI.getProfile(iserId).then(data => dispatch(setUserProfile(data)))
}
export const getStatus = userId => dispatch => {
	profileAPI.getStatus(userId).then(data => dispatch(setStatus(data)))
}
export const updateStatus = status => dispatch => {
	profileAPI.updateStatus(status).then(data => {
		if (data.resultCode === 0) {
			dispatch(setStatus(status))
		}
	})
}

export default profileReducer
