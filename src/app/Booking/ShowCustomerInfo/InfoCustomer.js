import { Col, Container, Row } from "react-bootstrap";
import ConfirmCard from "./ConfirmCard";
import DetailBooking from "./DetailBooking";

export default function InfoCustomer(){
    function formatString(number){
        return (number.substring(0, 3) + '***' + number.substring(6));
    }
    
    return(
        <Container  className="mt-4">
            <Row>
                <Col lg="8" >
                    <div className="p-4 border rounded">
                        <h5 className="fw-bold text-danger border-bottom pb-3">THÔNG TIN LIÊN LẠC</h5>
                        <Row>
                            <Col lg="6">
                                <span className="text-secondary">Họ tên</span>
                                <p className="text-color-primary">pham van a</p>                           
                            </Col>
                            <Col lg="6">
                                <span className="text-secondary">Email</span>
                                <p className="text-color-primary">abc@gmail.com</p>                           
                            </Col>
                            <Col lg="6">
                                <span className="text-secondary">Địa chỉ</span>
                                <p className="text-color-primary">12 tran hung dao</p>                           
                            </Col>
                            <Col lg="6">
                                <Row>
                                    <Col lg="6">
                                        <span className="text-secondary">Di động</span>
                                        <p className="text-color-primary">{formatString('0123456789')}</p>   
                                    </Col>
                                    <Col lg="6">
                                        <span className="text-secondary">Điện thoại</span>
                                        <p className="text-color-primary">{formatString('0123456789')}</p>   
                                    </Col>
                                </Row>                         
                            </Col>
                            <Col lg="12">
                                <span className="text-secondary">Ghi chú</span>
                                <p className="text-color-primary">Booking từ travel.com.vn. (Tour giờ chót -500,000 ₫/1 khách).</p> 
                            </Col>
                        </Row>
                    </div>
                    <DetailBooking />
                </Col>
                <ConfirmCard />
            </Row>
        </Container>
    )
}