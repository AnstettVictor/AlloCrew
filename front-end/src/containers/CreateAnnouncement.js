import CreateAnnouncement from '../components/CreateAnnouncement';
import { inputCreateAnnouncement,  postCreateAnnouncement, passId} from '../Redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = ({data}) => {

  return({
    category: data.create.category,
    active: data.create.active, 
    voluntary: data.create.voluntary,
    dateStart: data.create.date_start,
    dateEnd: data.create.date_end,
    location: data.create.location,
    title: data.create.title,
    description: data.create.description,
    picture: data.create.picture 
  })
};

const mapDispatchToProps = (dispatch, {match}) => ({
  handleChange: (e) => dispatch(inputCreateAnnouncement({[e.target.name]: e.target.value})), 

  handleChangeEditor: (e, editor) => dispatch(inputCreateAnnouncement(
    {
      ["description"]: editor.getData()
    }
  )),
 
  handleDateChange: (date, evt) => dispatch(inputCreateAnnouncement({[evt.target.classList[1]]: date})),
  
  onCreateAnnouncementSubmit: (e) => {e.preventDefault(); dispatch(passId(postCreateAnnouncement))},

  handleChecked: (e) => {console.log(e.target.checked); dispatch(inputCreateAnnouncement({'voluntary': e.target.checked}))},
  
  handleNotChecked: (e) => {console.log(e.target.checked); dispatch(inputCreateAnnouncement({'voluntary': !e.target.checked}))}
})
;

const createAnnouncement = connect(mapStateToProps, mapDispatchToProps)(CreateAnnouncement);

export default createAnnouncement;