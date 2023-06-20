import React, { useState } from "react";
import { navigate, Link } from "gatsby";
import { auth } from "../Firebase/Firebase";
import { Box, Flex, Label, Input, Button } from 'theme-ui';
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, 'erinswyoo@gmail.com', password);
            navigate(`/secret/test`);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            {error && <div className="auth__error">{error}</div>}
            <Box as="form" onSubmit={handleSubmit} sx={{ textAlign: 'center', p: 5, position: 'fixed', width: '375px', height: '250px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', border: '2px solid', borderRadius: 10 }}>
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
        </>
    );
};

export default Login;