import React from 'react'
import { Link } from 'react-router-dom'

import avatarDefault from '../../img/avatar-default.jpg'
import style from '../../scss/components/User.module.scss'

const User = ({ user, follow, unfollow, followingUserId }) => {
	return (
		<li key={user.id}>
			<div className={style.users__img}>
				<Link to={`/profile/${user.id}`}>
					<img
						src={user.photos.small === null ? avatarDefault : user.photos.small}
						alt='user avatar'
					/>
				</Link>
			</div>
			<h3>{user.name}</h3>
			{user.followed ? (
				<button
					className={style.button}
					disabled={followingUserId.some(id => id === user.id)}
					onClick={() => {
						unfollow(user.id)
					}}
				>
					unfollow
				</button>
			) : (
				<button
					className={style.button}
					disabled={followingUserId.some(id => id === user.id)}
					onClick={() => {
						follow(user.id)
					}}
				>
					follow
				</button>
			)}
		</li>
	)
}

export default User
