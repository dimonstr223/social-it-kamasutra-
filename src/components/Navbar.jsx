import React from 'react'
import { NavLink } from 'react-router-dom'

import style from '../scss/components/Navbar.module.scss'

const Navbar = () => {
	return (
		<nav className={style.nav}>
			<ul className={style.list}>
				<li>
					<NavLink
						to='/profile'
						className={nav => (nav.isActive ? style.active : style.item)}
					>
						profile
					</NavLink>
				</li>
				<li className={style.item}>
					<NavLink
						to='/dialogs'
						className={nav => (nav.isActive ? style.active : style.item)}
					>
						dialogs
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
