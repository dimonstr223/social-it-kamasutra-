import './scss/App.scss'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Profile from './pages/Profile'
import DialogsContainer from './pages/Dialogs/DialogsContainer'
import { Route, Routes } from 'react-router-dom'

const App = ({ state, dispatch, store }) => {
	return (
		<div className='container'>
			<Header />
			<div className='content__wrapper'>
				<Navbar sidebar={state.sidebar} />
				<div className='content'>
					<Routes>
						<Route path='/profile' element={<Profile />} />
						<Route path='/dialogs/*' element={<DialogsContainer />} />
					</Routes>
				</div>
			</div>
		</div>
	)
}

export default App
