import { connect } from 'react-redux'
import Users from '.'
import {
	followAC,
	setCurrentPageAC,
	setTotalUsersCountAC,
	setUsersAC,
	unfollowAC,
} from '../../redux/reducers/usersReducer'

const mapStateToProps = state => ({
	users: state.usersPage.users,
	pageSize: state.usersPage.pageSize,
	currentPage: state.usersPage.currentPage,
	totalUsersCount: state.usersPage.totalUsersCount,
})

const mapDispatchToProps = dispatch => ({
	follow: userId => {
		dispatch(followAC(userId))
	},
	unfollow: userId => {
		dispatch(unfollowAC(userId))
	},
	setUsers: users => {
		dispatch(setUsersAC(users))
	},
	setTotalUsersCount: totalUsersCount => {
		dispatch(setTotalUsersCountAC(totalUsersCount))
	},
	setCurrentPage: currentPage => {
		dispatch(setCurrentPageAC(currentPage))
	},
})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
