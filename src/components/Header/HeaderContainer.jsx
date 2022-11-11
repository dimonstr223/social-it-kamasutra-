import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'

import Header from '.'
import { setAuthUserData } from '../../redux/reducers/authReducer'

class HeaderContainer extends React.Component {
	componentDidMount() {
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
				withCredentials: true,
			})
			.then(res => {
				if (res.data.resultCode === 0) {
					const { id, login, email } = res.data.data
					this.props.setAuthUserData(id, login, email)
				}
			})
	}
	render() {
		return <Header {...this.props} />
	}
}

const mapStateToProps = state => ({
	id: state.auth.id,
	login: state.auth.login,
	isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer)
