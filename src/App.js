import './App.css';
import Course from './Components/Course/Course';
import Header from './Components/Header/Header';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import CourseItemDetail from './Pages/CourseItemDetail/CourseItemDetail';
function App() {
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
