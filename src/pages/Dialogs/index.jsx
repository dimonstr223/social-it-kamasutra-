import React from 'react'
import { useForm } from 'react-hook-form'

import DialogsItem from '../../components/DialogsItem'
import Message from '../../components/Message'

import style from '../../scss/pages/Dialogs.module.scss'

const DialogsForm = ({ sendMessage }) => {
	const { handleSubmit, register, reset } = useForm({ mode: 'onBlur' })

	const onSubmit = value => {
		value.message && sendMessage(value.message)
		reset()
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={style.communication}>
			<textarea className={style.input} {...register('message')} />
			<input type='submit' className={style.btn} value='send' />
		</form>
	)
}

const Dialogs = ({ dialogsPage, sendMessage }) => {
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

			<div className={style.messages__wrapper}>
				<div className={style.messages}>{messagesElements}</div>
				<DialogsForm sendMessage={sendMessage} />
			</div>
		</div>
	)
}

export default Dialogs
