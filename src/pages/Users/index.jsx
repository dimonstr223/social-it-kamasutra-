import React from 'react'

import style from '../../scss/pages/Users.module.scss'

const Users = ({ users, follow, unfollow }) => {
	const usersElements = users.map(user => (
		<li key={user.id}>
			<h3>{user.name}</h3>
			{user.followed ? (
				<button onClick={() => unfollow(user.id)}>unfollow</button>
			) : (
				<button onClick={() => follow(user.id)}>follow</button>
			)}
		</li>
	))

	return (
		<div>
			<ul className={style.users__list}>{usersElements}</ul>
		</div>
	)
}

export default Users
