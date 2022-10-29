import style from '../scss/components/Message.module.scss'

const Message = ({ message }) => {
	return (
		<div className={style.message}>
			<p className={style.text}>{message}</p>
		</div>
	)
}

export default Message
