import { profileAPI } from '../../api/api'

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'

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
		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter(post => post.id !== action.postId),
			}
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
export const deletePost = postId => ({ type: DELETE_POST, postId })
const setStatus = status => ({ type: SET_STATUS, status })

// THUNK-CREATORS
export const getUserProfile = iserId => async dispatch => {
	const { data } = await profileAPI.getProfile(iserId)
	dispatch(setUserProfile(data))
}
export const getStatus = userId => async dispatch => {
	const { data } = await profileAPI.getStatus(userId)
	dispatch(setStatus(data))
}
export const updateStatus = status => async dispatch => {
	const { data } = await profileAPI.updateStatus(status)
	if (data.resultCode === 0) {
		dispatch(setStatus(status))
	}
}

export default profileReducer
