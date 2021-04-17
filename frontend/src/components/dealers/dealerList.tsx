import React, { useEffect, useState } from 'react';
import * as dealerService from './DealerService';
import {Dealer} from './Dealer';
import DealerItem from './DealerItem';

const DealerList = () => {

const [dealers, setDealers] = useState<Dealer[]>([]);

    const loadDealers = async () =>{
        const res = await dealerService.loadDealers();
        const formatedDealers = res.data.map(d => {
             return{
                 ...d,
                 createdAt: d.createdAt ? new Date(d.createdAt) : new Date(),
                 updatedAt: d.updatedAt ? new Date(d.updatedAt) : new Date(),
             }
        })
        .sort((a,b) => b.createdAt.getTime() - a.createdAt.getTime());

        setDealers(formatedDealers);
    }

    useEffect(() => {
        loadDealers();
    }, [])


    return (
        <div className="row">
            {dealers.map( (d) => {
                return <DealerItem dealer={d}  key={d.dlrCd}/>
            })}
        </div>
    )
}

export default DealerList; 
