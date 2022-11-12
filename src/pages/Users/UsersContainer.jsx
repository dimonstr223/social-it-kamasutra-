import React from 'react'
import { connect } from 'react-redux'
import Users from '.'
import { usersAPI } from '../../api/api'
import Preloader from '../../components/common/preloader'
import {
	follow,
	unfollow,
	setCurrentPage,
	setTotalUsersCount,
	setUsers,
	toggleFetching,
	toggleFollowingFetching,
} from '../../redux/reducers/usersReducer'

class UsersContainer extends React.Component {
	componentDidMount = () => {
		this.props.toggleFetching(true)
		usersAPI
			.getUsers(this.props.pageSize, this.props.currentPage)
			.then(data => {
				this.props.toggleFetching(false)
				this.props.setUsers(data.items)
				this.props.setTotalUsersCount(data.totalCount)
			})
	}

	onClickPage = pageNumber => {
		this.props.setCurrentPage(pageNumber)
		this.props.toggleFetching(true)
		usersAPI.getUsers(this.props.pageSize, pageNumber).then(data => {
			this.props.toggleFetching(false)
			this.props.setUsers(data.items)
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
					followingUserId={this.props.followingUserId}
					toggleFollowingFetching={this.props.toggleFollowingFetching}
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
	followingUserId: state.usersPage.followingUserId,
	toggleFollowingFetching: state.usersPage.toggleFollowingFetching,
})

export default connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setTotalUsersCount,
	setCurrentPage,
	toggleFetching,
	toggleFollowingFetching,
})(UsersContainer)
