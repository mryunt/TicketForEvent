import axios from "axios";
import apiURL from "config/api";

const getImagesList = () => {
    return axios.get(`${apiURL}/Images/GetImagesList`).then(res => res.data)
}

const getImagesById = (imagesId) => {
    return axios.get(`${apiURL}/Images/GetImagesById/${imagesId}`).then(res => res.data)
}

export {
    getImagesList,
    getImagesById
}