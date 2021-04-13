import {Schema, model} from 'mongoose';

const dealerSchema = new Schema({
    dlrName : {
        type: String,
        required: true,
        trim: true
    },

    dlrCd : {
        type: String,
        required: true,
        trim: true,
        unique: true
    },

    adrStateNm : {
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
},
{
    versionKey: false,
    timestamps: true
});

export default model('Dealer', dealerSchema);