import { Nav, Navbar, Container, Form, Button, FormControl } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import SearchForm from '../SearchForm/SearchForm'


function NavigationBar() {

    const { isLogged, setIsLogged } = useAuth()

    const history = useHistory()

    function Logout() {
        window.localStorage.removeItem('token')
        setIsLogged(false)
        history.push('/login')
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>Welcome!</Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />


                {isLogged ?
                    /* If the user is logged */
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <SearchForm />
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link onClick={Logout}>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    :
                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        <Navbar.Text className="">Diseña tu propio equipo de superheroes!</Navbar.Text>
                    </Navbar.Collapse>
                }
            </Container >
        </Navbar >
    )
}


export default NavigationBar