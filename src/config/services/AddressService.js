import axios from "axios";
import apiURL from "config/api";

const getAddressList = ()=>{
    return axios.get(`${apiURL}/Address/GetAddressList`).then(res => res.data)
}

const getAddressById = (addressId) => {
    return axios.get(`${apiURL}/Address/GetAddressById/${addressId}`).then(res => res.data)
}

export{
    getAddressList,
    getAddressById
}