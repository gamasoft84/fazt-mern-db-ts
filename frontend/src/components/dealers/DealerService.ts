import axios from 'axios';

export const loadDealers = async() =>{
    return await axios.get('http://localhost:3001/dealers');
}