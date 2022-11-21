import React from 'react'
import ReactPaginate from 'react-paginate'
import style from '../../../scss/components/Paginator.module.scss'

// const Pages = ({ totalUsersCount, pageSize, currentPage, onClickPage }) => {
// 	const pagesCount = Math.ceil(totalUsersCount / pageSize)
// 	const pages = []
// 	for (let i = 1; i <= pagesCount; i++) {
// 		pages.push(i)
// 	}
// 	return (
// 		<ul className={style.pages__list}>
// 			{pages.map(page => (
// 				<li
// 					key={page}
// 					onClick={() => onClickPage(page)}
// 					className={page === currentPage ? style.currentPage : style.page}
// 				>
// 					{page}
// 				</li>
// 			))}
// 		</ul>
// 	)
// }

const Paginator = ({ totalUsersCount, pageSize, currentPage, onClickPage }) => {
	const handlePageClick = e => {
		onClickPage(e.selected + 1)
	}

	return (
		<>
			<ReactPaginate
				breakLabel='...'
				previousLabel='<<'
				nextLabel='>>'
				onPageChange={handlePageClick}
				pageCount={Math.ceil(totalUsersCount / pageSize)}
				// classNames
				pageClassName={style.pageItem}
				previousClassName={style.previous}
				nextClassName={style.next}
				containerClassName={style.pagination}
				activeClassName={style.active}
			/>
		</>
	)
}

export default Paginator
