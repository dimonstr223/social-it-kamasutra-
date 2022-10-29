import React from 'react'

import style from '../scss/pages/Profile.module.scss'
import Posts from '../components/Posts'
import { Link } from 'react-router-dom'
import ProfileInfo from '../components/ProfileInfo'

const Profile = () => {
	return (
		<>
			<ProfileInfo />
			<Posts />
		</>
	)
}

export default Profile
