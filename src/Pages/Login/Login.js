import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../store/Actions/authActions';
// import { loginUser } from '../../store/Actions/authActions';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const auth = useSelector(state => state.auth);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await dispatch(loginUser({ username, password }));
            console.log('auth: ', auth);
            // Redirect to home screen after successful login
            // navigate('/home');
        } catch (error) {
            console.error('Login error:', error);
            // Handle login error
        }
    };

    return (
        <>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login;