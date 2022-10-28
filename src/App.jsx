import './scss/App.scss'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Profile from './pages/Profile'

const App = () => {
	return (
		<div className='App'>
			<div className='container'>
				<Header />
				<div className='content__wrapper'>
					<Navbar />
					<Profile />
				</div>
			</div>
		</div>
	)
}

export default App
