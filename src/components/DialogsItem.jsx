import { NavLink } from 'react-router-dom'
import style from '../scss/components/DialogsItem.module.scss'

const DialogsItem = ({ name, id }) => {
	return (
		<li className={style.listItem}>
			<NavLink
				className={nav => (nav.isActive ? style.active : style.item)}
				to={`/dialogs/${id}`}
			>
				<img
					src='https://i.pinimg.com/originals/55/de/e5/55dee5ff7e2e3537c0d9f22fce6141b1.jpg'
					alt='avatar'
				/>
				<h3>{name}</h3>
			</NavLink>
		</li>
	)
}

export default DialogsItem
