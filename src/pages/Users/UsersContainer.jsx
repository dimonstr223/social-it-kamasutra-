import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import Users from '.'
import {
	followAC,
	setCurrentPageAC,
	setTotalUsersCountAC,
	setUsersAC,
	unfollowAC,
} from '../../redux/reducers/usersReducer'

class UsersContainer extends React.Component {
	componentDidMount = () => {
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
			)
			.then(res => {
				this.props.setUsers(res.data.items)
				this.props.setTotalUsersCount(res.data.totalCount)
			})
	}

	onClickPage = pageNumber => {
		this.props.setCurrentPage(pageNumber)
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`
			)
			.then(res => this.props.setUsers(res.data.items))
	}

	render() {
		return (
			<Users
				users={this.props.users}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				totalUsersCount={this.props.totalUsersCount}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
				onClickPage={this.onClickPage}
			/>
		)
	}
}

// Connect Container Component
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
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
