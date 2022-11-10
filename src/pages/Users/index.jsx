import React from 'react'

import style from '../../scss/pages/Users.module.scss'

import avatarDefault from '../../img/avatar-default.jpg'

const Users = ({
	users,
	pageSize,
	currentPage,
	totalUsersCount,
	follow,
	unfollow,
	onClickPage,
}) => {
	const pagesCount = Math.ceil(totalUsersCount / pageSize)
	const pages = []

	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}
	console.log(pages)

	return (
		<div>
			<ul className={style.pages__list}>
				{pages.map(page => (
					<li
						onClick={() => onClickPage(page)}
						className={page === currentPage ? style.currentPage : style.page}
					>
						{page}
					</li>
				))}
			</ul>
			<ul className={style.users__list}>
				{users.map(user => (
					<li key={user.id}>
						<div className={style.users__img}>
							<img
								src={
									user.photos.small === null ? avatarDefault : user.photos.small
								}
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
				))}
			</ul>
		</div>
	)
}

export default Users
