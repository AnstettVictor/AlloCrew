import Header from '../components/Header';
import {logUser} from '../Redux/actions';
import {connect} from 'react-redux';

const mapStateToProps = ({login}) => ({
  isLogged: login.isLogged,
  connectedUser: login.connectedUser,
});

const mapDispatchToProps = () => ({});

const logins = connect(mapStateToProps, mapDispatchToProps)(Header);

export default logins;