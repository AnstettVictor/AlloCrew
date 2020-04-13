import React, {useState} from 'react';
import './style.scss';
import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import DatePicker from 'react-datepicker'



const App = () => {

const [startDate, setStartDate] = useState(new Date());
return(
  <>
    <div className="app__header" >
      <Header />
    </ div>
    <div className="app__main">
      <DatePicker className='input' selected={startDate} />
    </div>
    <div className="app__footer">
      <Footer />
    </div>
  </>
)
}
;

export default App;