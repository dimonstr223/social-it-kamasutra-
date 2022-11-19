import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': '45c3db26-6152-4637-be60-94fe3f80ad0c',
	},
})

export const usersAPI = {
	getUsers: (pageSize, currentPage) =>
		instance.get(`users?count=${pageSize}&page=${currentPage}`),
}
export const followAPI = {
	follow: id => instance.post(`follow/${id}`),
	unfollow: id => instance.delete(`follow/${id}`),
}
export const authAPI = {
	me: () => instance.get(`auth/me`),

	login: (email, password, rememberMe) =>
		instance.post('auth/login', { email, password, rememberMe }),

	logout: () => instance.delete('auth/login'),
}
export const profileAPI = {
	getProfile: userId => instance.get(`profile/${userId}`),
	getStatus: userId => instance.get(`profile/status/${userId}`),
	updateStatus: status => instance.put(`profile/status`, { status: status }),
}
