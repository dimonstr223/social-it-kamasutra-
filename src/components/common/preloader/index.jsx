import style from '../../../scss/components/Preloader.module.scss'
import preloader from '../../../img/preloader.gif'

const Preloader = () => {
	return (
		<div className={style.loader}>
			<img src={preloader} alt='preloader' />
		</div>
	)
}

export default Preloader
