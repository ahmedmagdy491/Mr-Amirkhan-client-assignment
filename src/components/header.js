import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = ({ token }) => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="/">Task</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto">
						{!token ? (
							<>
								<Nav.Link>
									<Link
										className="text-decoration-none text-white"
										to="/login"
									>
										Login
									</Link>
								</Nav.Link>
								<Nav.Link>
									<Link
										className="text-decoration-none text-white"
										to="/signup"
									>
										Register
									</Link>
								</Nav.Link>
							</>
						) : (
							<Nav.Link
								onClick={() => {
									localStorage.removeItem('token');
								}}
							>
								Logout
							</Nav.Link>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
