import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, DEVICE_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'
import Logo from '../assets/Group_4.svg'
import Image from 'react-bootstrap/Image';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="light" variant="light">
            <Container>
                <NavLink  to={ADMIN_ROUTE}>
                <Image src={Logo}/>    
                </NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-dark"}
                            onClick={() => history.push(ADMIN_ROUTE)}
                        >
                            <td>+7(930)33-33-896</td>
                        </Button>
                        <Button
                            variant={"outline-dark"}
                            onClick={() => history.push(ADMIN_ROUTE)}
                            className="ml-2"
                        >
                            Aдмин панель
                        </Button>
    
                        <Button
                            variant={"outline-dark"}
                            onClick={() => logOut()}
                            className="ml-2"
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-dark"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
});

export default NavBar;
