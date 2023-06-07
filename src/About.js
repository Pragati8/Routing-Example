import React from 'react';
import {useContext} from 'react';
import {Login} from './Context';
import {useNavigate} from 'react-router-dom'

function About() {
    const {login, setLogin} = useContext(Login);
    const navigate = useNavigate();
    setLogin('loginStateUpdated');

    const demoHandler = () => navigate('/demo');
    const home2Handler = () => navigate('/home2');

    return (
        <div>
            <h1>About Page</h1>
            <h4>This is about page, we have access {login} from context.</h4>
            <button onClick={demoHandler}>Go to demo</button>
            <button onClick={home2Handler}>Go to home2</button>
        </div>
    )
}

export default About;