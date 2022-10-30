import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import style from '../scss/components/Navbar.module.scss'
import Friends from './Friends'

const Navbar = ({ sidebar }) => {
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
						messages
					</NavLink>
				</li>
			</ul>

			<Friends friends={sidebar.friends} />
		</nav>
	)
}

export default Navbar
