import axios from 'axios';

class ConsultationAPI {

    constructor() {
        this.BASE_URL = `http://host:5050/`;
    } 

    add_consultation = (consultation) => {
        return axios.post(this.BASE_URL, consultation);
    }

    delete_consultation = (consultation) => {
        return axios.delete(this.BASE_URL + `${consultation}`);
    }

    detail_consultation = (consultation) => {
        return axios.get(this.BASE_URL + `${consultation}`);
    }

    get_consultation = () => {
        return axios.get(this.BASE_URL);
    }

    update_consultation = (consultation, consultation_updated) => {
        return axios.put(this.BASE_URL + `${consultation}`, consultation_updated);
    }
}

export default ConsultationAPI;