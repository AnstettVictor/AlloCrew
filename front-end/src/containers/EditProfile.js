import EditProfile from '../components/EditProfile';
import {fetchProfile, inputProfileChange, patchEditProfile, passId } from '../Redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = ({login}) => {
  const data = login.userInfo

  return({
    firstname: data.firstname,
    lastname: data.lastname,
    age: data.age,
    location: data.location,
    title: data.title,
    description: data.description,
    experience: data.experience,
    portfolio: data.portfolio,
    picture: data.picture,
    bannerpicture: data.bannerpicture,
    redirect: login.redirect
  })
};

const mapDispatchToProps = (dispatch, {match}) => ({

  fetchProfile: dispatch(fetchProfile()),

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

  onEditProfileSubmit: (e) => {e.preventDefault(); dispatch(patchEditProfile())}
})
;

const editprofile = connect(mapStateToProps, mapDispatchToProps)(EditProfile);

export default editprofile;