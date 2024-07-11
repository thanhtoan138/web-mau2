"use client"
import { useState, useEffect} from 'react'
import BreadCrums from '../../Category/components/BreadCrums'
import HeadDetail from './HeadDetail'
import HighLight from './HighLight'
import ImgDetail from './ImgDetail'
import InfoBottom from './InfoBottom'
import InfoDetail from './InfoDetail'
import InfoNote from './InfoNote'
import Overview from './Overview'
import PlaceToVisit from './PlaceToVisit'
import SuggestList from './SuggestList'
import TimeLine from './TimeLine'
import axios from 'axios';
import * as actionType from "../../../../redux/actions/type";

export default function TourId(){
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
        
        <div>
            <BreadCrums />
            <HeadDetail data={...data}/>
            <ImgDetail data={...data}/>
            <Overview data={...data}/>
            <HighLight data={...data}/>
            <PlaceToVisit data={...data}/>
            <TimeLine data={...data}/>
            <InfoDetail data={...data}/>
            <InfoNote data={...data}/>
            <SuggestList />
            {/* <InfoBottom /> */}
        </div>
    )
}