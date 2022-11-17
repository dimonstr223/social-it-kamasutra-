import { createSelector } from 'reselect'

const getUsersSelector = state => state.usersPage.users
export const getUsers = createSelector(getUsersSelector, users => users)
export const getPageSize = state => state.usersPage.pageSize
export const getCurrentPage = state => state.usersPage.currentPage
export const getTotalUsersCount = state => state.usersPage.totalUsersCount
export const getIsFetchint = state => state.usersPage.isFetching
export const getFollowingUserId = state => state.usersPage.followingUserId
export const getIsAuth = state => state.auth.isAuth
