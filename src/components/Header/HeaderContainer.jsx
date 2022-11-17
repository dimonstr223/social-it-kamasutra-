import React from 'react'
import { connect } from 'react-redux'

import Header from '.'
import { logout } from '../../redux/reducers/authReducer'

class HeaderContainer extends React.Component {
	render() {
		return <Header {...this.props} />
	}
}

const mapStateToProps = state => ({
	id: state.auth.id,
	login: state.auth.login,
	isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { logout })(HeaderContainer)
