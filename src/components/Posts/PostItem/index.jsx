import React from 'react'

import style from '../../../scss/components/PostItem.module.scss'

const PostItem = ({ message }) => {
	return (
		<li className={style.item}>
			<img
				className={style.img}
				src='https://i.pinimg.com/originals/55/de/e5/55dee5ff7e2e3537c0d9f22fce6141b1.jpg'
				alt='avatar'
			/>
			<div className={style.post__content}>
				<h5 className={style.name}>Pain</h5>

				<p className={style.text}>{message}</p>
			</div>
		</li>
	)
}

export default PostItem
