import PropTypes from "prop-types"
import { navigate, Link } from "gatsby"
import { useAuthValue } from './AuthContext'
import React, { useState } from "react";
import { auth } from "../Firebase/Firebase";
import { Box, Flex, Label, Input, Button } from 'theme-ui';
import { signInWithEmailAndPassword } from "firebase/auth";

const PrivateRoute = ({ component: Component, location, ...rest }) => {

    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, 'erinswyoo@gmail.com', password);
            navigate(`/secret/answersadmin`);
        } catch (err) {
            setError(err.message);
        }
    };

    const { currentUser } = useAuthValue()
    if (!currentUser) {
        return (
            <>
                {error && <div className="auth__error">{error}</div>}
                <div className="login">
                    <Box as="form" onSubmit={handleSubmit}>
                        <Flex sx={{ flexDirection: 'column' }}>
                            <Label htmlFor="password">Please enter password to see work</Label>
                            <Flex sx={{ flexDirection: 'row', gap: 2, justifyContent: 'space-between', alignItems: 'baseline' }}>
                                <Input type="password" name="password" id="password" mb={3} onChange={(e) => setPassword(e.target.value)} />
                                <Button>➔</Button>
                            </Flex>
                            <Link sx={{
                                letterSpacing: -0.5, fontSize: 4, color: 'muted', m: 3, textDecoration: 'none', fontWeight: 'bold',
                                '&.active': {
                                    color: 'primary',
                                },
                            }} to="/contact" activeClassName="active">Request a password</Link>
                        </Flex>
                    </Box>
                </div>
            </>
        );
    }

    return <Component {...rest} />
}

PrivateRoute.propTypes = {
    component: PropTypes.any.isRequired,
}

export default PrivateRoute