import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Dealer } from "./Dealer";
import { toast } from "react-toastify";
import { useHistory, useParams } from "react-router";
import * as dealerService from "./DealerService";

const DealerForm = () => {
  const history = useHistory();
  const params = useParams<Params>();
  
  const initialState = {
    dlrName: '',
    dlrCd: '',
    adrStateNm: '',
    latitude: '',
    longitude: ''
  };

  const [dealer, setDealer] = useState<Dealer>(initialState);

  const getDealer = async (id: string) => {
    const res = await dealerService.getDealer(id);
    console.log(res);
    setDealer(res.data);
    
  }

  useEffect(() => {
   if(params.id){
     getDealer(params.id);
   }
  }, [])

  type InputChange = ChangeEvent<HTMLInputElement>;
  interface Params {
    id: string;
  }

  const handleInputChange = (e: InputChange) => {
    const { name, value } = e.target;
    setDealer({ ...dealer, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if(!params.id){
      const resp = await dealerService.createDealer(dealer);
      toast.success("New Dealer add");
    }else{
      await dealerService.updateDealer(dealer);
      toast.success("Updated Dealer");
    }
    setDealer(initialState);
    history.push('/');
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card">
            <div className="card-body">
              <h3>New Dealer</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Dealer Name"
                    className="form-control"
                    autoFocus
                    onChange={handleInputChange}
                    name="dlrName"
                    value={dealer.dlrName}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Dealer Code"
                    className="form-control"
                    onChange={handleInputChange}
                    name="dlrCd"
                    value={dealer.dlrCd}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="State"
                    className="form-control"
                    onChange={handleInputChange}
                    name="adrStateNm"
                    value={dealer.adrStateNm}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Latitutude"
                    className="form-control"
                    onChange={handleInputChange}
                    name="latitude"
                    value={dealer.latitude}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Longitude"
                    className="form-control"
                    onChange={handleInputChange}
                    name="longitude"
                    value={dealer.longitude}
                  />
                </div>
                {
                  params.id ? 
                  <button className="btn btn-info">Update Dealer</button> :
                  <button className="btn btn-primary">Create Dealer</button>
                }
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealerForm;
