import React from 'react'

import style from '../scss/components/Navbar.module.scss'

const Navbar = () => {
	return (
		<nav className={style.nav}>
			<ul>
				<li>
					<a href='#'>profile</a>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
