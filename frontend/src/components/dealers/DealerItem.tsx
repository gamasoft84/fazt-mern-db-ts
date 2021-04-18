import React from "react";
import { Dealer } from "./Dealer";
import './DealerItem.css';
import { useHistory } from "react-router";

interface Props {
  dealer: Dealer;
}

const DealerItem = ({ dealer }: Props) => {
  const history = useHistory();
  return (
    <div className="col-md-4">
      <div className="card card-body dealer-card" style={{cursor:'pointer'}} onClick={()=> history.push(`update/${dealer._id}`)}> 
        <div className="d-flex justify-content-between">
          <h1>{dealer.dlrName}</h1>
          <span className="text-danger">X</span>
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
