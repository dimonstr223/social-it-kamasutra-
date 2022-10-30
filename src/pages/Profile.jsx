import React from 'react'

import style from '../scss/pages/Profile.module.scss'
import Posts from '../components/Posts'
import ProfileInfo from '../components/ProfileInfo'

const Profile = ({ profilePage }) => {
	return (
		<>
			<ProfileInfo />
			<Posts posts={profilePage.posts} />
		</>
	)
}

export default Profile
