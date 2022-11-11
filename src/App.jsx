import './scss/App.scss'
import Header from './components/Header'
import Navbar from './components/Navbar'
import DialogsContainer from './pages/Dialogs/DialogsContainer'
import { Route, Routes } from 'react-router-dom'
import UsersContainer from './pages/Users/UsersContainer'
import ProfileContainer from './pages/Profile/ProfileContainer'

const App = ({ state, dispatch, store }) => {
	return (
		<div className='container'>
			<Header />
			<div className='content__wrapper'>
				<Navbar sidebar={state.sidebar} />
				<div className='content'>
					<Routes>
						<Route path='/profile' element={<ProfileContainer />} />
						<Route path='/profile/:id' element={<ProfileContainer />} />
						<Route path='/dialogs/*' element={<DialogsContainer />} />
						<Route path='/users' element={<UsersContainer />} />
					</Routes>
				</div>
			</div>
		</div>
	)
}

export default App
