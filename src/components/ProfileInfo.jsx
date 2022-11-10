import React from 'react'

import style from '../scss/components/ProfileInfo.module.scss'
import Preloader from './common/preloader'
import avaDefault from '../img/avatar-default.jpg'

const ProfileInfo = ({ userProfile }) => {
	if (!userProfile) {
		return <Preloader />
	}
	return (
		<div className={style.profile__info}>
			<div className={style.avatar}>
				<img src={userProfile.photos.large || avaDefault} alt='avatar' />
			</div>
			<div className={style.description}>
				<h3 className={style.name}> {userProfile.fullName}</h3>
				<div className={style.status}>{userProfile.aboutMe}</div>
			</div>
		</div>
	)
}

export default ProfileInfo
