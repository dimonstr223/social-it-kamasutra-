import { profileAPI } from '../../api/api'

const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'
const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

const initialState = {
	posts: [{ id: 1, message: 'Wussap baby. Want some chill? ^_^' }],
	newPostText: '',
	userProfile: null,
	status: '',
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_POST_TEXT:
			return { ...state, newPostText: action.postText }

		case ADD_POST:
			const newPost = {
				id: 2,
				message: state.newPostText,
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
export const updatePostTextCreator = postText => ({
	type: UPDATE_POST_TEXT,
	postText,
})
export const addPostCreator = () => ({ type: ADD_POST })
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
