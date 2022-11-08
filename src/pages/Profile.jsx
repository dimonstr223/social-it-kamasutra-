import React from 'react'

import style from '../scss/pages/Profile.module.scss'
import ProfileInfo from '../components/ProfileInfo'
import PostsContainer from '../components/Posts/PostsContainer'

const Profile = () => {
	return (
		<>
			<ProfileInfo />
			<PostsContainer />
		</>
	)
}

export default Profile
