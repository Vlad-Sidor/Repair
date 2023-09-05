import React, {useState} from 'react';
import {Button, Container, Tab, Tabs, Col} from "react-bootstrap";
import CreateDevice from "../components/modals/CreateService";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, DEVICE_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom"
import AllService from "./AllService"
import AllServiceUpdate from "./AllServiceUpdate"
import "../components/css/Admin.css"

const Admin = (device) => {
    const [deviceVisible, setDeviceVisible] = useState(false)
    const history = useHistory()
    let chek = false
    
    return (
        <>
        <Col className="col">
            <Tabs
                defaultActiveKey="home"
                id="uncontrolled-tab-example"
                className="tabs"
                >
                <Tab eventKey="home" title="Услуги" className='tab'>
                    <Col className="colbuttoncreate">
                        <Button
                            variant={"outline-dark"}
                            className="buttoncreate"
                            onClick={() => setDeviceVisible(true)}
                        >
                            Добавить услугу
                        </Button>
                    </Col>
                    <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>

                    <AllServiceUpdate/>
                </Tab>
                <Tab eventKey="contact" title="Список всех услуг" >
                    <AllService/>
                </Tab>
            </Tabs>
        </Col>
        </>
    );
};

export default Admin;
