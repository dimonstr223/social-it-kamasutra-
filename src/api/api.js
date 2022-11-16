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
		instance
			.get(`users?count=${pageSize}&page=${currentPage}`)
			.then(res => res.data),
}
export const followAPI = {
	follow: id => instance.post(`follow/${id}`).then(res => res.data),
	unfollow: id => instance.delete(`follow/${id}`).then(res => res.data),
}
export const authAPI = {
	me: () => instance.get(`auth/me`).then(res => res.data),

	login: (email, password, rememberMe) =>
		instance
			.post('auth/login', { email, password, rememberMe })
			.then(res => res.data),

	logout: () => instance.delete('auth/login').then(res => res.data),
}
export const profileAPI = {
	getProfile: userId => instance.get(`profile/${userId}`).then(res => res.data),
	getStatus: userId =>
		instance.get(`profile/status/${userId}`).then(res => res.data),
	updateStatus: status =>
		instance.put(`profile/status`, { status: status }).then(res => res.data),
}
