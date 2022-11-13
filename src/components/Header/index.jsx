import React from 'react'

import style from '../../scss/components/Header.module.scss'

import logo from '../../img/header-logo.png'
import { Link } from 'react-router-dom'

const Header = ({ login, isAuth }) => {
	return (
		<header className={style.header}>
			<Link to='/profile'>
				<div className={style.logo}>
					<img src={logo} alt='' />
					<h2 className={style.title}>social</h2>
				</div>
			</Link>
			{isAuth ? (
				<div className={style.authLogin}>{login}</div>
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
