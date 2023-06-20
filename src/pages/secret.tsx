import React from "react"
import { Router } from "@reach/router"
import PrivateRoute from "../components/Auth/PrivateRoute"
import TestWork from "../components/Work/TestWork"
import Login from "../components/Auth/Login"
import About from "../components/About/About"

const App = () => (
    <Router>
        <PrivateRoute path="/secret/test" component={TestWork} location={undefined} />
        <Login path="/secret/login" component={Login} />
        <About path="/contact" component={About} />
    </Router>
)

export default App