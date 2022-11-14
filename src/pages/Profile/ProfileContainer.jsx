import React from 'react'
import { connect } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { compose } from 'redux'
import Profile from '.'
import whithAuthNavigate from '../../hoc/whithAuthNavigate'
import {
	getUserProfile,
	getStatus,
	updateStatus,
} from '../../redux/reducers/profileReducer'

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.router.params.id
		if (!userId) userId = 2
		this.props.getUserProfile(userId)
		this.props.getStatus(userId)
	}

	render() {
		return <Profile {...this.props} userProfile={this.props.userProfile} />
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
	status: state.profilePage.status,
})

export default compose(
	whithAuthNavigate,
	connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
	withRouter
)(ProfileContainer)
