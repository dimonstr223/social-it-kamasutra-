import './scss/App.scss'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Profile from './pages/Profile'
import Dialogs from './pages/Dialogs'

const App = () => {
	return (
		<div className='container'>
			<Header />
			<div className='content__wrapper'>
				<Navbar />
				<div className='content'>
					<Profile />
					<Dialogs />
				</div>
			</div>
		</div>
	)
}

export default App
