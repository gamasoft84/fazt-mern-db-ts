import { Dealer } from './Dealer';
import axios from 'axios';

const API = 'http://localhost:3001';

export const getDealers = async() =>{
    return await axios.get<Dealer[]>(`${API}/dealers`);
}

export const createDealer = async(dealer: Dealer) =>{
    return await axios.post(`${API}/dealers`, dealer);
}

export const getDealer = async(id: string) =>{
    return await axios.get<Dealer>(`${API}/dealers/${id}`);
}

export const updateDealer = async(dealer: Dealer) =>{
    return await axios.put<Dealer>(`${API}/dealers/${dealer._id}`, dealer);
}

export const deleteDealer = async(id: string) =>{
    return await axios.delete<Dealer>(`${API}/dealers/${id}`);
}