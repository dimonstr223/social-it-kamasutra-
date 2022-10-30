import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import style from '../scss/components/Friends.module.scss'

const Friends = ({ friends }) => {
	const friendsElements = friends.map(friend => (
		<li key={friend.id} className={style.item}>
			<Link>
				<div className={style.avatar}>
					<img src={friend.imageUrl} alt='Avatar' />
				</div>
			</Link>
		</li>
	))

	return (
		<div className={style.friends}>
			<NavLink className={style.item}>Friends</NavLink>
			<ul className={style.friends__list}>{friendsElements}</ul>
		</div>
	)
}

export default Friends
