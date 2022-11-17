import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux'

import Navbar from './components/Navbar'
import DialogsContainer from './pages/Dialogs/DialogsContainer'
import UsersContainer from './pages/Users/UsersContainer'
import ProfileContainer from './pages/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './pages/Login'

import { initializeApp } from './redux/reducers/appReducer'
import './scss/App.scss'
import Preloader from './components/common/preloader'

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp()
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}
		return (
			<div className='container'>
				<HeaderContainer />
				<div className='content__wrapper'>
					<Navbar sidebar={this.props.state.sidebar} />
					<div className='content'>
						<Routes>
							<Route path='/profile' element={<ProfileContainer />} />
							<Route path='/profile/:id' element={<ProfileContainer />} />
							<Route path='/dialogs/*' element={<DialogsContainer />} />
							<Route path='/users' element={<UsersContainer />} />
							<Route path='/login' element={<Login />} />
						</Routes>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	initialized: state.app.initialized,
})

export default connect(mapStateToProps, { initializeApp })(App)
