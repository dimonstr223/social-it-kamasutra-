import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Users from '.'
import Preloader from '../../components/common/preloader'
import whithAuthNavigate from '../../hoc/whithAuthNavigate'
import {
	follow,
	unfollow,
	setCurrentPage,
	fetchUsers,
} from '../../redux/reducers/usersReducer'
import {
	getCurrentPage,
	getFollowingUserId,
	getIsAuth,
	getIsFetchint,
	getPageSize,
	getTotalUsersCount,
	getUsers,
} from '../../redux/selectors/selectors'

class UsersContainer extends React.Component {
	componentDidMount = () => {
		this.props.fetchUsers(this.props.pageSize, this.props.currentPage)
	}

	onClickPage = pageNumber => {
		this.props.setCurrentPage(pageNumber)
		this.props.fetchUsers(this.props.pageSize, pageNumber)
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
				/>
			</>
		)
	}
}

// Connect Container Component
const mapStateToProps = state => ({
	users: getUsers(state),
	pageSize: getPageSize(state),
	currentPage: getCurrentPage(state),
	totalUsersCount: getTotalUsersCount(state),
	isFetching: getIsFetchint(state),
	followingUserId: getFollowingUserId(state),
	isAuth: getIsAuth(state),
})

export default compose(
	whithAuthNavigate,
	connect(mapStateToProps, {
		follow,
		unfollow,
		setCurrentPage,
		fetchUsers,
	})
)(UsersContainer)
