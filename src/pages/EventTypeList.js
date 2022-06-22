import React, { useEffect, useState } from "react";
import { Card, Button, CardText, Row, Col, CardTitle } from 'reactstrap'
import { getEventTypeById, getEventTypeList } from '../config/services/EventTypeService';


const EventTypeList = (props) => {
    const [eventTypeList, setEventTypeList] = useState([]);
    useEffect(() => {
        getEventTypeList().then(res => setEventTypeList(res));
    }, [])
    return (
        <Row style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', backgroundColor: "#76b5c5" }}>
            {
                eventTypeList.map((item) =>
                    <Col sm="6">
                        <Card body style={{ backgroundColor: "#154c79" }}>
                            <CardTitle style={{ color: "#eeeee4" }} tag="h5">{item.name}</CardTitle>
                            <CardText style={{ color: "#eeeee4" }}>Güncel {item.name} Etkinliklerini Gör, Hızlı ve Güvenli Bir Şekilde Biletini Al</CardText>
                            <Button color="info" href={"/EventType/" + item.id}>Git</Button>
                        </Card>
                    </Col>
                )
            }
        </Row>
    )
}

export default EventTypeList;