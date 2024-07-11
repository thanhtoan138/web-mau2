import { Button, Col, Container, Row } from "react-bootstrap";
import {FaCalendarAlt,FaCarAlt,FaPhoneAlt,FaMailBulk,FaFlag,FaCar,FaMapMarkedAlt,FaHamburger,FaBuilding,FaRegClock,FaUserFriends,FaTicketAlt} from 'react-icons/fa'
export default function Overview(data){
    console.log(data.data6)
    return (
        <Container >
            <Row className="mt-4">
                <Col lg={5}>
                    <div className="d-flex justify-content-between px-4 py-3">
                        <div className="d-flex flex-column">
                            <span className="mb-2">Khởi hành <span>27/08/2023 - Giờ đi: 16:05</span></span>
                            <span className="mb-2">Tập trung <span>12:25 ngày 27/08/2023</span></span>
                            <span className="mb-2">Thời gian <span>5 ngày</span></span>
                            <span className="mb-2">Số chỗ còn nhận <span>9</span></span>
                        </div>
                        <Button className="h-50 bg-white text-black d-flex align-items-center"><FaCalendarAlt/>Ngày khác</Button>
                    </div>
                    <span className="">Quý khách cần hỗ trợ</span>
                    <div className="mt-4">
                        <Button className="support_btn"><FaPhoneAlt className="me-2"/>Gọi miễn phí qua internet</Button>
                        <Button className="support_btn bg-white text-black boder-0 rounded-end"><FaMailBulk className="me-2"/>Gửi yêu cầu hỗ trợ ngay</Button>

                    </div>
                </Col>

                <Col lg={7}>
                    <Row>
                        {/* <Col lg={1}></Col> */}
                        <Col lg={3} className="d-flex flex-column mb-4">
                         <FaFlag className="icon_detail_tour text-primary"/>
                         <span className="card_title_tour">Phương tiện di chuyển</span>
                         <span>6 ngày 5 đêm</span>
                        </Col>
                        <Col lg={3} className="d-flex flex-column  ">
                         <FaCar className="icon_detail_tour text-primary"/>
                         <span className="card_title_tour">Phương tiện di chuyển</span>
                         <span>Máy bay, xe du lịch</span>
                        </Col>
                        <Col lg={3} className="d-flex flex-column  ">
                         <FaMapMarkedAlt className="icon_detail_tour text-primary"/>
                         <span className="card_title_tour">Điểm tham quan</span>
                         <span>Nhật Bản, Tokyo, Nagoya, Kyoto, Osaka</span>
                        </Col>
                        <Col lg={3} className="d-flex flex-column  ">
                         <FaHamburger className="icon_detail_tour text-primary"/>
                         <span className="card_title_tour">Ẩm thực</span>
                         <span>Buffet sáng, Theo thực đơn</span>
                        </Col>
                        <Col lg={3} className="d-flex flex-column mt-2">
                         <FaBuilding className="icon_detail_tour text-primary"/>
                         <span className="card_title_tour">Khách sạn</span>
                         <span>khách sạn 3 sao</span>
                        </Col>
                        <Col lg={3} className="d-flex flex-column  mt-2">
                         <FaRegClock className="icon_detail_tour text-primary"/>
                         <span className="card_title_tour">Thời gian lý tưởng</span>
                         <span>Quanh năm</span>
                        </Col>
                        <Col lg={3} className="d-flex flex-column  mt-2">
                         <FaUserFriends className="icon_detail_tour text-primary"/>
                         <span className="card_title_tour">Đối tượng thích hợp</span>
                         <span>Cặp đôi, Gia đình nhiều thế hệ, Thanh niên</span>
                        </Col>
                        <Col lg={3} className="d-flex flex-column  mt-2">
                         <FaTicketAlt className="icon_detail_tour text-primary"/>
                         <span className="card_title_tour">Ưu đãi</span>
                         <span>Ưu đãi trực tiếp vào giá tour</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}