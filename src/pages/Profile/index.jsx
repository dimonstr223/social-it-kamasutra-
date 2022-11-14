import React from 'react'

import style from '../../scss/pages/Profile.module.scss'
import ProfileInfo from '../../components/ProfileInfo'
import PostsContainer from '../../components/Posts/PostsContainer'

const Profile = props => {
	return (
		<>
			<ProfileInfo
				userProfile={props.userProfile}
				status={props.status}
				updateStatus={props.updateStatus}
			/>
			<PostsContainer />
		</>
	)
}

export default Profile
