import { Button, Card, Col, Container, Row } from "react-bootstrap";
import {FaStar,FaMapMarkerAlt} from 'react-icons/fa';
import { useState, useEffect } from "react";
import * as actionType from "../../../redux/actions/type";
import axios from "axios";
import Link from "next/link";
export default function SpecialOffers(){
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
            <h4>Gói ưu đãi đặc biệt</h4>
                {tourList.filter((item, idx) => idx < 3).map((item) => (
                <Row key={item.id} className="mt-4">
                    <Col lg="3">
                        <Link href="/Tour/2">
                            <img src={item.img} className="w-100 object-fit-cover h-100"/>
                        </Link>
                    </Col>
                    <Col lg="6">
                        <Card.Body>
                            <Card.Title className="mb-3 product-item__detail__category mb-2 p-2 d-none d-lg-inline-block text-white">Vé máy bay + khách sạn</Card.Title>
                            <Link href="Tour/2">
                                <Card.Title className="mb-3 card_title_tour">{item.name}</Card.Title>
                            </Link>
                            <Card.Title className="mb-3 text-warning"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></Card.Title>
                            <Card.Title className="mb-3 fs-6 text-secondary">{item.description}</Card.Title>
                            <Card.Title className="d-flex mb-3">
                                <Card.Title className="point_review p-2 me-2">10</Card.Title>
                                <Card.Title>Tuyệt vời</Card.Title>
                            </Card.Title>
                            <Card.Title className="text-primary fs-6 fw-light"><FaMapMarkerAlt/>{item.city_name}</Card.Title>
                        </Card.Body>
                        </Col>
                        <Col lg="3" className='d-flex align-items-end'>
                            <Card.Body className="product-item__summary">
                                <Card.Title className="mb-3">Giá chỉ từ</Card.Title>
                                <Card.Title className="d-flex justify-content-end mb-3">
                                    <Card.Title className="text-danger">{item.price}</Card.Title> / khách
                                </Card.Title>
                                <Card.Title className="mb-3">Ngày đi 12/08/2023</Card.Title>
                                <Row className="mb-2">
                                    <Col lg="6">
                                        <Button className="text-nowrap bg-white text-primary">Ngày khác</Button>
                                    </Col>
                                    <Col lg="6">
                                        <Link href="/Tour/2">
                                            <Button className="bg-danger">Đặt ngay</Button>
                                        </Link>
                                    </Col>
                                </Row>
                                <Card.Text className="text-primary">đã bao gồm trong giá</Card.Text>
                            </Card.Body>
                    </Col>
                </Row>
                ))}
                <div className="home-page__see-all text-end mt-4">
                <Button type="button" className="btn px-4 py-2 fw-bold d-inline-flex align-items-center btn btn-primary">Xem tất cả <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="ms-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
                </Button>
                </div>
                

        </Container>
    )
}