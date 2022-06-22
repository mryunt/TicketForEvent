import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById, getEventList } from "config/services/EventService";
import { CardText, Row, Col, Card, CardTitle } from "reactstrap";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import "../pages/DivDeneme.css"

const DivDeneme = () => {
    const { id } = useParams();
    const [eventList, setEventList] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)
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
        <div className="App">
            <motion.ul layout className="dede">
                {
                    eventList.filter(({ endDate }) => endDate >= date).map((item) =>
                        <AnimatePresence>
                            <motion.div
                                key={item.id}
                                transition={{ layout: { duration: 1, type: "spring" } }}
                                onClick={toggle}
                                className="card"
                                style={{ borderColor: "red", borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(0,0,0,0.5" }}
                            >
                                <motion.h5 layout="position" >{item.name}</motion.h5>
                                {isOpen && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="expand"
                                        style={{ backgroundColor: "red" }}
                                    >
                                        <p>Güncel {item.name} Etkinliklerini Gör, Hızlı ve Güvenli Bir Şekilde Biletini Al</p>
                                        <p>{item.id}</p>
                                        <p>{item.eventTypeId}</p>
                                        <p>{item.eventTypeName}</p>
                                        <p>{item.name}</p>
                                        <p>{item.explanation}</p>
                                        <p>{item.salonName}</p>
                                        <p>{item.startDate}</p>
                                        <p>{item.endDate}</p>
                                        <button>Hello</button>
                                    </motion.div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    )
                }
            </motion.ul>
        </div>
    )
}

export default DivDeneme;