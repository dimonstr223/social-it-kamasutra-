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
		case SEND_MESSAGE:
			const newMessage = {
				id: 2,
				message: action.newMessageText,
			}
			return {
				...state,
				messages: [...state.messages, newMessage],
				newMessageText: '',
			}
		default:
			return state
	}
}

export const sendMessage = newMessageText => ({
	type: SEND_MESSAGE,
	newMessageText,
})

export default dialogsReducer
