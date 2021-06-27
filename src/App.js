import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoginForm from './components/Login/Login';
import NavBar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import { Container } from 'react-bootstrap';
import { useAuth } from './contexts/auth-context'


function App() {

  const { isLogged, setIsLogged } = useAuth()

  return (
    <div className="app">
      <BrowserRouter>

        <NavBar />
        <Container>
          <Switch>
            <Route path="/">
              {isLogged ? <Home /> : <Redirect to="/login" />}
            </Route>

            <Route path="/login">
              {isLogged ? <Redirect to="/" /> : <LoginForm />}
            </Route>

          </Switch>
        </Container>

      </BrowserRouter>

      {/* <footer>
        <p>© 2021 Alkemy Challange</p>&nbsp;&nbsp;&nbsp;
        <p>Credits</p>&nbsp;&nbsp;
        <p>About</p>
      </footer> */}
    </div>
  );
}
export default App;
