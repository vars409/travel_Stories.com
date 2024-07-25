import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <h1>Travel Dashboard</h1>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  height: 60px;
  background: #333;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;
