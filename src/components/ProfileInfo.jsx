import React from 'react'

import style from '../scss/components/ProfileInfo.module.scss'

const ProfileInfo = () => {
	return (
		<div className={style.profile__info}>
			<div className={style.avatar}>
				<img
					src='https://i.pinimg.com/originals/55/de/e5/55dee5ff7e2e3537c0d9f22fce6141b1.jpg'
					alt='avatar'
				/>
			</div>
			<div className={style.description}>
				<h3 className={style.name}> Dima Mikuluca</h3>
				<div className={style.status}>Im insane programmer</div>
			</div>
		</div>
	)
}

export default ProfileInfo
