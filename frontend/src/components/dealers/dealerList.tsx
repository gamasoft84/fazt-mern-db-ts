import React, { useEffect, useState } from 'react';
import * as dealerService from './DealerService';
import {Dealer} from './Dealer';

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
                return <h4 key={d.dlrCd}>{d.dlrCd}</h4>
            })}
        </div>
    )
}

export default DealerList; 
