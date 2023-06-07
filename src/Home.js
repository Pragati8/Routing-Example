import React from 'react';
import {useContext} from 'react';
import {Login} from './Context';
import {Outlet} from 'react-router-dom';

function Home() {
    const {login, setLogin} = useContext(Login);
    return (
        <div>
            <h1>Home Page</h1>
            <h4>This is home page, we have access {login} here from context.</h4>
            <Outlet />
        </div>
    )
}

export default Home;