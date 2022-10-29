import React from 'react'

import style from '../scss/pages/Dialogs.module.scss'

const Dialogs = () => {
	return (
		<div className={style.dialogs__wrapper}>
			<div className={style.dialogs}>
				<h2>Dialogs</h2>
				<ul className={style.list}>
					<li className={style.item}>
						<a href='#'>
							<img
								src='https://i.pinimg.com/originals/55/de/e5/55dee5ff7e2e3537c0d9f22fce6141b1.jpg'
								alt='avatar'
							/>
							<h3>Itachi</h3>
						</a>
					</li>
					<li className={style.item}>
						<a href='#'>
							<img
								src='https://i.pinimg.com/originals/55/de/e5/55dee5ff7e2e3537c0d9f22fce6141b1.jpg'
								alt='avatar'
							/>
							<h3>Pain</h3>
						</a>
					</li>
				</ul>
			</div>
			<div className={style.messages}>
				<div>
					<p className={style.text}>Ало, когда девятихвостого принесёшь? </p>
				</div>
			</div>
		</div>
	)
}

export default Dialogs
