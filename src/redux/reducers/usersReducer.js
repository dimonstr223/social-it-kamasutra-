import { followAPI, usersAPI } from '../../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'
const TOGGLE_FOLLOWING_FETCHING = 'TOGGLE_FOLLOWING_FETCHING'

const initialState = {
	users: [],
	pageSize: 10,
	currentPage: 1,
	totalUsersCount: 0,
	isFetching: true,
	followingUserId: [],
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return { ...user, followed: true }
					}
					return user
				}),
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return { ...user, followed: false }
					}
					return user
				}),
			}
		case SET_USERS:
			return {
				...state,
				users: action.users,
			}
		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalUsersCount: action.totalUsersCount,
			}
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage,
			}
		case TOGGLE_FETCHING:
			return {
				...state,
				isFetching: action.isFetching,
			}
		case TOGGLE_FOLLOWING_FETCHING:
			return {
				...state,
				followingUserId: action.isFetching
					? [...state.followingUserId, action.userId]
					: state.followingUserId.filter(id => id !== action.userId),
			}
		default:
			return state
	}
}

export const followSuccess = userId => ({ type: FOLLOW, userId })
export const unfollowSuccess = userId => ({ type: UNFOLLOW, userId })
export const setUsers = users => ({ type: SET_USERS, users })
export const setTotalUsersCount = totalUsersCount => ({
	type: SET_TOTAL_USERS_COUNT,
	totalUsersCount,
})
export const setCurrentPage = currentPage => ({
	type: SET_CURRENT_PAGE,
	currentPage,
})
export const toggleFetching = isFetching => ({
	type: TOGGLE_FETCHING,
	isFetching,
})
export const toggleFollowingFetching = (isFetching, userId) => ({
	type: TOGGLE_FOLLOWING_FETCHING,
	isFetching,
	userId,
})

export const getUsers = (pageSize, currentPage) => {
	return dispatch => {
		dispatch(toggleFetching(true))
		usersAPI.getUsers(pageSize, currentPage).then(data => {
			dispatch(toggleFetching(false))
			dispatch(setUsers(data.items))
			dispatch(setTotalUsersCount(data.totalCount))
		})
	}
}
export const unfollow = userId => dispatch => {
	dispatch(toggleFollowingFetching(true, userId))
	followAPI.unfollow(userId).then(data => {
		if (data.resultCode === 0) {
			dispatch(unfollowSuccess(userId))
		}
		dispatch(toggleFollowingFetching(false, userId))
	})
}

export const follow = userId => {
	return dispatch => {
		dispatch(toggleFollowingFetching(true, userId))
		followAPI.follow(userId).then(data => {
			if (data.resultCode === 0) {
				dispatch(followSuccess(userId))
			}
			dispatch(toggleFollowingFetching(false, userId))
		})
	}
}

export default usersReducer
