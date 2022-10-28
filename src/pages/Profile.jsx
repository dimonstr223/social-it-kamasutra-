import React from 'react'

import style from '../scss/pages/Profile.module.scss'
import Posts from '../components/Posts'

const Profile = () => {
	return (
		<div className={style.content}>
			<div className={style.profile__info}>
				<div className={style.avatar}>
					<img
						src='https://i.pinimg.com/originals/37/8c/9b/378c9b78ca92c51caec0011e69f6a1c8.jpg'
						alt=''
					/>
				</div>
				<div className={style.description}>
					<h3 className={style.name}> Dima Mikuluca</h3>
					<div className={style.status}>Im insane programmer</div>
				</div>
			</div>
			<Posts />
		</div>
	)
}

export default Profile
