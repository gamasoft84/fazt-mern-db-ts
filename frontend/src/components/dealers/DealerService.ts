import { Dealer } from './Dealer';
import axios from 'axios';

const API = 'http://localhost:3001';

export const loadDealers = async() =>{
    return await axios.get<Dealer[]>(`${API}/dealers`);
}

export const createDealer = async(dealer: Dealer) =>{
    return await axios.post(`${API}/dealers`, dealer);
}