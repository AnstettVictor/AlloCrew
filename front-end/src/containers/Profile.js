import Profile from '../components/Profile';
import {fetchProfile, redirect, passId} from '../Redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = ({ data, login }, {match}) => {

  //données profiles + fallbacks
  if(match.params.id) {
    var profile = data.profiles.find(elem => elem.id == match.params.id) || data.profiles[0]
  }else {
    var profile = login.userInfo
  }

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
  redirect: dispatch(redirect(false)),
  fetchData: dispatch(fetchProfile(match.params.id)),
  fetchHomeProfile: dispatch(passId(fetchProfile)),
})
;

const profiles = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default profiles;