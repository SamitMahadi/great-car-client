import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AurthProvider';

const Orders = () => {
    const {user} = useContext(AuthContext) ;
    const [orders,setOrders] =useState({})
    const url = `http://localhost:5000/orders?email=${user?.email}`
   
   useEffect(()=>{
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
    .then(res=>res.json())
    .then(data=>setOrders(data))
   },[user?.email])
    return (
        <div>
            <h1 className="text-5xl">you have{orders.length}</h1>
        </div>
    );
};

export default Orders;