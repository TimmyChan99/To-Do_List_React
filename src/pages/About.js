import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const About = () => (

  <div className="about__content">
    <nav className="about__list">
      <NavLink to="the-app">the App</NavLink>
      <NavLink to="the-author">the Author</NavLink>
    </nav>
    <Outlet />
  </div>
);

export default About;
