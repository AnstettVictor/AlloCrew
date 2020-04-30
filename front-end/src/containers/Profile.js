import Profile from '../components/Profile';
import {fetchProfile, redirect} from '../Redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = ({ data, login }, {match}) => {
  if(!match.params.id){
    console.log('WOW')
  }
  
  const profile = data.profiles;

   console.log("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", profile)
    
    
  return({
    id: profile[0].id,
    firstname: profile[0].firstname,
    lastname: profile[0].lastname,
    age: profile[0].age,
    location: profile[0].location,  
    title: profile[0].title,
    description: profile[0].description,
    experience: profile[0].experience,
    portfolio: profile[0].portfolio,
    picture: profile[0].picture,
    bannerpicture: profile[0].bannerpicture,
  })
};

const mapDispatchToProps = (dispatch, {match}) => ({
  redirect: dispatch(redirect(false)),
  fetchData: dispatch(fetchProfile(match.params.id))
})
;

const profiles = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default profiles;