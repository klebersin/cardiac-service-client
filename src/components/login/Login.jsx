import React, { useState } from 'react'
import { FormControl, InputLabel, Input, Button } from '@mui/material';

function Login() {

    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const handleChange = e => setUser({ ...user, [e.target.name]: e.target.value })

    const handleSubmit = e => {
        e.preventDefault()
        console.log(user);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <InputLabel htmlFor="my-input">Usuario</InputLabel>
                    <Input id="username-input" name="username" aria-describedby="username-helper-text" onChange={handleChange} />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input" onChange={handleChange}>Contraseña</InputLabel>
                    <Input id="password-input" name="password" aria-describedby="password-helper-text" onChange={handleChange} />
                </FormControl>
                <Button variant="contained" type="submit">Iniciar sesión</Button>
            </form>
        </div>
    )
}

export default Login
