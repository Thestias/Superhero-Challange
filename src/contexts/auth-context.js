import { createContext, useContext, useState } from "react";


const AuthContext = createContext()

function AuthProvider(props) {

    let logged;

    /* Checks if the user is already logged */
    if (window.localStorage.getItem('token')) { logged = true }
    else { logged = false }

    const [isLogged, setIsLogged] = useState(logged)

    return (
        <AuthContext.Provider value={{ isLogged, setIsLogged }} {...props} />
    )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }