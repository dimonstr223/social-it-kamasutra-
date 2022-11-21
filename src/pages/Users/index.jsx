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
		<>
			<div id='container'>
				<Paginator
					users={users}
					totalUsersCount={totalUsersCount}
					pageSize={pageSize}
					currentPage={currentPage}
					onClickPage={onClickPage}
				/>
			</div>
			<ul className={style.users__list}>{usersElements}</ul>
		</>
	)
}

export default Users
