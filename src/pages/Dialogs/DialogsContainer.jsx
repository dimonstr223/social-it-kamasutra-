import Dialogs from '.'
import { connect } from 'react-redux'
import {
	sendMessageCreator,
	updateMessageTextCreator,
} from '../../redux/reducers/dialogsReducer'

const mapStateToProps = state => ({
	dialogsPage: state.dialogsPage,
})

const mapDispatchToProps = dispatch => ({
	onMessageChange: text => {
		dispatch(updateMessageTextCreator(text))
	},
	onSendMessage: () => {
		dispatch(sendMessageCreator())
	},
})

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
