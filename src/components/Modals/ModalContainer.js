import { connect } from 'react-redux'
import { open, close } from '../../redux/modal'
import Modal from './Modal'
import WithWindowSize from '../WithWindowSize'

const mapStateToProps = state => state.modal

const mapDispatchToProps = dispatch => ({
  open: (type, properties) => dispatch(open(type, properties)),
  close: () => dispatch(close())
})

export default connect(mapStateToProps, mapDispatchToProps)(WithWindowSize(Modal))
