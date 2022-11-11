import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': '3d2f3662-a805-4a0b-9573-b2311e11ccc1',
	},
})

export const usersAPI = {
	getUsers: (pageSize, currentPage) => {
		return instance
			.get(`users?count=${pageSize}&page=${currentPage}`)
			.then(res => res.data)
	},
}

export const followAPI = {
	follow: id => {
		return instance.post(`follow/${id}`).then(res => res.data)
	},

	unfollow: id => {
		return instance.delete(`follow/${id}`).then(res => res.data)
	},
}
