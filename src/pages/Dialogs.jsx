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

const Dialogs = () => {
	return (
		<div className={style.dialogs__wrapper}>
			<div className={style.dialogs}>
				<h2>Dialogs</h2>
				<ul className={style.list}>
					<DialogsItem name='Pain' id='1' />
					<DialogsItem name='Itachi' id='2' />
					<DialogsItem name='Kisame' id='3' />
					<DialogsItem name='Sasori' id='4' />
					<DialogsItem name='Konan' id='5' />
				</ul>
			</div>
			<div className={style.messages}>
				<Message message='Hello. Did you katch Naruto and his demon chakura?' />
			</div>
		</div>
	)
}

export default Dialogs
