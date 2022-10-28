import './App.scss'

import logo from './img/header-logo.png'

const App = () => {
	return (
		<div className='App'>
			<div className='container'>
				<header className='header'>
					<div className='logo'>
						<img src={logo} alt='' />
						<h2 className='logo__title'>social</h2>
					</div>
				</header>
				<div className='content__wrapper'>
					<nav className='nav'>
						<ul>
							<li>
								<a href='#'>profile</a>
							</li>
						</ul>
					</nav>

					<div className='content'>
						<div className='profile__info'>
							<div className='avatar'>
								<img
									src='https://i.pinimg.com/originals/37/8c/9b/378c9b78ca92c51caec0011e69f6a1c8.jpg'
									alt=''
								/>
							</div>
							<div className='description'>
								<h3 className='name'> Dima Mikuluca</h3>
								<div className='status'>Im insane programmer</div>
							</div>
						</div>

						<div className='post'>
							<div className='post__wrapper'>
								<h3>Posts</h3>
								<div className='addPost'>
									<textarea className='addPost__input' type='text' />
									<button className='addPost__btn'>Add post</button>
								</div>
							</div>
							<ul className='post__list'>
								<li className='post__item'>
									<img
										className='img'
										src='https://i.pinimg.com/originals/55/de/e5/55dee5ff7e2e3537c0d9f22fce6141b1.jpg'
										alt=''
									/>
									<div className='post__content'>
										<h5 className='name'>Pain</h5>
										<p className='text'>Wussap baby. Want some chill? ^_^</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
