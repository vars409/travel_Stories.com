import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <SideNav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/destinations">Destinations</Link></li>
        <li><Link to="/bookings">Bookings</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </SideNav>
  );
};

export default Sidebar;

const SideNav = styled.div`
  width: 200px;
  background: #eee;
  height: 100vh;
  padding: 20px;
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin: 20px 0;
      
      a {
        text-decoration: none;
        color: #333;
      }
    }
  }
`;
