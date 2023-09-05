import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from 'react-router-dom';
import {fetchOneDevice} from "../http/deviceAPI";
import Footer from "../components/Footer.js";
import ContainerReviews from "../components/ContainerReviews.js";
import ContainerDescription from "../components/ContainerDescription.js";
import Quiz from "../components/Quiz";
import '../components/css/app.css'

const DevicePage = () => {
    const [device, setDevice] = useState('')
    const {id} = useParams()
    console.log(device.name)
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <>
        <Card className="app">
        <Container className="mt-3">
            <Row>
                <Col className="d-flex justify-content-md-center m-3" >
                    <h1>Ремонт  {device.name}</h1>
                </Col>
            </Row>
        </Container >
        <Quiz/>
        <ContainerReviews/>
        <ContainerDescription/>
        <Footer/>
        </Card>
        </>
    );
};

export default DevicePage;
