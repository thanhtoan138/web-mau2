import { Col, Container, Form, Row, FloatingLabel, Button} from "react-bootstrap";
import {FaMinusCircle, FaPlusCircle, FaUserFriends,FaChild, FaPhoneAlt,FaMailBulk,FaRegCalendarMinus,FaUsers } from "react-icons/fa"
import OverviewRight from "./OverviewRight";
import { useState } from "react";
export default function OverviewBooking(data){
    
    // const [surCharge, setSurCharge] = useState(0)

    const [checked, setChecked] = useState(true)

    // const handelCheck = () => {
    //   if(checked) {
    //     setSurCharge(moneyRequest);
    //   }else{
    //     setSurCharge(0)
    //   }
    //   setChecked(!checked);
    // }
    // console.log(surCharge);

    const handelCheck = () => {
      setChecked(!checked);
    }

    const [countAdult, setCountAdult] = useState(1);
    const [countChild, setCountChild] = useState(0);
    const [countBaby, setCountBaby] = useState(0);

    const handelIncreseCountAdult = () => {
        setCountAdult(countAdult + 1);
    }
    const handelDecreseCountAdult = () => {
      setCountAdult(countAdult - 1);

    }
    let moneyRequest = 6000000;
    
    return (
      <Container  className="mt-5">
        <span className="tour_detail_title">Tổng quan về chuyến đi</span>
        <Row className="mt-5">
          <Col lg="8">
            <span className="text-700">Thông tin liên lạc</span>
            <Form className="bg-color rounded-2 mt-3 mb-3">
              <Row className="p-3">
                <Col lg="6">
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>
                      Họ và Tên <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control type="text" required />
                  </Form.Group>
                </Col>
                <Col lg="6">
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>
                      Email <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control type="email" required />
                  </Form.Group>
                </Col>
                <Col lg="6">
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>
                      Số điện thoại <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control type="phone" required />
                  </Form.Group>
                </Col>
                <Col lg="6">
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>
                      Địa chỉ <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control type="text" required />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
            <span className="text-700">Hành khách</span>
            <Row className="mt-2">
              <Col lg="6">
                <div className="change d-flex justify-content-between align-items-center py-2 px-3 rounded border border-dark">
                  <div className="change-title d-flex flex-column">
                    <span className="card_title_tour">Người lớn</span>
                    <span>Từ 12 tuổi trở lên</span>
                  </div>
                  <div className="change-number">
                    <span className="minus icon_change">
                      <FaMinusCircle type="button" onClick={() => handelDecreseCountAdult()}/>
                    </span>
                    <span className="mx-2">{countAdult}</span>
                    <span className="plus icon_change">
                      <FaPlusCircle type="button" onClick={() => handelIncreseCountAdult()}/>
                    </span>
                  </div>
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="change d-flex justify-content-between align-items-center py-2 px-3 rounded border border-dark">
                  <div className="change-title d-flex flex-column">
                    <span className="card_title_tour">Trẻ em</span>
                    <span>Từ 2 tuổi đến dưới 12 tuổi</span>
                  </div>
                  <div className="change-number">
                    <span className="minus icon_change">
                      <FaMinusCircle type="button" onClick={() => setCountChild(countChild - 1)}/>
                    </span>
                    <span className="mx-2">{countChild}</span>
                    <span className="plus icon_change">
                      <FaPlusCircle type="button" onClick={() => setCountChild(countChild + 1)}/>
                    </span>
                  </div>
                </div>
              </Col>
              <Col lg="6">
                <div className="change d-flex justify-content-between align-items-center py-2 px-3 rounded border border-dark">
                  <div className="change-title d-flex flex-column">
                    <span className="card_title_tour">Em bé</span>
                    <span>Dưới 2 tuổi</span>
                  </div>
                  <div className="change-number">
                    <span className="minus icon_change">
                      <FaMinusCircle type="button" onClick={() => setCountBaby(countBaby - 1)}/>
                    </span>
                    <span className="mx-2">{countBaby}</span>
                    <span className="plus icon_change">
                      <FaPlusCircle type="button" onClick={() => setCountBaby(countBaby + 1)}/>
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="bg-color rounded">
              <Row className="px-3 py-4 mt-4  ">
                <Col lg="6" className="mb-2">
                  <span>
                    . Người lớn sinh trước ngày{" "}
                    <span className="card_title_tour">31/08/2011</span>
                  </span>
                </Col>
                <Col lg="6">
                  <span>
                    . Người lớn sinh trước ngày{" "}
                    <span className="card_title_tour">31/08/2011</span>
                  </span>
                </Col>
                <Col lg="6">
                  <span>
                    . Người lớn sinh trước ngày{" "}
                    <span className="card_title_tour">31/08/2011</span>
                  </span>
                </Col>
              </Row>
            </div>
            <div className="my-5">
              <Form>
                <div className="mb-3">
                  <Form.Check
                    label="Nhập danh sách khách hàng"
                    name="group1"
                    type="radio"
                    id="contact1"
                  />
                </div>
                <div className="mb-3">
                  <Form.Check
                    label="Tôi cần được nhân viên tư vấn Nhanhtravel trợ giúp nhập thông tin đăng ký dịch vụ"
                    name="group1"
                    type="radio"
                    id="contact"
                  />
                </div>
              </Form>
            </div>
            <div className="info_passenger mb-3">
              <span>Thông tin khách hàng</span>
              <div className="mt-2">
                <span className="card_title_tour">
                  <FaUserFriends className="icon_detail_tour me-2" />
                  Người lớn
                </span>
                <Form>
                <Row>
                  <Col lg="3">
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label>
                        Họ và Tên <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control type="text" required />
                    </Form.Group>
                  </Col>
                  <Col lg="2">
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label>
                        Giới tính <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control type="text" required />
                    </Form.Group>
                  </Col>
                  <Col lg="5">
                    <Row>
                      <Col lg="4">
                        <Form.Label>
                          Ngày sinh <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Select aria-label="">
                          <option>&nbsp;</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Col>
                      <Col lg="4">
                        <Form.Label>&nbsp;</Form.Label>
                        <Form.Select aria-label="">
                          <option>&nbsp;</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Col>
                      <Col lg="4">
                        <Form.Label>&nbsp;</Form.Label>
                        <Form.Select aria-label="">
                          <option>&nbsp;</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg="2">
                    {/* <span>{surCharge}</span> */}
                    <Form.Label>Phòng riêng</Form.Label>
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      label="6.000.000đ"
                      onClick = {() => handelCheck()}
                      value = {checked ? moneyRequest : 0}
                    />
                  </Col>
                </Row>
              </Form>
              </div>
              <div className="mt-2">
                <span className="card_title_tour">
                  <FaChild className="icon_detail_tour me-2" />
                  Trẻ em
                </span>
                <Form>
                  <Row>
                    <Col lg="3">
                      <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>
                          Họ và Tên <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control type="text" required />
                      </Form.Group>
                    </Col>
                    <Col lg="2">
                      <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>
                          Giới tính <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control type="text" required />
                      </Form.Group>
                    </Col>
                    <Col lg="5">
                      <Row>
                        <Col lg="4">
                          <Form.Label>
                            Ngày sinh <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Select aria-label="">
                            <option>&nbsp;</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </Col>
                        <Col lg="4">
                          <Form.Label>&nbsp;</Form.Label>
                          <Form.Select aria-label="">
                            <option>&nbsp;</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </Col>
                        <Col lg="4">
                          <Form.Label>&nbsp;</Form.Label>
                          <Form.Select aria-label="">
                            <option>&nbsp;</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </Col>
                      </Row>
                    </Col>
                    {/* <Col lg="2">
                                      <Form.Label>Phòng riêng</Form.Label>
                                      <Form.Check // prettier-ignore
                                      type="switch"
                                      id="custom-switch"
                                      label="6.000.000đ"
                                      />
                                  </Col> */}
                  </Row>
                </Form>
              </div>
              <div className="mt-2">
                <span className="card_title_tour">
                  <FaChild className="icon_detail_tour me-2" />
                  Em bé
                </span>
                <Form>
                  <Row>
                    <Col lg="3">
                      <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>
                          Họ và Tên <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control type="text" required />
                      </Form.Group>
                    </Col>
                    <Col lg="2">
                      <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>
                          Giới tính <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control type="text" required />
                      </Form.Group>
                    </Col>
                    <Col lg="5">
                      <Row>
                        <Col lg="4">
                          <Form.Label>
                            Ngày sinh <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Select aria-label="">
                            <option>&nbsp;</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </Col>
                        <Col lg="4">
                          <Form.Label>&nbsp;</Form.Label>
                          <Form.Select aria-label="">
                            <option>&nbsp;</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </Col>
                        <Col lg="4">
                          <Form.Label>&nbsp;</Form.Label>
                          <Form.Select aria-label="">
                            <option>&nbsp;</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </Col>
                      </Row>
                    </Col>
                    {/* <Col lg="2">
                                      <Form.Label>Phòng riêng</Form.Label>
                                      <Form.Check // prettier-ignore
                                      type="switch"
                                      id="custom-switch"
                                      label="6.000.000đ"
                                      />
                                  </Col> */}
                  </Row>
                </Form>
              </div>
            </div>
            <span className="text-700">
              Quý khách có ghi chú lưu ý gì, hãy nói với chúng tôi !
            </span>
            <div className="bg-color p-4 mt-3 rounded">
                <span>Ghi chú thêm</span>
                <Form>
                    <FloatingLabel controlId="floatingTextarea2" label="Vui lòng nhập nội dung lời nhắn bằng tiếng Anh hoặc tiếng Việt">
                        <Form.Control
                        as="textarea"
                        placeholder="Vui lòng nhập nội dung lời nhắn bằng tiếng Anh hoặc tiếng Việt"
                        style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                </Form>
            </div>
          </Col>

          <Col lg="4">
            {/* <div>
              <div>
                  <span className="text-primary">Quý khách cần hỗ trợ?</span>
                  <div className="mt-4">
                      <Button className="support_btn"><FaPhoneAlt className="me-2"/>Gọi miễn phí qua internet</Button>
                      <Button className="support_btn bg-white text-black boder-0 rounded-end"><FaMailBulk className="me-2"/>Gửi yêu cầu hỗ trợ ngay</Button>
                  </div>
              </div>
              <div className="border border-dark p-3 mt-4">
                  <span className="text-700">Tóm tắt chuyển đi</span>
                  <div>
                      <span className="card_title_tour">Tour trọn gói <span className="text-primary fs-6">(9 khách)</span></span>
                      <Row className="my-3">
                          <Col lg="3">
                              <img src="https://media.travel.com.vn/tour/tfd_230414053042_028635.jpg" className="w-100 rounded"/>
                          </Col>
                          <Col lg="9">
                              <span className="title_booking card_title_tour">Hàn Quốc: Seoul- Jeju - Bảo Tàng Ánh Sáng - Đảo Nami - Công viên Everland | Trải nghiệm mặc hanbok & làm kimchi | Lễ 2/9</span>
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
                                  <span className="text-primary fs-4"><FaUsers className="icon_detail_tour"/>3 người</span>
                                  <span>1 người lớn</span>
                                  <span>1 trẻ em</span>
                                  <span>1 em bé</span>
                              </div>
                          </div>
                          <div>
                              <div className="d-flex justify-content-between mb-3">
                                  <span>Người lớn</span>
                                  <span className="card_title_tour">1 x 24,999,000đ</span>
                              </div>
                              <div className="d-flex justify-content-between mb-3">
                                  <span>Trẻ em</span>
                                  <span className="card_title_tour">1 x 22,491,000đ</span>
                              </div>
                              <div className="d-flex justify-content-between mb-3">
                                  <span>Em bé</span>
                                  <span className="card_title_tour">1 x 7,497,000đ</span>
                              </div>
                              <div className="d-flex justify-content-between mb-3">
                                  <span className="card_title_tour">Phụ thu phòng riêng</span>
                                  <span className="card_title_tour">0đ</span>
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
                                  <span className="text-danger fs-3 fw-bold">54,978,000₫</span>
                              </div>
                              <Button className="w-100 btn-danger py-2 mt-3">ĐẶT NGAY</Button>
                          </div>
                      </div>
                  </div>
              </div>

            </div> */}
            <OverviewRight {...{countAdult, countChild, countBaby,data}}/>
          </Col>
        </Row>
      </Container>
    );
}