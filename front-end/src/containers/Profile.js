import Profile from '../components/Profile';
import {fetchProfile, redirect} from '../Redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = ({ data, login }, {match}) => {
  if(!match.params.id){
    console.log('WOW')
  }
  
  const profile = login.userInfo;
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
  redirect: dispatch(redirect(false))
  // fetchData: dispatch(fetchProfile(match.params.id))
})
;

const profiles = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default profiles;