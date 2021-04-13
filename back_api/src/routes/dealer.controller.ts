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
    const dealer = await Dealer.find();
    return res.json(dealer)
}

export const getDealer: RequestHandler = (req, res) => {
    res.json('Get Dealer');
}

export const updateDealer: RequestHandler = (req, res) => {
    res.json('Update Dealer');
}

export const deleteDealer: RequestHandler = (req, res) => {
    res.json('Delete Dealer');
}