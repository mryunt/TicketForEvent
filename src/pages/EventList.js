import React, { useEffect, useState } from "react";
import { Card, Button, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter, CardText, Row, Col, CardTitle } from "reactstrap";
import { getEventList } from "config/services/EventService";

const EventList = (props) => {
    const [eventList, setEventList] = useState([]);
    useEffect(() => {
        getEventList().then(res => setEventList(res));
    }, [])
    var date;
    date = new Date();
    date = date.getUTCFullYear() + '-' +
        ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
        ('00' + date.getUTCDate()).slice(-2) + ' ' +
        ('00' + date.getUTCHours()).slice(-2) + ':' +
        ('00' + date.getUTCMinutes()).slice(-2) + ':' +
        ('00' + date.getUTCSeconds()).slice(-2);
    return (
        <Row style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "#76b5c5" }}>
            {
                eventList.filter(({ endDate }) => endDate >= date).map((item) =>
                    <Col sm="4" style={{ padding: "0.35%" }}>
                        <Card body style={{ display: "flow", alignItems: "center", backgroundColor: "#154c79", height: "50vh" }}>
                            <CardTitle style={{ color: "#eeeee4" }} tag="h5">{item.name}</CardTitle>
                            <CardText style={{ color: "#eeeee4" }}>{item.eventTypeName} Türündeki {item.name} Etkinliği {item.salonName}' da {item.startDate} Günü Başlıyor. Kaçırma!</CardText>
                            <Button style={{ position: "absolute", bottom: 10 }} color="info" href={"/Event/" + item.id}>Detayları Görmek İçin Tıkla!</Button>
                        </Card>
                    </Col>
                )
            }
        </Row>
    )
}
export default EventList;