import React, { useEffect, useState } from "react";
import { Card, Button, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter, CardText, Row, Col, CardTitle } from "reactstrap";
import { getEventList } from "config/services/EventService";

const OldEventList = (props) => {
    const [eventList, setEventList] = useState([]);
    useEffect(() => {
        getEventList().then(res => setEventList(res));
    }, [])
    const [modal2, setModal2] = useState(false);
    var date;
    date = new Date();
    date = date.getUTCFullYear() + '-' +
        ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
        ('00' + date.getUTCDate()).slice(-2) + ' ' +
        ('00' + date.getUTCHours()).slice(-2) + ':' +
        ('00' + date.getUTCMinutes()).slice(-2) + ':' +
        ('00' + date.getUTCSeconds()).slice(-2);
    return (
        <Row style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', backgroundColor: "#76b5c5" }}>
            {
                eventList.filter(({ endDate }) => endDate < date).map((item) =>
                    <Col sm="2" style={{ padding: "0.35%" }}>
                        <Card body style={{ backgroundColor: "#154c79", height: "100%" }}>
                            <CardTitle style={{ color: "#eeeee4" }} tag="h5">{item.name}</CardTitle>
                            <CardText style={{ color: "#eeeee4" }}>Güncel {item.name} Etkinliklerini Gör, Hızlı ve Güvenli Bir Şekilde Biletini Al</CardText>
                            <CardText style={{ color: "#eeeee4" }}>{item.eventTypeName} Türündeki {item.name} Etkinlik {item.endDate} Günü Bitti.
                                İstersen Güncel Etkinliklere Aşağıdaki Butondan Ulaşabilirsin!</CardText>
                            <Button color="info" href={"/EventTypeList"}>Detayları Görmek İçin Tıkla!</Button>
                        </Card>
                    </Col>
                )
            }
        </Row>
    )
}
export default OldEventList;