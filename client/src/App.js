import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";
import './components/css/app.css'

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(false)

    console.log(process.env.REACT_APP_API_URL)

    useEffect(() => {
            user.setUser(true)
            user.setIsAuth(true)
    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    return (
        <BrowserRouter className = 'app'>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
        
    );
});

export default App;
