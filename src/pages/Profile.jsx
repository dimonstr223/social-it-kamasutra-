import React from 'react'

import style from '../scss/pages/Profile.module.scss'
import Posts from '../components/Posts'
import ProfileInfo from '../components/ProfileInfo'

const Profile = ({ profilePage, updatePostText, addPost }) => {
	return (
		<>
			<ProfileInfo />
			<Posts
				profilePage={profilePage}
				updatePostText={updatePostText}
				addPost={addPost}
			/>
		</>
	)
}

export default Profile
