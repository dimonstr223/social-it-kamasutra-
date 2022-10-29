import React from 'react'
import { NavLink } from 'react-router-dom'

import style from '../scss/pages/Dialogs.module.scss'

const DialogsItem = ({ name, id }) => {
	return (
		<li>
			<NavLink
				className={nav => (nav.isActive ? style.active : style.item)}
				to={`/dialogs/${id}`}
			>
				<img
					src='https://i.pinimg.com/originals/55/de/e5/55dee5ff7e2e3537c0d9f22fce6141b1.jpg'
					alt='avatar'
				/>
				<h3>{name}</h3>
			</NavLink>
		</li>
	)
}
const Message = ({ message }) => {
	return (
		<div>
			<p className={style.text}>{message}</p>
		</div>
	)
}

const dialogsData = [
	{ id: 1, name: 'Pain' },
	{ id: 2, name: 'Itachi' },
	{ id: 3, name: 'Kisame' },
	{ id: 4, name: 'Sasori' },
	{ id: 5, name: 'Konan' },
	{ id: 6, name: 'Hidan' },
	{ id: 7, name: 'Kakuzu' },
]
const messagesData = [
	{ id: 1, message: 'Hello. Did you katch Naruto and his demon chakura?' },
]

const dialogsElements = dialogsData.map(dialog => (
	<DialogsItem key={dialog.id} name={dialog.name} id={dialog.id} />
))
const messagesElements = messagesData.map(message => (
	<Message message={message.message} />
))

const Dialogs = () => {
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
