import Profile from '../components/Profile';
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
  })
};

const mapDispatchToProps = (dispatch, {match}) => ({
    
  fetchData: dispatch(fetchProfile(match.params.id))
})
;

const profile = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default profile;