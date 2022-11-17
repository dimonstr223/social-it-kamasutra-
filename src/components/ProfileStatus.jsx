import React from 'react'

import style from '../scss/components/ProfileInfo.module.scss'
const ProfileStatus = props => {
	const [editMode, setEditMode] = React.useState(false)
	const [status, setStatus] = React.useState(props.status)

	React.useEffect(() => {
		setStatus(props.status)
	}, [props.status])

	const activateEditMode = () => {
		setEditMode(true)
	}

	const deactivateEditMode = () => {
		setEditMode(false)
		props.updateStatus(status)
	}

	const onStatusChange = e => {
		setStatus(e.currentTarget.value)
	}

	return (
		<>
			{editMode ? (
				<div>
					<input
						onChange={e => onStatusChange(e)}
						value={status}
						onBlur={() => deactivateEditMode()}
						autoFocus={true}
					/>
				</div>
			) : (
				<div>
					<div onClick={() => activateEditMode()} className={style.status}>
						{props.status || '---------'}
					</div>
				</div>
			)}
		</>
	)
}

export default ProfileStatus
