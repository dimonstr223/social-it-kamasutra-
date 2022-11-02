const store = {
	_state: {
		profilePage: {
			posts: [{ id: 1, message: 'Wussap baby. Want some chill? ^_^' }],
			newPostText: '',
		},
		dialogsPage: {
			dialogs: [
				{ id: 1, name: 'Pain' },
				{ id: 2, name: 'Itachi' },
				{ id: 3, name: 'Kisame' },
				{ id: 4, name: 'Sasori' },
				{ id: 5, name: 'Konan' },
				{ id: 6, name: 'Hidan' },
				{ id: 7, name: 'Kakuzu' },
			],
			messages: [
				{
					id: 1,
					message: 'Hello. Did you katch Naruto and his demon chakura?',
				},
			],
		},
		sidebar: {
			friends: [
				{
					id: 1,
					imageUrl:
						'https://i.pinimg.com/originals/55/de/e5/55dee5ff7e2e3537c0d9f22fce6141b1.jpg',
					name: 'Itachi',
				},
				{
					id: 2,
					imageUrl:
						'https://i.pinimg.com/originals/55/de/e5/55dee5ff7e2e3537c0d9f22fce6141b1.jpg',
					name: 'Kisame',
				},
				{
					id: 3,
					imageUrl:
						'https://i.pinimg.com/originals/55/de/e5/55dee5ff7e2e3537c0d9f22fce6141b1.jpg',
					name: 'Orochimaru',
				},
			],
		},
	},
	getState(state) {
		return this._state
	},

	_callSubscriber() {},

	updatePostText(postText) {
		this._state.profilePage.newPostText = postText
	},

	addPost() {
		const newPost = {
			id: 2,
			message: this._state.profilePage.newPostText,
		}
		this._state.profilePage.posts.push(newPost)
		this._callSubscriber(this._state)
	},

	subscribe(observer) {
		this._callSubscriber = observer
	},
}

export default store
