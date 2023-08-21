import React from "react"
import { Router } from "@reach/router"
import PrivateRoute from "../components/Auth/PrivateRoute"
import Login from "../components/Auth/Login"
import AnswersAdmin from "../components/AnswersAdmin/AnswersAdmin"

const App = () => (
    <Router>
        <PrivateRoute path="/secret/answersadmin" component={AnswersAdmin} location={''} />
        <Login path="/secret/login" component={Login} />
    </Router>
)

export default App