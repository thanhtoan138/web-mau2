import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Container, Row , Col, Button} from "react-bootstrap";
import {FaTicketAlt,FaHeart,FaShoppingCart} from 'react-icons/fa';
import Link from 'next/link';

export default function HeadDetail(data){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container >
            <Row>
                <Col lg="6">
                    <span className="d-flex align-items-center text-primary mb-2">
                        <FaTicketAlt className="me-2"/>
                        {data.data.code}
                    </span>
                    <h2 className="tour_detail_title">{data.data.name}</h2>
                    <div className="d-flex align-items-center">
                        <span className="me-3 tag_point">9</span>
                        <div className="d-flex flex-column me-3">
                            <span>Tuyệt vời</span>
                            <span>1 quan tâm</span>
                        </div>
                        <span className="px-4 py-2 border bg-white rounded-2"><FaHeart className="me-1 text-danger"/>126</span>
                    </div>
                </Col>

                <Col lg="6">
                    <div className="d-flex justify-content-end">
                        <div className="d-flex flex-column me-3">
                            <span className="mb-2 text-decoration-line-through">Giá 16,490,000₫/ khách</span>
                            <p><span className="text-danger fs-4 fw-bold">{data.data.price}₫</span>/ khách</p>
                        </div>
                        <div className="d-flex flex-column">
                            <Button className="mb-2 bg-danger border-0" onClick={handleShow}><FaShoppingCart className="me-2"/>Đặt ngay</Button>
                            <Button className="bg-white text-black border-black">Liên hệ tư vấn</Button>
                        </div>

                    </div>
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose} animation={false} size="lg">
            <Modal.Header closeButton>
            <Modal.Title className="card_title_tour">DANH SÁCH DỊCH VỤ</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <span className='card_title_tour'>Danh sách lựa chọn</span>
                <div className='d-flex justify-content-between p-3'>
                    <span>{data.data.name}</span>
                    <span>{data.data.price}đ</span>
                </div>   
            </Modal.Body>
            <div className='d-flex justify-content-end p-3 me-3'>
                <span>Thành tiền: {data.data.price}đ</span>
            </div>
            <Modal.Footer className='justify-content-center'>
            <Link href='/Booking/3'>
                <Button variant="danger" onClick={handleClose}>
                    Đặt Ngay
                </Button>
            </Link>
            </Modal.Footer>
        </Modal>
        </Container>
    )
}