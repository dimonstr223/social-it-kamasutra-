import React from 'react'

import style from '../../scss/pages/Users.module.scss'

import Paginator from '../../components/common/Paginator'
import User from '../../components/User'

const Users = ({
	users,
	pageSize,
	currentPage,
	totalUsersCount,
	follow,
	unfollow,
	onClickPage,
	followingUserId,
}) => {
	const usersElements = users.map(user => (
		<User
			key={user.id}
			user={user}
			follow={follow}
			unfollow={unfollow}
			followingUserId={followingUserId}
		/>
	))
	return (
		<div>
			<Paginator
				totalUsersCount={totalUsersCount}
				pageSize={pageSize}
				currentPage={currentPage}
				onClickPage={onClickPage}
			/>
			<ul className={style.users__list}>{usersElements}</ul>
		</div>
	)
}

export default Users
