import EditUser from '../components/EditUser';
import {fetchProfile, fetchPassword, fetchMail, inputMailChange, inputPasswordChange} from '../Redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = ({ data }) => {  
  return({
    id: data.profiles[0].id,
    firstname: data.profiles[0].firstname,
    lastname: data.profiles[0].lastname,
    age: data.profiles[0].age,
    location: data.profiles[0].location,  
    title: data.profiles[0].title,    
    picture: data.profiles[0].picture,
    bannerpicture: data.profiles[0].bannerpicture,
    password: data.password[0].password,
    mail: data.mail[0].mail,
  })
};

const mapDispatchToProps = (dispatch, {match}) => ({
  handleChangeMail: (e) => dispatch(inputMailChange({[e.target.name]: e.target.value})),
  handleChangePassword: (e) => dispatch(inputPasswordChange({[e.target.name]: e.target.value})),
  fetchDataPassword: dispatch(fetchPassword(match.params.id)),
  fetchDataMail: dispatch(fetchMail(match.params.id)),
  fetchDataProfil: dispatch(fetchProfile(match.params.id)),
})
;

const userData = connect(mapStateToProps, mapDispatchToProps)(EditUser);

export default userData;