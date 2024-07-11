import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaTicketAlt, FaPlusCircle, FaArrowRight,FaRegHeart,FaCartPlus  } from "react-icons/fa";
import { ListTourData } from "../Category/ListTourData";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import * as actionType from "../../../redux/actions/type";
function CardList() {
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
    <Container >
      <h4 className="mt-4">Ưu đãi tour giờ chót</h4>
      <Swiper
      cssMode={true}
      navigation={true}

      breakpoints={{

          425: {
          slidesPerView: 1,
          spaceBetween: 20,
          },
          576: {
              slidesPerView: 2,
              spaceBetween: 10,
          },
          768: {
          slidesPerView: 2,
          spaceBetween: 20,
          },
          992: {
          slidesPerView: 3,
          spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
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
                
            <SwiperSlide lg="4" className="mt-4" key={index}>
            <Card >
                <Card className="position-relative border border-0">
                <Link href="/Tour/2">
                  <Card.Img
                      variant="top"
                      src={item.img}
                  />
                </Link>
                <Card.Text className="tag position-absolute text-primary mb-0">
                    cao cấp
                </Card.Text>
                <FaRegHeart className="position-absolute tag_heart" />
                <div className="position-absolute tag_right_card d-flex flex-column align-items-end">
                    <Card.Text className="tag_point">9</Card.Text>
                    <Card.Text className="tag_number_care">
                    10 quan tâm
                    </Card.Text>
                </div>
                </Card>
                <Card.Body>
                <Card.Text className="fs-6 mb-2">12/08/2023 - {item.date_type_name}</Card.Text>
                <Link href="/Tour/2">
                  <Card.Title className="card_title_tour">{item.name}</Card.Title>
                </Link>
                <Card.Text className="mb-1">Mã tour</Card.Text>
                <Card.Text className="d-flex align-items-center color-text fw-bold">
                    <FaTicketAlt className="me-1" />
                    {item.code}
                </Card.Text>
                <span className="d-flex align-items-center">
                    Nơi khởi hành: {" "}
                    <span className="color-text fw-bold">
                    {item.city_name}
                    </span>
                </span>
                {/* <Card.Text className='text-decoration-line-through'>Giá: {item.price}đ</Card.Text> */}
                <div className="d-flex justify-content-between align-items-center">
                    <Card.Text className="text-danger fw-blod">
                    Giá: {item.price}đ
                    </Card.Text>
                    <Card.Text className="ticket p-2">
                    {item.discount}% Giảm
                    </Card.Text>
                </div>
                <div className="d-flex justify-content-between py-2">
                  <Link href="/Tour/2">
                    <Button className="bg-danger border border-0">
                      <FaCartPlus /> Đặt ngay
                    </Button>
                  </Link>
                  <Link href="/Tour/2">
                    <Button className="bg-white text-primary">Xem chi tiết</Button>
                  </Link>
                </div>
                <div className="d-flex justify-content-between align-items-center">
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
                </div>
                </Card.Body>
            </Card>
            </SwiperSlide>
                ))}
      </Swiper>
      <div className="home-page__see-all text-end mt-4">
        <Button className="btn px-4 py-2 fw-bold d-inline-flex align-items-center">
          Xem tất cả <FaArrowRight className="ms-2" />
        </Button>
      </div>
    </Container>
  );
}

export default CardList;
