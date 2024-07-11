import { Container, Row, Col, Form, Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {FaTicketAlt,FaPlusCircle,FaArrowRight,FaCartPlus, FaRegHeart} from 'react-icons/fa';
import Paginate from "./Paginate";
import Link from "next/link";
import * as actionType from "../../../../redux/actions/type";
import axios from "axios";
import { useState, useEffect } from "react";
export default function ListTour(){
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
            console.log(res.data.data.tour_list);
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
                <Col lg="9">
                    <h1 className="py-4 h2 fw-bold heading text-center">Du lịch Miền Bắc</h1>
                    <p>Miền Bắc Việt Nam gồm Tây Bắc, Đông Bắc và đồng bằng Sông Hồng, là cái nôi văn hóa lịch sử hàng ngàn năm của Việt Nam. Thiên nhiên và cảnh đẹp hùng vĩ, 4 mùa xuân hạ thu đông, miền Bắc luôn là điểm hẹn hấp dẫn cho ta trở lại nhiều lần.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <span>Chúng tôi tìm thấy <span>530</span> tours cho Quý khách.</span>
                        <div className="d-flex align-items-center">
                            <span className="me-2">Sắp xếp theo</span>
                            <Form>
                                <Form.Select aria-label="Default select example">
                                <option>---Tất cả---</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                </Form.Select>
                            </Form>
                        </div>
                    </div>
                            <Row>
                                {tourList.filter((item, idx) => idx < 15).map((item,index) => (
                                <Col lg="4" className="mt-4" key={index}>
                                    <Card>
                                    <Card className="position-relative border border-0">
                                        <Link href="/Tour/2">
                                            <Card.Img variant="top" src={item.img} />
                                        </Link>
                                        <Card.Text className="tag position-absolute text-primary mb-0">{item.type}</Card.Text>
                                        <FaRegHeart className="position-absolute tag_heart"/>
                                        <div className="position-absolute tag_right_card d-flex flex-column align-items-end">
                                            <Card.Text className="tag_point">{item.point}</Card.Text>
                                            <Card.Text className="tag_number_care">{item.number_care} quan tâm</Card.Text>
                                        </div>
                                    </Card>
                                    <Card.Body>
                                    <Card.Text className="fs-6 mb-2">12/08/2023 - 4 ngày</Card.Text>
                                    <Link href="/Tour/2">
                                        <Card.Title className="card_title_tour">{item.name}</Card.Title>
                                    </Link>
                                    <Card.Text className="mb-1">Mã tour</Card.Text>
                                    <Card.Text className="d-flex align-items-center color-text fw-bold"><FaTicketAlt className="me-1"/>{item.id_tour}</Card.Text>
                                    <span className="d-flex align-items-center">Nơi khởi hành: <span className="color-text fw-bold">{item.start_place}</span></span>
                                    {/* <Card.Text className='text-decoration-line-through'>Giá: {item.price}đ</Card.Text> */}
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <Card.Text className='text-danger fw-blod'>Giá: {item.price}đ</Card.Text>
                                        <Card.Text className='ticket p-2'>{item.discount}% Giảm</Card.Text>
                                    </div>
                                    <div className="d-flex justify-content-between py-2">
                                        <Link href="/Tour/2">
                                            <Button className="bg-danger border border-0">
                                                <FaCartPlus/> Đặt ngay
                                            </Button>
                                        </Link>
                                        <Link href="/Tour/2">
                                            <Button className="bg-white text-primary">
                                                Xem chi tiết
                                            </Button>
                                        </Link>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <Card.Text className='text-primary'>
                                                <FaPlusCircle/> Thêm vào so sánh
                                            </Card.Text>
                                        </div>
                                        <div>
                                            <Card.Text >
                                                Số chỗ còn <span className="text-danger">{item.number_remain}</span> 
                                            </Card.Text>
                                        </div>
                                    </div>
                                </Card.Body>
                                    </Card>
                                
                                </Col>
                                ))}
                            </Row>
                    <Paginate/>
                </Col>
    )
}