import React, {useState} from 'react';
import {Card, Col, Button} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../assets/star.png'
import UpdateService from "../components/modals/UpdateService";
import {useHistory} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts";
import './/css/Serviceitem.css';

const DeviceItem = ({device}) => {
    const [deviceVisible, setDeviceVisible] = useState(false)
    const history = useHistory()
    
    
    return (
        <>
        <Col className={"mt-3 d-flex" } >
            <Card className='card-style'  border={"dark"} onClick={() => history.push(setDeviceVisible(true), device.id)}>
                <div className="mt-1">
                    <div className='card-title'>
                        <h2 className='title'>{device.name}</h2>
                        <h2 className='edittitle'>Редактировать</h2>
                    </div>
                    
                </div>
            </Card>
            
        </Col>
        <UpdateService show={deviceVisible} onHide={() => setDeviceVisible(false) } device={device} id={device.id}/>
        </>
    );
};

export default DeviceItem;
