import React, { useState } from 'react'
import { Container, Form, Nav, Navbar } from 'react-bootstrap';

const NavBar = ({filterBySearch}) => {
  const [searchValue, setSearchValue] = useState('');

  const onSearch = (event) => {
    event.preventDefault(); 
    filterBySearch(searchValue);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);

    if (value === '') {
      filterBySearch(''); 
    }
  };

  return (
    <>
     <Navbar expand="lg" bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href="#">
            <div className='brand-color'>مطعم ليلي</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex" onSubmit={onSearch}>
            <Form.Control
              type="text"
              placeholder="ابحث..."
              className="ms-2"
              onChange={handleInputChange}
              value={searchValue}
            />
            <button type='submit' className='btn-search'>بحث</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
 
export default NavBar;