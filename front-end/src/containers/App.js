import {connect} from 'react-redux';
import App from '../components/App'

const mapStateToProps = ({login}) => ({
  isLogged: login.isLogged
});

const mapDispatchToProps = () => ({
  
})
;

const app = connect(mapStateToProps, mapDispatchToProps)(App);

export default app;