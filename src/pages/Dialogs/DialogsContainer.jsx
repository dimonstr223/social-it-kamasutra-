import React from 'react'
import Dialogs from '.'

import {
	sendMessageCreator,
	updateMessageTextCreator,
} from '../../redux/reducers/dialogsReducer'
import StoreContext from '../../redux/StoreContext'

const DialogsContainer = () => {
	const store = React.useContext(StoreContext)
	const state = store.getState()

	const onMessageChange = text => {
		const action = updateMessageTextCreator(text)
		store.dispatch(action)
	}

	const onSendMessage = () => {
		store.dispatch(sendMessageCreator())
	}

	return (
		<Dialogs
			updateMessageText={onMessageChange}
			sendMessage={onSendMessage}
			dialogsPage={state.dialogsPage}
		/>
	)
}

export default DialogsContainer
