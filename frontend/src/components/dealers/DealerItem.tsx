import React from "react";
import { Dealer } from "./Dealer";
import './DealerItem.css';
import { useHistory } from "react-router";
import * as dealerService from "./DealerService";
import { toast } from "react-toastify";


interface Props {
  dealer: Dealer;
  getDealers: () => void;
}

const DealerItem = ({ dealer, getDealers }: Props) => {
  const history = useHistory();

  const handelDelete = async (id: string)=>{
    await dealerService.deleteDealer(id);
    toast.error('Dealer deleted succesfully')
    console.log('Deleted',id);
    getDealers();  
  }

  return (
    <div className="col-md-4">
      <div className="card card-body dealer-card" style={{cursor:'pointer'}}> 
        <div className="d-flex justify-content-between">
          <h1 onClick={()=> history.push(`update/${dealer._id}`)}>{dealer.dlrName}</h1>
          <span className="text-danger" onClick={()=> dealer._id && handelDelete(dealer._id)}>X</span>
        </div>
        <p>{dealer.dlrCd}</p>
        <p>{dealer.adrStateNm}</p>
        <p>{dealer.latitude}</p>
        <p>{dealer.longitude}</p>
      </div>
    </div>
  );
};

export default DealerItem;
