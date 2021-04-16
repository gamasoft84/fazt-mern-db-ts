import React, { useEffect, useState } from 'react';
import * as dealerService from './DealerService';
import {Dealer} from './Dealer';
import DealerItem from './DealerItem';

const DealerList = () => {

const [dealers, setDealers] = useState<Dealer[]>([]);

    const loadServices = async () =>{
        const res = await dealerService.loadDealers();
        setDealers(res.data);
    }

    useEffect(() => {
        loadServices();
    }, [])


    return (
        <div>
            <h3>Dealer List</h3>
            {dealers.map( (d) => {
                return <DealerItem dealer={d}/>
            })}
        </div>
    )
}

export default DealerList; 
