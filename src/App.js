import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginForm from './components/Login/Login';
import NavBar from './components/Navbar/Navbar'
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/auth-context'


function App() {
  return (
    <div className="app">
      <BrowserRouter>

        <AuthProvider>
          <NavBar />
          <Container>
            <Switch>
              <Route exact path="/" />
              <Route exact path="/login" component={LoginForm} />
            </Switch>
          </Container>
        </AuthProvider>

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
