import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoginForm from './components/Login/Login';
import NavBar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import SearchPage from './components/SearchPage/SearchPage';
import { Container } from 'react-bootstrap';
import { useAuth } from './contexts/auth-context'


function App() {
  // TODO: i think the redirects are missing the history handling, add it!
  // TODO: Remember to handle your scret!
  const { isLogged, setIsLogged } = useAuth()

  return (
    <div className="app">
      <BrowserRouter>

        <NavBar />
        <Container>
          <Switch>
            <Route exact path="/">
              {isLogged ? <Home /> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/login">
              {isLogged ? <Redirect to="/" /> : <LoginForm />}
            </Route>

            <Route exact path="/search">
              <SearchPage />
            </Route>

          </Switch>
        </Container>

      </BrowserRouter>

      {/* <footer>
        <p>© 2021 Alkemy Challange</p>&nbsp;&nbsp;&nbsp;
        <p>Credits</p>&nbsp;&nbsp;
        <p>About</p>
      </footer> */}
    </div >
  );
}
export default App;
