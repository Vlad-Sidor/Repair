import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DeviceList from "../components/DeviceListUpdate";
import TypeBar from "../components/TypeBar";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {device} = useContext(Context)
    console.log(device)

    useEffect(() => {
        fetchDevices().then(data => {
            device.setDevices(data.rows)
            
        })
    }, [])

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 2).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.selectedType, device.selectedBrand,])

    return (
        <Container>
            <Row className=" d-flex ">
                <Col>
                    <DeviceList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>

        
    );
});

export default Shop;
