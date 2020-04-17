import Login from '../components/Login';
import {checkAuth, inputChange} from '../Redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = ({ localUser, isLogged }) => {

  return({
    userEmail: localUser.username,
    userPass: localUser.password,
    isLogged
  })
};

const mapDispatchToProps = (dispatch) => ({
  handleChange: (e) => dispatch(inputChange({[e.target.name]: e.target.value})),
  checkAuth: (e) => { e.preventDefault(); dispatch(checkAuth()) }
})
;

const login = connect(mapStateToProps, mapDispatchToProps)(Login);

export default login;