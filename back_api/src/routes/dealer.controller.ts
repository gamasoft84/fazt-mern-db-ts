import {RequestHandler, response} from 'express';
import Dealer from './Dealer'


export const createDealer: RequestHandler = async (req, res) => {
    const dealerFound = await Dealer.findOne({dlrCd: req.body.dlrCd});
    if(dealerFound)
        return res.status(301).json('The DealerCode already exists')
    const dealer = new Dealer(req.body);
    const savedDealer = await dealer.save();
    res.json(savedDealer);
}

export const getDealers: RequestHandler = async (req, res) => {
    const dealers = await Dealer.find();
    return res.json(dealers)
}

export const getDealer: RequestHandler = async (req, res) => {    
    const dealerFound = await Dealer.findById(req.params.id);
    if(!dealerFound)
        return res.status(204).json();        
    return res.json(dealerFound);
}

export const updateDealer: RequestHandler = async(req, res) => {    
    const dealerUpdated = await Dealer.findByIdAndUpdate(req.params.id, req.body,{new:true});
    if(!dealerUpdated)
        return res.status(204).json(); 
    return res.json(dealerUpdated);
}

export const deleteDealer: RequestHandler = async (req, res) => {
    const dealerFound = await Dealer.findByIdAndDelete(req.params.id);
    if(!dealerFound)
        return res.status(204).json(); 
    return res.json(dealerFound);
}