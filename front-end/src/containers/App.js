import {connect} from 'react-redux';
import {checkAuth} from '../Redux/actions';
import App from '../components/App'

const mapStateToProps = ({login, data}) => ({
  isLogged: login.isLogged,
  loading: data.isloading
});

const mapDispatchToProps = (dispatch) => ({
  checkAuth: dispatch(checkAuth())
})
;

const app = connect(mapStateToProps, mapDispatchToProps)(App);

export default app;