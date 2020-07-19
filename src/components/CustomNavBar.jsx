import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import msitlogo from './msitlogo.png'
import './CustomNavBar.css'

const bar = {backgroundColor: '#001340'};

const text = {color: 'white'};

export default class CustomNavBar extends Component {
    render() {
        return (
            
            <Navbar  style={bar} sticky="top" >
            <Navbar.Brand href="/">
              <img src={msitlogo} width="250" height="50" className="d-inline-block"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/event">Event</Nav.Link>
                <Nav.Link href="/assignstudents">Assign Students</Nav.Link>
                <NavDropdown title="Batch grouping" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/initiatepreferences">Initiate preferences</NavDropdown.Item>
                  <NavDropdown.Item href="/manualupload">Manual upload</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/gradingpolicy">Grading Policy</Nav.Link>
                <NavDropdown title="Grades" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Grading</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Review Grade</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/event">Logout</Nav.Link>
              </Nav>
              {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form> */}
            </Navbar.Collapse>
          </Navbar>
            
        );
    }
}