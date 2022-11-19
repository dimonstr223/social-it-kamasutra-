import { followAPI, usersAPI } from '../../api/api'
import { updateObjectInArray } from '../../utils/objectHelpers'

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
				users: updateObjectInArray(state.users, 'id', action.userId, {
					followed: true,
				}),
			}
		case UNFOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, 'id', action.userId, {
					followed: false,
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
				currentPage: action.page,
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

const followSuccess = userId => ({ type: FOLLOW, userId })
const unfollowSuccess = userId => ({ type: UNFOLLOW, userId })
const setUsers = users => ({ type: SET_USERS, users })
const setTotalUsersCount = totalUsersCount => ({
	type: SET_TOTAL_USERS_COUNT,
	totalUsersCount,
})
export const setCurrentPage = page => ({
	type: SET_CURRENT_PAGE,
	page,
})
const toggleFetching = isFetching => ({
	type: TOGGLE_FETCHING,
	isFetching,
})
const toggleFollowingFetching = (isFetching, userId) => ({
	type: TOGGLE_FOLLOWING_FETCHING,
	isFetching,
	userId,
})

export const fetchUsers = (pageSize, page) => async dispatch => {
	dispatch(toggleFetching(true))
	const { data } = await usersAPI.getUsers(pageSize, page)
	dispatch(setUsers(data.items))
	dispatch(setTotalUsersCount(data.totalCount))
	dispatch(toggleFetching(false))
}

const followUnfollowFlow = async (
	dispatch,
	userId,
	apiMethod,
	actionCreator
) => {
	dispatch(toggleFollowingFetching(true, userId))
	const { data } = await apiMethod(userId)
	if (data.resultCode === 0) {
		dispatch(actionCreator(userId))
	}
	dispatch(toggleFollowingFetching(false, userId))
}

export const unfollow = userId => async dispatch => {
	followUnfollowFlow(
		dispatch,
		userId,
		followAPI.unfollow.bind(followAPI),
		unfollowSuccess
	)
}
export const follow = userId => async dispatch => {
	followUnfollowFlow(
		dispatch,
		userId,
		followAPI.follow.bind(followAPI),
		followSuccess
	)
}

export default usersReducer
