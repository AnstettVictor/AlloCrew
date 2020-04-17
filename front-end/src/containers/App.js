import App from '../components/App';
import {connect} from 'react-redux';

const mapStateToProps = ({isLogged}) => {

  return({
    isLogged
  })
};

const mapDispatchToProps = (dispatch) => ({
  
})
;

const app = connect(mapStateToProps, mapDispatchToProps)(App);

export default app;