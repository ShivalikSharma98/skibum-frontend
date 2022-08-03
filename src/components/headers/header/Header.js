import React from 'react';
import './Header.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
	return (
		<div className='header'>
			<Navbar collapseOnSelect className='nav' expand='lg'>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>Ski Bum</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							<LinkContainer to='/'>
								<Nav.Link>Home</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/about'>
								<Nav.Link>About</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/weather'>
								<Nav.Link>Weather</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/resorts'>
								<Nav.Link>Resorts</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/posts'>
								<Nav.Link>Backcountry Forum</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default Header;
