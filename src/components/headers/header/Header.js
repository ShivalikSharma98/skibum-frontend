import React from 'react';
import './Header.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
	return (
		<div className='header'>
			<Navbar collapseOnSelect bg='light' expand='lg'>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>Skibum</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							<LinkContainer to='/'>
								<Nav.Link>Home</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/resorts'>
								<Nav.Link>Resorts</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/weather'>
								<Nav.Link>Weather</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/gallery'>
								<Nav.Link>Gallery</Nav.Link>
							</LinkContainer>
							<NavDropdown title='Backcountry Forum' id='basic-nav-dropdown'>
								<LinkContainer to='/posts'>
									<NavDropdown.Item>Forum</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/posts/login'>
									<NavDropdown.Item>My Posts</NavDropdown.Item>
								</LinkContainer>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default Header;
