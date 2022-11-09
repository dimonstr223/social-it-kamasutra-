import { connect } from 'react-redux'
import Users from '.'
import { followAC, unfollowAC } from '../../redux/reducers/usersReducer'

const mapStateToProps = state => ({
	users: state.usersPage.users,
})

const mapDispatchToProps = dispatch => ({
	follow: userId => {
		dispatch(followAC(userId))
	},
	unfollow: userId => {
		dispatch(unfollowAC(userId))
	},
})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
