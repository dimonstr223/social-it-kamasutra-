import React from 'react'
import { Link } from 'react-router-dom'

import style from '../scss/components/Navbar.module.scss'

const Navbar = () => {
	return (
		<nav className={style.nav}>
			<ul className={style.list}>
				<li>
					<Link to='/profile'>profile</Link>
				</li>
				<li>
					<Link to='/dialogs'>dialogs</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
