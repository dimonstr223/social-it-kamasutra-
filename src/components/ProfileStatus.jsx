import React from 'react'

import style from '../scss/components/ProfileInfo.module.scss'

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
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
							value={this.props.aboutMe}
						/>
					</div>
				) : (
					<div>
						<div
							onClick={() => this.activateEditMode()}
							className={style.status}
						>
							{this.props.aboutMe}
						</div>
					</div>
				)}
			</>
		)
	}
}

export default ProfileStatus
