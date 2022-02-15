import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const About = () => (
  <>
    <div>hello from about page</div>
    <nav className="navBar">
      <NavLink to="the-app">the App</NavLink>
      <NavLink to="the-author">the Author</NavLink>
      <Outlet />
    </nav>
  </>
);

export default About;
