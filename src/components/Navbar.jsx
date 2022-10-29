import React from 'react'

import style from '../scss/components/Navbar.module.scss'

const Navbar = () => {
	return (
		<nav className={style.nav}>
			<ul className={style.list}>
				<li>
					<a href='#'>profile</a>
				</li>
				<li>
					<a href='#'>dialogs</a>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
