import EditUser from '../components/EditUser';
import {fetchProfile, inputProfileChange} from '../Redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = ({ data }) => {
  const profile = data.profiles[0];
  return({
    id: profile.id,
    firstname: profile.firstname,
    lastname: profile.lastname,
    age: profile.age,
    location: profile.location,  
    title: profile.title,    
    picture: profile.picture,
    bannerpicture: profile.bannerpicture,
  })
};

const mapDispatchToProps = (dispatch, {match}) => ({
  handleChange: (e) => dispatch(inputProfileChange({[e.target.name]: e.target.value})), 
  fetchData: dispatch(fetchProfile(match.params.id))
})
;

const profiles = connect(mapStateToProps, mapDispatchToProps)(EditProfile);

export default profiles;