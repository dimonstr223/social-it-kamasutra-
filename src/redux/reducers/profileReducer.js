const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'
const ADD_POST = 'ADD_POST'

const initialState = {
	posts: [{ id: 1, message: 'Wussap baby. Want some chill? ^_^' }],
	newPostText: '',
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_POST_TEXT:
			state.newPostText = action.postText
			return state

		case ADD_POST:
			const newPost = {
				id: 2,
				message: state.newPostText,
			}
			state.posts.push(newPost)
			state.newPostText = ''
			return state

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
