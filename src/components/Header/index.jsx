import React from 'react'

import style from '../../scss/components/Header.module.scss'

import logo from '../../img/header-logo.png'
import { Link } from 'react-router-dom'

const Header = ({ login, isAuth, logout }) => {
	const onLogout = () => {
		logout()
	}
	return (
		<header className={style.header}>
			<Link to='/profile'>
				<div className={style.logo}>
					<img src={logo} alt='' />
					<h2 className={style.title}>social</h2>
				</div>
			</Link>
			{isAuth ? (
				<div className={style.authLogin}>
					<div>{login}</div>
					<div>
						<button onClick={() => onLogout()} className={style.logoutButton}>
							LogOut
						</button>
					</div>
				</div>
			) : (
				<div className={style.login}>
					<Link to='/login'>
						<button className={style.login__button}>Login</button>
					</Link>
				</div>
			)}
		</header>
	)
}

export default Header
