import React from "react";
import { Dealer } from "./Dealer";
import ReactPlayer from "react-player";

interface Props {
  dealer: Dealer;
}

const DealerItem = ({ dealer }: Props) => {
  return (
    <div className="col-md-4">
      <div className="card card-body">
        <div className="d-flex justify-content-between">
          <h1>{dealer.dlrName}</h1>
          <span className="text-danger">X</span>
        </div>
        <p>{dealer.dlrCd}</p>
        <p>{dealer.adrStateNm}</p>
        <p>{dealer.latitude}</p>
        <p>{dealer.longitude}</p>
        <div className="embed-responsive embed-responsive-16by9">
          <ReactPlayer url="https://www.youtube.com/watch?v=Xy4EC8q1jzY" />
        </div>
      </div>
    </div>
  );
};

export default DealerItem;
