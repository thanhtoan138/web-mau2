import { Container, Row, Card, Col, Button } from "react-bootstrap";
import {FaRegHeart, FaTicketAlt,FaCartPlus, FaPlusCircle  } from "react-icons/fa"
import { ListTourSuggestData } from "../../Category/ListTourData";
import {useEffect, useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";
export default function SuggestList(){
    const [tourList, setTourList] = useState([])
    const getTourList = () => {
        const URL = 'https://balotour.nhanhtravel.com/api/Balotour/Tour/tourList?off=&limit=&keyword=&city_id=&tour_type=&typedate=&date_start=&date_end=&lang=';
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
        <Container >
            <span className="d-flex justify-content-center title_page_detail pt-4 pb-2">Có thể Quý khách sẽ thích</span>
            <Swiper
                cssMode={true}
                navigation={true}

                breakpoints={{
                    425: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },

                    576: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                // autoplay={{
                //   delay: 2500,
                //   disableOnInteraction: false,
                // }}
                modules={[Navigation]}
            >
            {tourList.map((item,index) =>(
                
                <SwiperSlide key={index}>
                <Card >
                    <Card className="position-relative border border-0">
                    <Card.Img
                        variant="top"
                        src={item.img}
                    />
                    {/* <Card.Text className="tag position-absolute text-primary mb-0">
                        {item.type}
                    </Card.Text> */}
                    <FaRegHeart className="position-absolute tag_heart" />
                    <div className="position-absolute tag_right_card d-flex flex-column align-items-end">
                        <Card.Text className="tag_point">9</Card.Text>
                        {/* <Card.Text className="tag_number_care">
                        {item.number_care} quan tâm
                        </Card.Text> */}
                    </div>
                    </Card>
                    <Card.Body>
                    <Card.Text className="fs-6 mb-2">12/08/2023 - {item.date_type_name}</Card.Text>
                    <Card.Title className="card_title_tour">{item.name}</Card.Title>
                    {/* <Card.Text className="mb-1">Mã tour</Card.Text>
                    <Card.Text className="d-flex align-items-center card_title_tour">
                        <FaTicketAlt className="me-1" />
                        {item.id_tour}
                    </Card.Text> */}
                    <span className="d-flex align-items-center">
                        Nơi khởi hành:{" "}
                        <span className="color-text fw-bold">
                        {item.city_name}
                        </span>
                    </span>
                    {/* <Card.Text className='text-decoration-line-through'>Giá: {item.price}đ</Card.Text> */}
                    <div className="d-flex justify-content-between align-items-center">
                        <Card.Text className="text-danger fw-blod">
                        Giá: {item.price}đ
                        </Card.Text>
                        {/* <Card.Text className="ticket p-2">
                        {item.discount}% Giảm
                        </Card.Text> */}
                    </div>
                    <div className="d-flex justify-content-between py-2">
                        <Button className="bg-danger border border-0">
                        <FaCartPlus /> Đặt ngay
                        </Button>
                        <Button className="bg-white text-primary">Xem chi tiết</Button>
                    </div>
                    {/* <div className="d-flex justify-content-between align-items-center">
                        <div>
                        <Card.Text className="text-primary">
                            <FaPlusCircle /> Thêm vào so sánh
                        </Card.Text>
                        </div>
                        <div>
                        <Card.Text>
                            Số chỗ còn{" "}
                            <span className="text-danger">{item.number_remain}</span>
                        </Card.Text>
                        </div>
                    </div> */}
                    </Card.Body>
                </Card>
                </SwiperSlide>
                    ))}
            </Swiper>
        </Container>
    )
}