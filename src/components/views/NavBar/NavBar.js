import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<Navbar bg="primary" data-bs-theme="dark" className="my-4 rounded">
			<Container>
				<Navbar.Brand as={NavLink} to={'/'}>
					Waiter.app
				</Navbar.Brand>
				<Nav>
					<Nav.Link as={NavLink} to={'/'}>
						Home
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavBar;
