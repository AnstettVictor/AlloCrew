import EditProfile from '../components/EditProfile';
import {fetchProfile} from '../Redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = ({ profile }) => {
  console.log(profile.firstname)
  return({
    firstname: profile.firstname,
    lastname: profile.lastname,
    age: profile.age,
    location: profile.location,  
    title: profile.title,
    description: profile.description,
    experience: profile.experience,
    portfolio: profile.portfolio,
    picture: profile.picture,
    bannerpicture: profile.bannerpicture,
    id: profile.id,
  })
};

const mapDispatchToProps = (dispatch, {match}) => ({
    
  fetchData: dispatch(fetchProfile(match.params.id))
})
;

const profile = connect(mapStateToProps, mapDispatchToProps)(EditProfile);

export default profile;