import React from 'react'

import style from '../scss/components/ProfileInfo.module.scss'

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status,
	}

	activateEditMode = () => {
		this.setState({
			editMode: true,
		})
	}

	deactivateEditMode = () => {
		this.setState({
			editMode: false,
		})
		this.props.updateStatus(this.state.status)
	}

	onStatusChange = e => {
		const newStatus = e.currentTarget.value
		this.setState({
			status: newStatus,
		})
	}

	render() {
		return (
			<>
				{this.state.editMode ? (
					<div>
						<input
							onBlur={() => this.deactivateEditMode()}
							autoFocus={true}
							type='text'
							value={this.state.status}
							onChange={e => this.onStatusChange(e)}
						/>
					</div>
				) : (
					<div>
						<div
							onClick={() => this.activateEditMode()}
							className={style.status}
						>
							{this.props.status || '---------'}
						</div>
					</div>
				)}
			</>
		)
	}
}

export default ProfileStatus
