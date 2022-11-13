import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'

const mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
})

const whithAuthNavigate = Component => {
	class NavigateComponent extends React.Component {
		render() {
			if (!this.props.isAuth) return <Navigate to='/login' />
			return <Component {...this.props} />
		}
	}

	return connect(mapStateToProps)(NavigateComponent)
}

export default whithAuthNavigate
