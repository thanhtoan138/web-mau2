import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

export default function SidaBarFilter(){
    return (
                <Col lg="3" className="ps-0">
                    <Card className="border border-0 bg-secondary-subtle">
                        <Card.Title className="p-3 fillter">Lọc kết quả</Card.Title>
                        <Card.Title className='bg-primary text-white p-2'>Hà Nội</Card.Title>
                        <Form className="px-3 py-4">
                            <Card.Text className="title-filter mb-2">Loại hình TOUR</Card.Text>
                            <Form.Select aria-label="Default select example" className="mb-3">
                            <option>---Tất cả---</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </Form.Select>
                            <Card.Text className="title-filter mb-2">Điểm đi</Card.Text>
                            <Form.Select aria-label="Default select example" className="mb-3">
                            <option>---Điểm đi---</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </Form.Select>
                            <Card.Text className="title-filter mb-2">Điểm đến</Card.Text>
                            <Form.Select aria-label="Default select example" className="mb-3">
                            <option>---Điểm đến---</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </Form.Select>
                            <Card.Text className="title-filter mb-2">SỐ NGÀY</Card.Text>
                            <Row className="g-2 mb-3">
                                    <Col lg="6">
                                        <Button className='w-100 bg-white border text-black'>1-3 ngày</Button>
                                    </Col>
                                    <Col lg="6">
                                        <Button className='w-100 bg-white border text-black'>4-7 ngày</Button>
                                    </Col>
                                    <Col lg="6">
                                        <Button className='w-100 bg-white border text-black'>8-14 ngày</Button>
                                    </Col>
                                    <Col lg="6">
                                        <Button className='w-100 bg-white border text-black'>Trên 14 ngày</Button>
                                    </Col>
                            </Row>
                            <Form.Label htmlFor="inputPassword5" className="mb-2">Ngày đi</Form.Label>
                            <Form.Control
                                type="date"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                                className="mb-3"
                            />
                            <Card.Text className="title-filter mb-2">SỐ NGƯỜI</Card.Text>
                            <Row className="g-2 mb-3">
                                    <Col lg="6">
                                        <Button className='w-100 bg-white border text-black'>1 người</Button>
                                    </Col>
                                    <Col lg="6">
                                        <Button className='w-100 bg-white border text-black'>2 người</Button>
                                    </Col>
                                    <Col lg="6">
                                        <Button className='w-100 bg-white border text-black'>3-5 người</Button>
                                    </Col>
                                    <Col lg="6">
                                        <Button className='w-100 bg-white border text-black'>5+ người</Button>
                                    </Col>
                            </Row>
                            <Card.Text className="title-filter mb-2">DÒNG TOUR</Card.Text>
                            <Row className="g-2 mb-3">
                                    <Col lg="6">
                                        <Button className='w-100 bg-white border text-black'>Cao cấp</Button>
                                    </Col>
                                    <Col lg="6">
                                        <Button className='w-100 bg-white border text-black'>Tiêu chuẩn</Button>
                                    </Col>
                                    <Col lg="6">
                                        <Button className='w-100 bg-white border text-black'>Tiết kiệm</Button>
                                    </Col>
                                    <Col lg="6">
                                        <Button className='w-100 bg-white border text-black'>Giá tốt</Button>
                                    </Col>
                            </Row>
                            <Card.Text className="title-filter s-mark-title">Bộ lọc tìm kiếm</Card.Text>
                            <Card.Text className="title-filter mb-2">Ngân sách của quý khách</Card.Text>
                            <Form.Range min={0} max={20000000}/>
                            <Card.Text className="bg-white">2000000đ-20000000đ</Card.Text>
                            <Card.Text className="title-filter mb-2">THÔNG TIN VẬN CHUYỂN</Card.Text>
                            <Row className="g-2 mb-3">
                                    <Col lg="6">
                                        <Button className='w-100 bg-white border text-black'>Máy bay</Button>
                                    </Col>
                                    <Col lg="6">
                                        <Button className='w-100 bg-white border text-black'>Ô tô</Button>
                                    </Col>
                            </Row>
                            <Card.Text className="title-filter mb-2">Hiển thị những chuyến đi có</Card.Text>
                            <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Khuyến mãi"
                            />
                            <Form.Check
                            checked
                            type="switch"
                            label="Còn chỗ"
                            id="Check this switch-2"
                            />
                        </Form>
                        
                    </Card>
                </Col>
    )
}