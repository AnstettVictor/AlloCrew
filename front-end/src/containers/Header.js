import Header from '../components/Header';
import {logoutUser} from '../Redux/actions';
import {connect} from 'react-redux';

const mapStateToProps = ({login}) => ({
  isLogged: login.isLogged,
  connectedUser: login.connectedUser,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutUser())
});

const logins = connect(mapStateToProps, mapDispatchToProps)(Header);

export default logins;