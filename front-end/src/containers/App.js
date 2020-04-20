import {connect} from 'react-redux';
import {checkAuth} from '../Redux/actions';
import App from '../components/App'

const mapStateToProps = ({login}) => ({
  isLogged: login.isLogged
});

const mapDispatchToProps = (dispatch) => ({
  checkAuth: dispatch(checkAuth())
})
;

const app = connect(mapStateToProps, mapDispatchToProps)(App);

export default app;