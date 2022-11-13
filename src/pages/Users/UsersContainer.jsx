import React from 'react'
import { connect } from 'react-redux'
import Users from '.'
import Preloader from '../../components/common/preloader'
import {
	follow,
	unfollow,
	setCurrentPage,
	setTotalUsersCount,
	setUsers,
	toggleFetching,
	toggleFollowingFetching,
	getUsers,
} from '../../redux/reducers/usersReducer'

class UsersContainer extends React.Component {
	componentDidMount = () => {
		this.props.getUsers(this.props.pageSize, this.props.currentPage)
	}

	onClickPage = pageNumber => {
		this.props.setCurrentPage(pageNumber)
		this.props.getUsers(this.props.pageSize, pageNumber)
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
})

export default connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setTotalUsersCount,
	setCurrentPage,
	toggleFetching,
	toggleFollowingFetching,
	getUsers,
})(UsersContainer)
