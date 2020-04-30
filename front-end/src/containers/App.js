import {connect} from 'react-redux';
import {checkAuth, setUserParams, updateAnnouncement, clearNotification, changeEmail, changePassword} from '../Redux/actions';
import App from '../components/App'

const mapStateToProps = ({login, data}) => ({
  isLogged: login.isLogged,
  loading: data.isloading,
  userParams: login.userParams,
  email: data.email,
  password: data.password,
  notification: login.notification
});

const mapDispatchToProps = (dispatch) => ({
  
  checkAuth: dispatch(checkAuth()),
  closeParams:() => {dispatch(setUserParams(false)), dispatch(clearNotification())},
  inputChange: (e) => dispatch(updateAnnouncement({[e.target.name]: e.target.value})),
  changeEmail: () => dispatch(changeEmail()),
  changePassword: () => dispatch(changePassword())
})
;

const app = connect(mapStateToProps, mapDispatchToProps)(App);

export default app;