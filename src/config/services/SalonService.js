import axios from "axios";
import apiURL from "../api";

const getSalonList = () => {
    return axios.get(`${apiURL}/Salon/GetSalonList`).then(res => res.data);
}

const getSalonById = (salonId) => {
    return axios.get(`${apiURL}/Salon/GetSalonById/${salonId}`).then( res => res.data);
}

const addSalon = (salonObj) => {
    return axios.post(`${apiURL}/Salon/AddSalon`, salonObj).then(res => res.data);
}

const updateSalon = (salonId, salonObj) => {
    return axios.put(`${apiURL}/Salon/UpdateSalon/${salonId}`,salonObj).then(res => res.data);
}

const deleteSalon = (salonId) => {
    return axios.delete(`${apiURL}/Salon/DeleteSalon/${salonId}`).then(res => res.data);
}

export {
    getSalonList,
    getSalonById,
    addSalon,
    updateSalon,
    deleteSalon
}