import Link from "next/link";
import { Row, Col, Button, Form } from "react-bootstrap";
import {FaRegCalendarMinus,FaMailBulk ,FaUsers, FaPhoneAlt} from "react-icons/fa"
export default function OverviewRight(props){
    let moneyAdult = 24999000;
    let moneyChild = 22491000;
    let moneyBaby = 7497000;
    let Switch = document.getElementById('custom-switch');
    let valueSwitch = parseFloat(Switch ? Switch.value : "0");
    const sumMoney =  (props.countAdult * moneyAdult) + (props.countChild * moneyChild) + (props.countBaby * moneyBaby) + valueSwitch;
    console.log(props.data.data);
    return (
        <div>
        <div>
            <span className="text-primary">Quý khách cần hỗ trợ?</span>
            <div className="mt-4">
                <Button className="support_btn"><FaPhoneAlt className="me-2"/>Gọi miễn phí qua internet</Button>
                <Button className="support_btn bg-white text-black boder-0 rounded-end"><FaMailBulk className="me-2"/>Gửi yêu cầu hỗ trợ ngay</Button>
            </div>
        </div>
        <div className="border border-dark p-3 mt-4">
            <span className="text-700">Tóm tắt chuyển đi</span>
            {[props.data.data].map((item,index) =>(
                <div key={index}>
                    <span className="card_title_tour">Tour trọn gói <span className="text-primary fs-6">(9 khách)</span></span>
                    <Row className="my-3">
                        <Col lg="3">
                            <img src="https://media.travel.com.vn/tour/tfd_230414053042_028635.jpg" className="w-100 rounded"/>
                        </Col>
                        <Col lg="9">
                            <span className="title_booking card_title_tour">{item.name}</span>
                        </Col>
                    </Row>
                    <div>
                        <div className="start d-flex">
                            <FaRegCalendarMinus className="me-2 mt-1 text-primary"/>
                            <div className="d-flex flex-column">
                                <span className="text-primary">Bắt đầu chuyến đi</span>
                                <span className="card_title_tour">T2, 28 Tháng 8, 2023</span>
                                <span className="from"></span>
                            </div>
                        </div>
                        <div className="end d-flex">
                            <FaRegCalendarMinus className="me-2 mt-1 text-primary"/>
                            <div className="d-flex flex-column">
                                <span className="text-primary">Kết thúc chuyến đi</span>
                                <span className="card_title_tour">T7, 2 Tháng 9, 2023</span>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <span className="card_title_tour">Hành khách</span>
                            <div className="d-flex flex-column align-items-end">
                                <span className="text-primary fs-4"><FaUsers className="icon_detail_tour"/>{props.countAdult + props.countChild + props.countBaby} người</span>
                                <span>{props.countAdult} người lớn</span>
                                <span>{props.countChild} trẻ em</span>
                                <span>{props.countBaby} em bé</span>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex justify-content-between mb-3">
                                <span>Người lớn</span>
                                <span className="card_title_tour">{props.countAdult} x {moneyAdult.toLocaleString()}đ</span>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <span>Trẻ em</span>
                                <span className="card_title_tour">{props.countChild} x {moneyChild.toLocaleString()}đ</span>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <span>Em bé</span>
                                <span className="card_title_tour">{props.countBaby} x {moneyBaby.toLocaleString()}đ</span>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <span className="card_title_tour">Phụ thu phòng riêng</span>
                                <span className="card_title_tour">{valueSwitch}đ</span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <span className="card_title_tour">Mã giảm giá</span>
                                <div>
                                    <Form className="d-flex">
                                        <Form.Control type="text" placeholder="Thêm mã" className="input_code_promotion"/>
                                        <Button className="btn-success ms-2">Áp dụng</Button>
                                    </Form>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-3 border-top">
                                <span className="card_title_tour">TỔNG CỘNG</span>
                                <span className="text-danger fs-3 fw-bold">{sumMoney.toLocaleString()}đ</span>
                            </div>
                            <Link href="/Booking/2/Checkout">
                                <Button className="w-100 btn-danger py-2 mt-3">ĐẶT NGAY</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}

        </div>

      </div>
    )
}