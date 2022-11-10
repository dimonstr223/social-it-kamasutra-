import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Profile from '.'
import { setUserProfile } from '../../redux/reducers/profileReducer'

class ProfileContainer extends React.Component {
	componentDidMount() {
		const userId = this.props.router.params.id
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
			.then(res => this.props.setUserProfile(res.data))
	}

	render() {
		console.log(this.props.router.params)
		return <Profile userProfile={this.props.userProfile} />
	}
}

function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		let location = useLocation()
		let navigate = useNavigate()
		let params = useParams()
		return <Component {...props} router={{ location, navigate, params }} />
	}

	return ComponentWithRouterProp
}

const mapStateToProps = state => ({
	userProfile: state.profilePage.userProfile,
})

export default connect(mapStateToProps, { setUserProfile })(
	withRouter(ProfileContainer)
)
