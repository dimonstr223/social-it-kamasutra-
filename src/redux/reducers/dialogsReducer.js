const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

const initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_MESSAGE_TEXT:
			state.newMessageText = action.messageText
			return state

		case SEND_MESSAGE:
			const newMessage = {
				id: 2,
				message: state.newMessageText,
			}
			state.messages.push(newMessage)
			state.newMessageText = ''
			return state

		default:
			return state
	}
}

export const updateMessageTextCreator = messageText => ({
	type: UPDATE_MESSAGE_TEXT,
	messageText,
})

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export default dialogsReducer
