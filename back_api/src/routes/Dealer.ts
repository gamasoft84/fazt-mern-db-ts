import {Schema, model} from 'mongoose';

const dealerSchema = new Schema({
    name : {
        type: String,
        required: true,
        trim: true
    },

    dealerCode : {
        type: String,
        required: true,
        trim: true
    },

    state : {
        type: String,
        trim: true
    },

    latitude : {
        type: String,
        trim: true
    },

    longitude : {
        type: String,
        trim: true
    }, 
    versionKey: false,
    timestamp: true

});

export default model('Dealer', dealerSchema);