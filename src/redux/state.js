const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'
const ADD_POST = 'ADD_POST'
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

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
		if (action.type === UPDATE_POST_TEXT) {
			this._state.profilePage.newPostText = action.postText
			this._callSubscriber(this._state)
		}
		if (action.type === ADD_POST) {
			const newPost = {
				id: 2,
				message: this._state.profilePage.newPostText,
			}
			this._state.profilePage.posts.push(newPost)
			this._state.profilePage.newPostText = ''
			this._callSubscriber(this._state)
		}
		if (action.type === UPDATE_MESSAGE_TEXT) {
			this._state.dialogsPage.newMessageText = action.messageText
			this._callSubscriber(this._state)
		}
		if (action.type === SEND_MESSAGE) {
			const newMessage = {
				id: 2,
				message: this._state.dialogsPage.newMessageText,
			}
			this._state.dialogsPage.messages.push(newMessage)
			this._state.dialogsPage.newMessageText = ''
			this._callSubscriber(this._state)
		}
	},
}

export const updatePostTextCreator = postText => ({
	type: UPDATE_POST_TEXT,
	postText,
})
export const addPostCreator = () => ({ type: ADD_POST })

export const updateMessageTextCreator = messageText => ({
	type: UPDATE_MESSAGE_TEXT,
	messageText,
})

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

window.store = store

export default store
