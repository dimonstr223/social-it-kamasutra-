import Dialogs from '.'
import { connect } from 'react-redux'
import { sendMessage } from '../../redux/reducers/dialogsReducer'
import whithAuthNavigate from '../../hoc/whithAuthNavigate'
import { compose } from 'redux'

const mapStateToProps = state => ({
	dialogsPage: state.dialogsPage,
})

export default compose(
	whithAuthNavigate,
	connect(mapStateToProps, { sendMessage })
)(Dialogs)
