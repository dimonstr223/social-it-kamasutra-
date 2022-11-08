import React from 'react'
import Posts from '.'
import {
	addPostCreator,
	updatePostTextCreator,
} from '../../redux/reducers/profileReducer'
import StoreContext from '../../redux/StoreContext'

const PostsContainer = () => {
	const store = React.useContext(StoreContext)
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
