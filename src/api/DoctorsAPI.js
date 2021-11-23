import axios from 'axios';

class DoctorsAPI {

    constructor() {
        this.BASE_URL = `http://host:5050/`;
    } 

    add_doctor = (doctor) => {
        return axios.post(this.BASE_URL, doctor);
    }

    delete_doctor = (doctor) => {
        return axios.delete(this.BASE_URL + `${doctor}`);
    }

    detail_doctor = (doctor) => {
        return axios.get(this.BASE_URL + `${doctor}`);
    }

    get_doctors = () => {
        return axios.get(this.BASE_URL);
    }

    update_doctors = (doctor, doctor_updated) => {
        return axios.put(this.BASE_URL + `${doctor}`, doctor_updated);
    }
}


export default DoctorsAPI;