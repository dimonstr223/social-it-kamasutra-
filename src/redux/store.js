import dialogsReducer from './reducers/dialogsReducer'
import profileReducer from './reducers/profileReducer'
import sidebarReducer from './reducers/sidebarReducer'

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
			newMessageText: '',
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
	getState() {
		return this._state
	},
	_callSubscriber() {},
	subscribe(observer) {
		this._callSubscriber = observer
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
		this._state.sidebar = sidebarReducer(this._state.sidebar, action)

		this._callSubscriber(this._state)
	},
}

window.store = store

export default store
