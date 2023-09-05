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
    
   /* <Button
                    style={{width: 100, cursor: 'pointer'}}
                    variant={"outline-dark"}
                    className="mt-2 p-2 ml-2"
                    onClick= {() => {history.push(device.id);setDeviceVisible(true);}}
                    >
                    Изменить
    </Button>
    <UpdateService show = {deviceVisible} onHide={() => setDeviceVisible(false)}/>*/
    
    return (
        <>
        <Col className={"mt-3 d-flex" } >
            <Card className='card-style'  border={"dark"} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
                <div className="mt-1  align-items-center">
                    <div className='card-title'>
                        <h2 className='title'>{device.name}</h2>
                    </div>
                    
                </div>
            </Card>
            
        </Col>
        </>
    );
};

export default DeviceItem;
