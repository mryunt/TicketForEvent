import { getEventById, getEventList } from "config/services/EventService";
import { getImagesList } from "config/services/ImagesService";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../pages/styleS.css"
import { Carousel } from "react-responsive-carousel";
import {
    Row,
    Col,
    Card,
    CardTitle,
    Button
} from "reactstrap";


const Event = () => {
    const { id } = useParams();
    const [event, setEvent] = useState();
    useEffect(() => {
        getEventById(id).then(res => setEvent(res));
    }, [])
    const [imageList, setImageList] = useState([]);
    useEffect(() => {
        getImagesList().then(res => setImageList(res));
    }, [])
    const [eventList, setEventList] = useState([]);
    useEffect(() => {
        getEventList().then(res => setEventList(res));
    }, [])
    return (
        <div>
            <Row>
                <Carousel dynamicHeight="true" >
                    <div>
                        {
                            imageList.map((item) =>
                                <img src={item.image} />
                            )
                        }
                        <p className="legend">Etkinlik 1</p>
                    </div>
                </Carousel>
                {
                    eventList.filter(({ eventTypeId }) => eventTypeId == id).map((item) => (
                        <Col sm="2" style={{ padding: "0.35%" }}>
                            <Card body style={{ backgroundColor: "#154c79", height: "100%" }}>
                                <CardTitle style={{ color: "#eeeee4" }} tag="h5">{item.name}</CardTitle>
                                <CardText style={{ color: "#eeeee4" }}>{item.eventTypeName} Türündeki {item.name} Etkinliği {item.salonName}' da {item.startDate} Günü Başlıyor. Kaçırma!</CardText>
                                <CardText style={{ color: "#eeeee4" }}>{item?.itemTypeName !== undefined ? <span>{item.itemTypeName}</span> : " "}</CardText>
                                <CardText style={{ color: "#eeeee4" }}>{item?.startDate !== undefined ? <span>{item.startDate}</span> : " "}</CardText>
                                <CardText style={{ color: "#eeeee4" }}>{item?.endDate !== undefined ? <span>{item.endDate}</span> : " "}</CardText>
                                <CardText style={{ color: "#eeeee4" }}>{item?.salonName !== undefined ? <span>{item.salonName}</span> : " "}</CardText>
                                <Button color="info" href={"/Event/" + item.id}>Detayları Görmek İçin Tıkla!</Button>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}





export default Event

