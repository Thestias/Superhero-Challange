import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginForm from './components/Login/Login';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        {/* <Navbar /> */}
        <main>
          <Switch>
            <Route exact path="/" />
            <Route exact path="/login" component={LoginForm} />
          </Switch>
        </main>
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
