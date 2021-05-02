import './App.css';
import Course from './Components/Course/Course';
import Header from './Components/Header/Header';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import CourseItemDetail from './Pages/CourseItemDetail/CourseItemDetail';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCourse } from './Redux/Action/courseAction';
function App() {
  const dispath = useDispatch();
  //Fetch Course All App
  useEffect(() => {
    //Dispath Store Redux
    dispath(fetchCourse());
  }, []);
  return (
    <Router>
      <div className="app">
      <Header />
        <Switch>  
          <Route path="/course-detail/:id" component={CourseItemDetail} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
