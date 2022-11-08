import React from 'react'
import Posts from '.'
import {
	addPostCreator,
	updatePostTextCreator,
} from '../../redux/reducers/profileReducer'

const PostsContainer = ({ store }) => {
	const state = store.getState()

	const onPostChange = text => {
		const action = updatePostTextCreator(text)
		store.dispatch(action)
	}

	const onAddPost = () => {
		const action = addPostCreator()
		store.dispatch(action)
	}

	return (
		<Posts
			updatePostText={onPostChange}
			addPost={onAddPost}
			profilePage={state.profilePage}
		/>
	)
}

export default PostsContainer
