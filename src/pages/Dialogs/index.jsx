import React from 'react'

import DialogsItem from '../../components/DialogsItem'
import Message from '../../components/Message'

import style from '../../scss/pages/Dialogs.module.scss'

const Dialogs = ({ dialogsPage, updateMessageText, sendMessage }) => {
	const dialogsElements = dialogsPage.dialogs.map(dialog => (
		<DialogsItem key={dialog.id} name={dialog.name} id={dialog.id} />
	))
	const messagesElements = dialogsPage.messages.map(message => (
		<Message key={message.id} message={message.message} />
	))

	const onMessageChange = e => {
		const text = e.target.value
		updateMessageText(text)
	}

	const onSendMessage = () => {
		sendMessage()
	}

	return (
		<div className={style.dialogs__wrapper}>
			<div className={style.dialogs}>
				<h2>Dialogs</h2>
				<ul className={style.list}>{dialogsElements}</ul>
			</div>

			<div className={style.messages__wrapper}>
				<div className={style.messages}>{messagesElements}</div>
				<div className={style.communication}>
					<textarea
						onChange={onMessageChange}
						value={dialogsPage.newMessageText}
						className={style.input}
						type='text'
					/>
					<button onClick={onSendMessage} className={style.btn}>
						Send
					</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs
