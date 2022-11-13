import Dialogs from '.'
import { connect } from 'react-redux'
import {
	sendMessageCreator,
	updateMessageTextCreator,
} from '../../redux/reducers/dialogsReducer'
import whithAuthNavigate from '../../hoc/whithAuthNavigate'

const mapStateToProps = state => ({
	dialogsPage: state.dialogsPage,
})

const mapDispatchToProps = dispatch => ({
	updateMessageText: text => {
		dispatch(updateMessageTextCreator(text))
	},
	sendMessage: () => {
		dispatch(sendMessageCreator())
	},
})

export default whithAuthNavigate(
	connect(mapStateToProps, mapDispatchToProps)(Dialogs)
)
