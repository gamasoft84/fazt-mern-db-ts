import React, { useEffect, useState } from 'react';
import * as dealerService from './DealerService';
import {Dealer} from './Dealer';
import DealerItem from './DealerItem';
import ReactPlayer from 'react-player';

const DealerList = () => {

const [dealers, setDealers] = useState<Dealer[]>([]);

    const getDealers = async () =>{
        const res = await dealerService.getDealers();
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
        getDealers();
    }, [])


    return (
        <div className="row">
            {dealers.map( (d) => {
                return <DealerItem dealer={d}  key={d.dlrCd}/>
            })}
            <div className="embed-responsive embed-responsive-16by9">
                <ReactPlayer url="https://www.youtube.com/watch?v=Xy4EC8q1jzY" />
            </div>
        </div>
    )
}

export default DealerList; 
