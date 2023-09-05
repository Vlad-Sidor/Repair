import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row, Card} from "react-bootstrap";
import DeviceItem from "./DeviceItemUpdate"; /* DeviceItemUpdate*/
import './/css/Serviceitem.css';

const DeviceList = observer(() => {
    const {device} = useContext(Context)
    return (
        <>
        <Row className="d-flex  flex-column ">
            <div>
                <h2 className='title-servicelist'>Список услуг</h2>
            </div>
            {device.devices.map(device =>
                <DeviceItem key={device.id} device={device}/>
            )}
        </Row>
        </>
    );
});

export default DeviceList;
