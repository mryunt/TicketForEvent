import axios from "axios";
import apiURL from "../api";

const getSeatList = () => {
    return axios.get(`${apiURL}/Seat/GetSeatList`).then(res => res.data);
}

const getSeatById = (seatId) => {
    return axios.get(`${apiURL}/Seat/GetSeatById/${seatId}`).then( res => res.data);
}

const addSeat = (seatObj) => {
    return axios.post(`${apiURL}/Seat/AddSeat`, seatObj).then(res => res.data);
}

const updateSeat = (seatId, seatObj) => {
    return axios.put(`${apiURL}/Seat/UpdateSeat/${seatId}`,seatObj).then(res => res.data);
}

const deleteSeat = (seatId) => {
    return axios.delete(`${apiURL}/Seat/DeleteSeat/${seatId}`).then(res => res.data);
}

export {
    getSeatList,
    getSeatById,
    addSeat,
    updateSeat,
    deleteSeat
}