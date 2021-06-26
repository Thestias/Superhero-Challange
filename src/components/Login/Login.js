import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { login } from './utils/authenticate.js'
import Loading from '../LoadingComponent/LoadingComponent.js';
import Button from 'react-bootstrap/Button'

function LoginForm() {

    const history = useHistory()

    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])
    const [loading, setLoading] = useState(false)

    function LoginUser(event) {
        let login_status = login(event, email, password)
        login_status.then((data) => {
            if (data === 'Logged in') {
                history.push('/')
            }
        })

    }


    function isLoading() {
        // Checks if an API call was made, if so then replaces the text in the button with a Loading component
        if (loading === true) { return <Loading /> }
        else { return 'Enviar' }
    }

    return (
        <form method="POST" onSubmit={(event) => LoginUser(event)}>
            <div className="label-wrapper">
                <label className="label" htmlFor="username">Email</label>
                <input id="username" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>

            <div className="label-wrapper">
                <label className="label" for="password">Password</label>
                <input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </div>

            <Button variant="dark" type="submit" onClick={() => setLoading(true)}>{isLoading()}</Button>
        </form>
    )
}

export default LoginForm