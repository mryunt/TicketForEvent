import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventList } from "config/services/EventService";
import { Card, Button, CardText, Row, Col, CardTitle } from 'reactstrap'



const EventType = () => {
    const { id } = useParams();
    const [eventList, setEventList] = useState([]);
    useEffect(() => {
        getEventList().then(res => setEventList(res));
    }, [])

    return (
        <Row>
            {
                eventList.filter(({ eventTypeId }) => eventTypeId == id).map((item) => (
                    <Col sm="2" style={{ padding: "0.35%" }}>
                        <Card body style={{ backgroundColor: "#154c79", height: "100%" }}>
                            <CardTitle style={{ color: "#eeeee4" }} tag="h5">{item.name}</CardTitle>
                            <CardText style={{ color: "#eeeee4" }}>{item.eventTypeName} Türündeki {item.name} Etkinliği {item.salonName}' da {item.startDate} Günü Başlıyor. Kaçırma!</CardText>
                            <Button color="info" href={"/Event/" + item.id}>Detayları Görmek İçin Tıkla!</Button>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    )
}

export default EventType;