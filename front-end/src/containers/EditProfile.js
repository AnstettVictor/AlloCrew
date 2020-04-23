import EditProfile from '../components/EditProfile';
import {fetchProfile, inputProfileChange, patchEditProfile, passId } from '../Redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = ({data}) => {
  
  return({
    firstname: data.editProfile.firstname,
    lastname: data.editProfile.lastname,
    age: data.editProfile.age,
    location: data.editProfile.location,
    title: data.editProfile.title,
    description: data.editProfile.description,
    experience: data.editProfile.experience,
    portfolio: data.editProfile.portfolio,
    picture: data.editProfile.picture,
    bannerpicture: data.editProfile.bannerpicture
  })
};

const mapDispatchToProps = (dispatch, {match}) => ({
  fetchData: dispatch(fetchProfile(match.params.id)),

  handleChange: (e) => dispatch(inputProfileChange({[e.target.name]: e.target.value})), 
  handleChangeEditor: (e, editor) => dispatch(inputProfileChange(
    {
      [editor.sourceElement.parentElement.classList[0]]: editor.getData()
    }
  )), 

  onEditProfileSubmit: (e) => {e.preventDefault(); dispatch(passId(patchEditProfile))}
})
;

const editprofile = connect(mapStateToProps, mapDispatchToProps)(EditProfile);

export default editprofile;