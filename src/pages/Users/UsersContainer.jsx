import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import Users from '.'
import Preloader from '../../components/common/preloader'
import {
	followAC,
	setCurrentPageAC,
	setTotalUsersCountAC,
	setUsersAC,
	toggleFetchingAC,
	unfollowAC,
} from '../../redux/reducers/usersReducer'

class UsersContainer extends React.Component {
	componentDidMount = () => {
		this.props.toggleFetching(true)
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
			)
			.then(res => {
				this.props.toggleFetching(false)
				this.props.setUsers(res.data.items)
				this.props.setTotalUsersCount(res.data.totalCount)
			})
	}

	onClickPage = pageNumber => {
		this.props.setCurrentPage(pageNumber)
		this.props.toggleFetching(true)
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`
			)
			.then(res => {
				this.props.toggleFetching(false)
				this.props.setUsers(res.data.items)
			})
	}

	render() {
		return (
			<>
				{this.props.isFetching ? <Preloader /> : null}
				<Users
					users={this.props.users}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					totalUsersCount={this.props.totalUsersCount}
					follow={this.props.follow}
					unfollow={this.props.unfollow}
					onClickPage={this.onClickPage}
					isFetching={this.props.isFetching}
				/>
			</>
		)
	}
}

// Connect Container Component
const mapStateToProps = state => ({
	users: state.usersPage.users,
	pageSize: state.usersPage.pageSize,
	currentPage: state.usersPage.currentPage,
	totalUsersCount: state.usersPage.totalUsersCount,
	isFetching: state.usersPage.isFetching,
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
	toggleFetching: isFetching => {
		dispatch(toggleFetchingAC(isFetching))
	},
})
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
