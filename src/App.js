import './App.css';
import Course from './Components/Course/Course';
import Header from './Components/Header/Header';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import CourseItemDetail from './Pages/CourseItemDetail/CourseItemDetail';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCourse } from './Redux/Action/courseAction';import EjectIcon from '@material-ui/icons/Eject';
function App() {
  const dispath = useDispatch();

  const [btTopIcon,setbtTopIcon] = useState(false);
  //Fetch Course All App
  useEffect(() => {
    //Dispath Store Redux
    dispath(fetchCourse());

    window.addEventListener("scroll",()=>{
      if(window.scrollY > 300){
        setbtTopIcon(true);
      }else{
        setbtTopIcon(false);
      }
    })
  }, []);
  const handleBackToTop = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth',
    });
  }
  return (
    <Router>
      <div className="app">
      <Header />
        <Switch>  
          <Route path="/course-detail/:id" component={CourseItemDetail} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
      {/* If True APPEAR */}
      {
        btTopIcon && 
          <div className="app__backToTop" onClick={()=>handleBackToTop()}>
          <EjectIcon/>
        </div>
      }
   
    </Router>
  );
}

export default App;
