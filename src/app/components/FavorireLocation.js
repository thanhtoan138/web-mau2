import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { FavoriteLocationData } from "../data";
import {FaDAndD} from 'react-icons/fa';
import * as actionType from "../../../redux/actions/type";
import axios from "axios";
import { useState, useEffect } from "react";

export default function FavoriteLocation(){
    const [tourList, setTourList] = useState([])
    const getTourList = () => {
        const URL = actionType.BASE_URL_API + 'Balotour/Tour/tourList?off=&limit=&keyword=&city_id=&tour_type=&typedate=&date_start=&date_end=&lang=';
        axios.get(URL, {
            headers: {
                "x-api-key": "api_key",
                "Content-Type": "application/x-www-form-urlencoded",
            }
        })
        .then(function(res){
            setTourList(res.data.data.tour_list);
        })
        .catch(function(err){
            console.log(err);
        })
    }

  useEffect(() => {
    getTourList();
  }, []);
    return (
        <Container className="mt-4">
            <h4 className="color-text">Điểm đến yêu thích</h4>
            <Row className="mt-4">
                {tourList.filter((item, idx) => idx < 8).map((item) => (
                    <Col lg="3" key={item.id} >
                    <Card className="mb-3 border-0">
                        <Card className="position-relative border-0">
                            <Card.Img variant="top" src={item.img} />
                            <FaDAndD className="icon_place"/>
                            <Card.Text className="destination-item__image__overlay"></Card.Text>
                        </Card>
                    <Card.Body >
                        <Card.Title className="card_title_tour">{item.name}</Card.Title>
                        <Card.Text className="fs-6 font-weight-light">Đã có 10000 lượt khách</Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                ))}
                
            </Row>
        </Container>
    )
}