import React from 'react'
import {Dealer} from './Dealer'

interface Props{
    dealer: Dealer
}

const DealerItem = ({dealer}:Props) => {
    return (
        <div key={dealer.dlrCd}>
           <p>{dealer.dlrName}</p>
           <p>{dealer.dlrCd}</p>
           <p>{dealer.adrStateNm}</p>
           <p>{dealer.latitude}</p>
           <p>{dealer.longitude}</p>
        </div>
    )
}

export default DealerItem
