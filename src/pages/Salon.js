import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById, getEventList } from "config/services/EventService";
import { CardText, Row, Col, Card, CardTitle, Button } from "reactstrap";


const Salon = () => {
    const { id } = useParams();
    const [eventList, setEventList] = useState([]);
    useEffect(() => {
        getEventList().then(res => setEventList(res));
    }, [])
    useEffect(() => {
        getEventById(id).then(res => setEventObject(res));
    })
    var date;
    date = new Date();
    date = date.getUTCFullYear() + '-' +
        ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
        ('00' + date.getUTCDate()).slice(-2) + ' ' +
        ('00' + date.getUTCHours()).slice(-2) + ':' +
        ('00' + date.getUTCMinutes()).slice(-2) + ':' +
        ('00' + date.getUTCSeconds()).slice(-2);
    return (
        <Row style={{ backgroundColor: "#154c79" }}>
            {
                eventList.filter(({ endDate, salonId }) => endDate >= date & salonId == id).map((item) =>
                    <Col sm="4" style={{ padding: "0.35%" }}>
                        <Card body style={{ backgroundColor: "#154c79", height: "100%" }}>
                            <CardTitle style={{ color: "#eeeee4" }} tag="h5">{item.name}</CardTitle>
                            <CardText style={{ color: "#eeeee4", height: "70%" }}>{item.eventTypeName} Türündeki {item.name} Etkinliği {item.salonName}' da {item.startDate} Günü Başlıyor. Kaçırma!</CardText>
                            <Button color="info" href={"/Event/" + item.id}>Detayları Görmek İçin Tıkla!</Button>
                        </Card>
                    </Col>
                )
            }
        </Row>
    )
}

export default Salon;