"use client"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer(){
    return (
        <Container fluid className='footer mt-4'>
            <Row>
                <Col lg="3">
                    <h4>Du lịch trong nước</h4>
                    <Row>
                        <Col lg="6">
                            <ul>
                                <li>Hà nội</li>
                                <li>Hạ Long</li>
                                <li>Huế</li>
                                <li>Quảng Bình</li>
                                <li>Đà nẵng</li>
                                <li>Nha Trang</li>
                            </ul>
                        </Col>
                        <Col lg="6">
                            <ul>
                                <li>Phan Thiết</li>
                                <li>Bà rịa vũng tàu</li>
                                <li>Huế</li>
                                <li>Quảng Bình</li>
                                <li>Đà nẵng</li>
                                <li>Nha Trang</li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
                <Col lg="3">
                    <h4>Du lịch Ngoài nước</h4>
                    <Row>
                        <Col lg="6">
                            <ul>
                                <li>Trung Quốc</li>
                                <li>Thái Lan</li>
                                <li>Malaysia</li>
                                <li>Singapore</li>
                                <li>Hàn Quốc</li>
                                <li>Úc</li>
                            </ul>
                        </Col>
                        <Col lg="6">
                            <ul>
                                <li>Ấn độ</li>
                                <li>Philippines</li>
                                <li>Na Uy</li>
                                <li>Maldives</li>
                                <li>Tây Ban Nha</li>
                                <li>Đức</li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
                <Col lg="3">
                    <h4>Dòng tour</h4>
                    <ul>
                        <li>Cao cấp</li>
                        <li>Tiêu chuẩn</li>
                        <li>Tiết kiệm</li>
                        <li>Giá tốt</li>
                    </ul>
                </Col>
                <Col lg="3">
                    <h4>Ứng dụng di động</h4>
                    <div className="d-flex justify-content-between mb-3">
                        <img src="https://vigomanager.com/app-assets/mobile/namecard/qrcode.jpg" className='logo_qr'/>
                        <img src="https://vigomanager.com/app-assets/mobile/namecard/qrcode.jpg" className='logo_qr'/>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}