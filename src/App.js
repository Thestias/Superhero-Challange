import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoginForm from './components/Login/Login';
import NavBar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import SearchPage from './components/SearchPage/SearchPage';
import { Container } from 'react-bootstrap';
import { useAuth } from './contexts/auth-context'
import { useEffect } from 'react';


function App() {
  // TODO: i think the redirects are missing the history handling, add it!
  // TODO: Remember to handle your scret!
  const { isLogged, setIsLogged } = useAuth()

  function setTeamToken() {
    // If there is no localStorage "team" it creates a new one
    // Runs once at page load
    let team = window.localStorage.getItem('team')
    if (team === null) {
      window.localStorage.setItem('team', JSON.stringify({
        lenght: 0,
        villans_lenght: 0,
        heroes_lenght: 0,
        characters: {}
      }))
    }
  }

  useEffect(() => {
    setTeamToken()
  }, [])

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
