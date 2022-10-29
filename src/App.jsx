import './scss/App.scss'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Profile from './pages/Profile'
import Dialogs from './pages/Dialogs'
import { Route, Routes } from 'react-router-dom'

const App = () => {
	return (
		<div className='container'>
			<Header />
			<div className='content__wrapper'>
				<Navbar />
				<div className='content'>
					<Routes>
						<Route path='/profile' element={<Profile />} />
						<Route path='/dialogs/*' element={<Dialogs />} />
					</Routes>
				</div>
			</div>
		</div>
	)
}

export default App
