import React from 'react'

import DialogsItem from '../components/DialogsItem'
import Message from '../components/Message'

import style from '../scss/pages/Dialogs.module.scss'

const Dialogs = ({ dialogsPage }) => {
	const dialogsElements = dialogsPage.dialogs.map(dialog => (
		<DialogsItem key={dialog.id} name={dialog.name} id={dialog.id} />
	))
	const messagesElements = dialogsPage.messages.map(message => (
		<Message key={message.id} message={message.message} />
	))

	return (
		<div className={style.dialogs__wrapper}>
			<div className={style.dialogs}>
				<h2>Dialogs</h2>
				<ul className={style.list}>{dialogsElements}</ul>
			</div>
			<div className={style.messages}>{messagesElements}</div>
		</div>
	)
}

export default Dialogs
