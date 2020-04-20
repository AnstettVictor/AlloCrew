import Login from '../components/Login';
import {logUser, inputLoginChange} from '../Redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = ({ login }) => {

  return({
    username: login.data.username,
    password: login.data.password,
    isLogged: login.isLogged
  })
};

const mapDispatchToProps = (dispatch) => ({
  handleChange: (e) => dispatch(inputLoginChange({[e.target.name]: e.target.value})),
  login: (e) => { e.preventDefault(); dispatch(logUser()) }
})
;

const login = connect(mapStateToProps, mapDispatchToProps)(Login);

export default login;
