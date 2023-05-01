import axios from "axios";
const API_URL = 'https://api-colombia.com/api/v1'

//Get info Colombia 
export const getColombiaInfo = async() => {
    const response = await axios.get(`${API_URL}/Country/Colombia`)
    return response.data;
}

//Get info  de Regiones de Colombia 
export const getRegionesColombia = async() => {
    const response = await axios.get(`${API_URL}/Region`)
    return response.data;
}

//Get info  de Region de Colombia 
export const getRegionColombia = async id => {
    const response = await axios.get(`${API_URL}/Region/${id}`)
    return response.data;
}

//Get info Turismo Colombia
export const getTurismo = async () => {
    const response = await axios.get(`${API_URL}/TouristicAttraction`);
    return response.data;
}

//Get info Area Natural Colombia
export const getAreaNatural = async () => {
    const response = await axios.get(`${API_URL}/NaturalArea`);
    return response.data;
}