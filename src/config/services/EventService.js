import axios from "axios";
import apiURL from "../api";

const getEventList = () => {
    return axios.get(`${apiURL}/Event/GetEventList`).then(res => res.data);
}

const getEventById = (eventId) => {
    return axios.get(`${apiURL}/Event/GetEventById/${eventId}`).then( res => res.data);
}

const addEvent = (eventObj) => {
    return axios.post(`${apiURL}/Event/AddEvent`, eventObj).then(res => res.data);
}

const updateEvent = (eventId, eventObj) => {
    return axios.put(`${apiURL}/Event/UpdateEvent/${eventId}`,eventObj).then(res => res.data);
}

const deleteEvent = (eventId) => {
    return axios.delete(`${apiURL}/Event/DeleteEvent/${eventId}`).then(res => res.data);
}

export {
    getEventList,
    getEventById,
    addEvent,
    updateEvent,
    deleteEvent
}