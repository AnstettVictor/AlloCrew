import Header from '../components/Header';
import {logoutUser, setUserParams} from '../Redux/actions';
import {connect} from 'react-redux';

const mapStateToProps = ({login}) => ({
  userId: login.userId,
  isLogged: login.isLogged,
  connectedUser: login.connectedUser,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutUser()),
  openParams: () => dispatch(setUserParams(true))
});


const logins = connect(mapStateToProps, mapDispatchToProps)(Header);

export default logins;