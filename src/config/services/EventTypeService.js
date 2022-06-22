import axios from "axios";
import apiURL from "../api";

const getEventTypeList = () => {
    return axios.get(`${apiURL}/EventType/GetEventTypeList`).then(res => res.data);
}

const getEventTypeById = (eventTypeId) => {
    return axios.get(`${apiURL}/EventType/GetEventTypeById/${eventTypeId}`).then( res => res.data);
}

const addEventType = (eventTypeObj) => {
    return axios.post(`${apiURL}/EventType/AddEventType`, eventTypeObj).then(res => res.data);
}

const updateEventType = (eventTypeId, eventTypeObj) => {
    return axios.put(`${apiURL}/EventType/UpdateEventType/${eventTypeId}`,eventTypeObj).then(res => res.data);
}

const deleteEventType = (eventTypeId) => {
    return axios.delete(`${apiURL}/EventType/DeleteEventType/${eventTypeId}`).then(res => res.data);
}

export {
    getEventTypeList,
    getEventTypeById,
    addEventType,
    updateEventType,
    deleteEventType
}