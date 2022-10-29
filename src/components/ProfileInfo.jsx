import React from 'react'

import style from '../scss/components/ProfileInfo.module.scss'

const ProfileInfo = () => {
	return (
		<div className={style.profile__info}>
			<div className={style.avatar}>
				<img
					src='https://i.pinimg.com/originals/37/8c/9b/378c9b78ca92c51caec0011e69f6a1c8.jpg'
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
