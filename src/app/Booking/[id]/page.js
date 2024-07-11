"use client"

import BreadCrums from '../../Category/components/BreadCrums'
import BreadcrumbBooking from './BreadCrumBooking'
import OverviewBooking from './OverviewBooking'
import ProductBooking from './ProductBooking'
import {useEffect, useState} from "react";
import * as actionType from "../../../../redux/actions/type";
import axios from "axios";
export default function BookingId(){
    const [data,setData] = useState([]);
    const getData = () => {
        const URL = actionType.BASE_URL_API + 'customer/Tour/tour_detail?id=67';
        axios.get(URL, {
            headers: {
                "x-api-key": "api_key",
                "USER-TOKEN": "2BF8MD9TRK78NPQ0RHQ712WERV50QUIDK0N3QRFFZW7OL6G8E0WTMGJYHKAOOGJZA4SO23NI98SP5L1L2EL67829CS6V21QZS4WFP6K8RK8669QJ2J6QVHFTWOOZ8Y22",
                "Content-Type": "application/x-www-form-urlencoded",
            }
        })
            .then(function(res){
                // console.log(res.data.data);
                setData(res.data.data);
            })
            .catch(function(err){
                console.log(err);
            })
    }

    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <BreadCrums/>
            <BreadcrumbBooking />
            <ProductBooking data={...data}/>
            <OverviewBooking data={...data}/>
        </>
    )
}