import profileReducer, { addPost, deletePost } from './profileReducer'

const state = {
	posts: [{ id: 1, message: 'Wussap baby. Want some chill? ^_^' }],
}

it('posts length should be incremented', () => {
	//test data
	const action = addPost('text to testing')

	//action
	const newState = profileReducer(state, action)
	//expectation
	expect(newState.posts.length).toBe(2)
})

it('new post message should be correct', () => {
	const action = addPost('test')
	const newState = profileReducer(state, action)
	expect(newState.posts[1].message).toBe('test')
})

it('posts length should be decrement', () => {
	const action = deletePost(1)
	const newState = profileReducer(state, action)
	expect(newState.posts.length).toBe(0)
})
