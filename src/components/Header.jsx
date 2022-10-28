import React from 'react'

import style from '../scss/components/Header.module.scss'

import logo from '../img/header-logo.png'

const Header = () => {
	return (
		<header className={style.header}>
			<a href='#'>
				<div className={style.logo}>
					<img src={logo} alt='' />
					<h2 className={style.title}>social</h2>
				</div>
			</a>
		</header>
	)
}

export default Header
