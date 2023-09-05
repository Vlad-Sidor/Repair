import './css/ContainerDescription.css';
import {Card, Col} from "react-bootstrap";
import {useParams} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import {fetchOneDevice} from "../http/deviceAPI";

const ContainerDescription = () => {
   const [device, setDevice] = useState('')
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
      <>
         <Col className="d-flex justify-content-md-center m-3">
         <h1>Наш подход</h1>
         </Col>
         <Col className="d-flex justify-content-md-center m-3">
         </Col>
         
         <div className = "container-description">
            <div className = "container-text">
               <p><textarea disabled readonly className = "text-description" value={device.description}/></p>
            </div>
         </div>
      </>
    );
};


export default ContainerDescription;