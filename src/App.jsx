import './scss/App.scss'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Profile from './pages/Profile'
import Dialogs from './pages/Dialogs'
import { Route, Routes } from 'react-router-dom'

const App = ({ state, dispatch }) => {
	return (
		<div className='container'>
			<Header />
			<div className='content__wrapper'>
				<Navbar sidebar={state.sidebar} />
				<div className='content'>
					<Routes>
						<Route
							path='/profile'
							element={
								<Profile profilePage={state.profilePage} dispatch={dispatch} />
							}
						/>
						<Route
							path='/dialogs/*'
							element={
								<Dialogs dialogsPage={state.dialogsPage} dispatch={dispatch} />
							}
						/>
					</Routes>
				</div>
			</div>
		</div>
	)
}

export default App
