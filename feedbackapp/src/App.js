import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import FeedbackList from './components/FeedbackList.jsx';
import FeedbackData from './data/FeedBackData'
import FeedbackStats from './components/FeedbackStats.jsx';
import FeedbackForm from './components/FeedbackForm.jsx';
import About from './pages/About.jsx';
import AboutIcon from './components/AboutIcon.jsx';
// import Post from './components/Post.jsx';

function App() {
  const[feedback,  setFeedBack] = useState(FeedbackData);

  const addFeedBack = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedBack([newFeedback,...feedback])
  }

  const deleteFeedback = (id) => {
    //console.log('App',id);
    if(window.confirm('Are you sure you want to delete?')){
      setFeedBack(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <Router>
         <Header text="Hello World" />
         <div className='container'>
          <Routes>
              <Route exact path="/"
                element ={ 
                  <>
                      <FeedbackForm />
                      <FeedbackStats feedback ={feedback}/>
                      <FeedbackList />
                  </>
                
                }
              ></Route>
             

              <Route path='/about' element= {<About/>}/>
              {/* <Route path='/post/*' element= {<Post/>}/> */}
          </Routes>
          <AboutIcon/>

         </div>
    </Router>
  );
}

export default App;
