import Profile from '../components/Profile';
import {fetchProfile} from '../Redux/actions'
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
    description: profile.description,
    experience: profile.experience,
    portfolio: profile.portfolio,
    picture: profile.picture,
    bannerpicture: profile.bannerpicture,
  })
};

const mapDispatchToProps = (dispatch, {match}) => ({
    
  fetchData: dispatch(fetchProfile(match.params.id))
})
;

const profiles = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default profiles;