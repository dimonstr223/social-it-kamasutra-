import React from 'react'
import axios from 'axios'

import style from '../../scss/pages/Users.module.scss'

import avatarDefault from '../../img/avatar-default.jpg'

class Users extends React.Component {
	componentDidMount() {
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users`)
			.then(res => this.props.setUsers(res.data.items))
	}
	render() {
		return (
			<div>
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

// const Users = ({ users, follow, unfollow, setUsers }) => {
// 	React.useEffect(() => {
// 		axios
// 			.get(`https://social-network.samuraijs.com/api/1.0/users`)
// 			.then(res => setUsers(res.data.items))
// 	}, [])

// 	return (
// 		<div>
// 			<ul className={style.users__list}>
// 				{users.map(user => (
// 					<li key={user.id}>
// 						<div className={style.users__img}>
// 							<img
// 								src={
// 									user.photos.small === null ? avatarDefault : user.photos.small
// 								}
// 								alt='user avatar'
// 							/>
// 						</div>
// 						<h3>{user.name}</h3>
// 						{user.followed ? (
// 							<button onClick={() => unfollow(user.id)}>unfollow</button>
// 						) : (
// 							<button onClick={() => follow(user.id)}>follow</button>
// 						)}
// 					</li>
// 				))}
// 			</ul>
// 		</div>
// 	)
// }

export default Users
