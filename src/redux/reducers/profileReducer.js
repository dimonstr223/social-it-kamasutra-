const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'
const ADD_POST = 'ADD_POST'

const initialState = {
	posts: [{ id: 1, message: 'Wussap baby. Want some chill? ^_^' }],
	newPostText: '',
}

const profileReducer = (state = initialState, action) => {
	const stateCopy = { ...state }
	switch (action.type) {
		case UPDATE_POST_TEXT:
			stateCopy.newPostText = action.postText
			return stateCopy

		case ADD_POST:
			const newPost = {
				id: 2,
				message: state.newPostText,
			}
			stateCopy.posts.push(newPost)
			stateCopy.newPostText = ''
			return stateCopy

		default:
			return state
	}
}

export const updatePostTextCreator = postText => ({
	type: UPDATE_POST_TEXT,
	postText,
})
export const addPostCreator = () => ({ type: ADD_POST })

export default profileReducer
