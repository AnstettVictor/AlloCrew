import EditProfile from '../components/EditProfile';
import {fetchProfile, inputProfileChange, patchEditProfile, passId } from '../Redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = ({data}) => {
  
  return({
    firstname: data.profiles[0].firstname,
    lastname: data.profiles[0].lastname,
    age: data.profiles[0].age,
    location: data.profiles[0].location,
    title: data.profiles[0].title,
    description: data.profiles[0].description,
    experience: data.profiles[0].experience,
    portfolio: data.profiles[0].portfolio,
    picture: data.profiles[0].picture,
    bannerpicture: data.profiles[0].bannerpicture
  })
};

const mapDispatchToProps = (dispatch, {match}) => ({
  handleChange: (e) => dispatch(inputProfileChange({[e.target.name]: e.target.value})), 

  handleChangeEditor1: (e, editor) => dispatch(inputProfileChange(
    {
      ["description"]: editor.getData()
    }
  )), 
  handleChangeEditor2: (e, editor) => dispatch(inputProfileChange(
    {
      ["experience"]: editor.getData()
    }
  )), 

  onEditProfileSubmit: (e) => {e.preventDefault(); dispatch(passId(patchEditProfile))}
})
;

const editprofile = connect(mapStateToProps, mapDispatchToProps)(EditProfile);

export default editprofile;