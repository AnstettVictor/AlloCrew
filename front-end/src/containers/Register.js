import Register from '../components/Register';
import { register, inputLoginChange } from '../Redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = ({login}) => ({
  username: login.data.username,
  _username: login.data._username,
  password: login.data.password,
  _password: login.data._password,
  notification: login.notification,
  registerSuccess: login.registerSuccess
})
;

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(inputLoginChange({[e.target.name]: e.target.value})),
  onSubmit: (e) => {e.preventDefault(); dispatch(register())}
})
;

const exportRegister = connect(mapStateToProps, mapDispatchToProps)(Register);

export default exportRegister;