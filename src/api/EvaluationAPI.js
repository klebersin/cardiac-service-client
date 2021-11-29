import axios from 'axios';

class EvaluationAPI {

    constructor() {
        this.BASE_URL = `http://host:5050/`;
    } 

    add_evaluation = (evaluation) => {
        return axios.post(this.BASE_URL, evaluation);
    }

    delete_evaluation = (evaluation) => {
        return axios.delete(this.BASE_URL + `${evaluation}`);
    }

    detail_evaluation = (evaluation) => {
        return axios.get(this.BASE_URL + `${evaluation}`);
    }

    get_evaluation = () => {
        return axios.get(this.BASE_URL);
    }

    update_evaluation = (evaluation, evaluation_updated) => {
        return axios.put(this.BASE_URL + `${evaluation}`, evaluation_updated);
    }
}

export default EvaluationAPI;