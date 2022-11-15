import { connect } from 'react-redux'

import Posts from '.'
import { addPost } from '../../redux/reducers/profileReducer'

const mapStateToProps = state => ({
	profilePage: state.profilePage,
})

const PostsContainer = connect(mapStateToProps, { addPost })(Posts)

export default PostsContainer
