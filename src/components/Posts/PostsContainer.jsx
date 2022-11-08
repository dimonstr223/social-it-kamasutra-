import { connect } from 'react-redux'

import Posts from '.'
import {
	addPostCreator,
	updatePostTextCreator,
} from '../../redux/reducers/profileReducer'

const mapStateToProps = state => ({
	profilePage: state.profilePage,
})

const mapDispatchToProps = dispatch => ({
	onPostChange: text => {
		const action = updatePostTextCreator(text)
		dispatch(action)
	},

	onAddPost: () => {
		const action = addPostCreator()
		dispatch(action)
	},
})

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer
