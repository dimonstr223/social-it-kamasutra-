import React from 'react'
import axios from 'axios'

import style from '../../scss/pages/Users.module.scss'

import avatarDefault from '../../img/avatar-default.jpg'

class Users extends React.Component {
	componentDidMount = () => {
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
			)
			.then(res => {
				this.props.setUsers(res.data.items)
				this.props.setTotalUsersCount(res.data.totalCount)
			})
	}

	onClickPage = pageNumber => {
		this.props.setCurrentPage(pageNumber)
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
			)
			.then(res => this.props.setUsers(res.data.items))
	}

	render() {
		const pagesCount = Math.ceil(
			this.props.totalUsersCount / this.props.pageSize
		)
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
							onClick={() => this.onClickPage(page)}
							className={
								page === this.props.currentPage ? style.currentPage : style.page
							}
						>
							{page}
						</li>
					))}
				</ul>
				<ul className={style.users__list}>
					{this.props.users.map(user => (
						<li key={user.id}>
							<div className={style.users__img}>
								<img
									src={
										user.photos.small === null
											? avatarDefault
											: user.photos.small
									}
									alt='user avatar'
								/>
							</div>
							<h3>{user.name}</h3>
							{user.followed ? (
								<button onClick={() => this.props.unfollow(user.id)}>
									unfollow
								</button>
							) : (
								<button onClick={() => this.props.follow(user.id)}>
									follow
								</button>
							)}
						</li>
					))}
				</ul>
			</div>
		)
	}
}

export default Users
