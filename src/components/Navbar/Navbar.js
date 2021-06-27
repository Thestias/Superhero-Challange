import { Nav, Navbar, Container } from "react-bootstrap"
import { useAuth } from "../../contexts/auth-context";


function NavigationBar() {

    const { isLogged, setIsLogged } = useAuth()

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>Welcome!</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {isLogged ?
                        /* If the user is logged */
                        <Nav className="ms-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">Logout</Nav.Link>
                        </Nav>
                        :
                        <Nav className="ms-auto">
                            <Nav.Link href="#">Login</Nav.Link>
                            <Nav.Link href="#">Lorem</Nav.Link>
                        </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default NavigationBar