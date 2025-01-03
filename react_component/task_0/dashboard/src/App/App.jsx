import React, {Component, Fragment } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import Notifications from '../Notifications/Notifications.js';
import CourseList from '../CourseList/CourseList.js';
import PropTypes from 'prop-types'; 
import { getLatestNotification } from '../utils/utils.js';


export default class App extends Component {
  render() {
    let {
      isLoggedIn,
    } = this.props;
    let  listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];
  
    let  listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification()} }
    ];
  
  return (
    <Fragment>
    <div className="App">
    <div className="upperside">

    <Notifications listNotifications={listNotifications} />
      <Header />
      </div>

      {
            isLoggedIn === false &&
            <Login />
          }
          {
            isLoggedIn === true &&
            <CourseList listCourses={listCourses} />
          }
      <Footer />
      </div>
      </Fragment>
    );  
  };
};
App.propTypes = {
  isLoggedIn: PropTypes.bool
};
App.defaultProps = {
  isLoggedIn: false,
};
