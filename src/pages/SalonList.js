import React, { useEffect, useState } from "react";
import { getSalonById, getSalonList } from "config/services/SalonService";
import { Card, Button, CardText, Row, Col, CardTitle, CardFooter } from 'reactstrap'

const SalonList = (props) => {
    const [salonList, setSalonList] = useState([]);
    useEffect(() => {
        getSalonList().then(res => setSalonList(res));
    }, [])
    return (
        <Row style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', backgroundColor: "#76b5c5" }}>
            {
                salonList.map((item) =>
                    <Col sm="6">
                        <Card body style={{ backgroundColor: "#154c79" }}>
                            <CardTitle style={{ color: "#eeeee4" }} tag="h5">{item.name}</CardTitle>
                            <CardText style={{ color: "#eeeee4" }}>Güncel {item.name} Salonunda Bulununan Etkinliklerini Gör, Hızlı ve Güvenli Bir Şekilde Biletini Al</CardText>

                            <CardFooter>
                                <Button color="info" href={"/Salon/" + item.id}>Git</Button>
                            </CardFooter>
                        </Card>
                    </Col>
                )
            }
        </Row>
    )
}
export default SalonList;