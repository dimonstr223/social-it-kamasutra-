import React from 'react'
import axios from 'axios'

import style from '../../scss/pages/Users.module.scss'

import avatarDefault from '../../img/avatar-default.jpg'

const Users = ({ users, follow, unfollow, setUsers }) => {
	React.useEffect(() => {
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users`)
			.then(res => setUsers(res.data.items))
	}, [])

	const usersElements = users.map(user => (
		<li key={user.id}>
			<div className={style.users__img}>
				<img
					src={user.photos.small === null ? avatarDefault : user.photos.small}
					alt='user avatar'
				/>
			</div>
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
