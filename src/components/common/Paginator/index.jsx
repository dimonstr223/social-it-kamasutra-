import React from 'react'
import style from '../../../scss/components/Paginator.module.scss'

const Paginator = ({ totalUsersCount, pageSize, currentPage, onClickPage }) => {
	const pagesCount = Math.ceil(totalUsersCount / pageSize)
	const pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}
	return (
		<ul className={style.pages__list}>
			{pages.map(page => (
				<li
					key={page}
					onClick={() => onClickPage(page)}
					className={page === currentPage ? style.currentPage : style.page}
				>
					{page}
				</li>
			))}
		</ul>
	)
}

export default Paginator
