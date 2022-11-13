import React from 'react'
import { Link } from 'react-router-dom'

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
	followingUserId,
}) => {
	const pagesCount = Math.ceil(totalUsersCount / pageSize)
	const pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

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
							<Link to={`/profile/${user.id}`}>
								<img
									src={
										user.photos.small === null
											? avatarDefault
											: user.photos.small
									}
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
				))}
			</ul>
		</div>
	)
}

export default Users
