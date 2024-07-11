import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import React from "react";
import Select from "react-select";
import {
  FaCar,
  FaRegBuilding,
  FaFighterJet,
  FaSearch,
  FaArrowsAltH,
} from "react-icons/fa";
import { FaPlaneDeparture } from "react-icons/fa6";
export default function SearchBox() {
  return (
    <Container className="position-relative">
      <div className="search_box">
        <Tab.Container id="left-tabs-example" defaultActiveKey="link-1">
          <Nav
            variant="tabs"
            defaultActiveKey="link-1"
            className="searchbox_nav_tabs"
          >
            <Nav.Item className="nav_item_search">
              <Nav.Link
                eventKey="link-1"
                className="d-flex flex-column align-items-center nav_link_search p-4"
              >
                <FaCar className="mb-2 icon_detail_tour" />
                <p className="fw-bold">Tour du lịch trọn gói</p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav_item_search">
              <Nav.Link
                eventKey="link-2"
                className="d-flex flex-column align-items-center nav_link_search p-4"
              >
                <FaRegBuilding className="mb-2 icon_detail_tour" />
                <p className="fw-bold">Khách sạn</p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav_item_search">
              <Nav.Link
                eventKey="link-3"
                className="d-flex flex-column align-items-center nav_link_search p-4"
              >
                <FaPlaneDeparture className="mb-2 icon_detail_tour" />
                <p className="fw-bold">Vé máy bay</p>
              </Nav.Link>
            </Nav.Item>
            {/*<Nav.Item>*/}
            {/*  <Nav.Link*/}
            {/*    eventKey="link-4"*/}
            {/*    className="d-flex flex-column align-items-center nav_link_search p-4"*/}
            {/*  >*/}
            {/*    <div>*/}
            {/*      <FaFighterJet className="mb-2" /> +{" "}*/}
            {/*      <FaRegBuilding className="mb-2" />*/}
            {/*    </div>*/}
            {/*    <p>Vé máy bay + Khách sạn</p>*/}
            {/*  </Nav.Link>*/}
            {/*</Nav.Item>*/}
            {/*<Nav.Item>*/}
            {/*  <Nav.Link*/}
            {/*    eventKey="link-5"*/}
            {/*    className="d-flex flex-column align-items-center nav_link_search p-4"*/}
            {/*  >*/}
            {/*    <div>*/}
            {/*      <FaCar className="mb-2" /> + <FaRegBuilding className="mb-2" />*/}
            {/*    </div>*/}
            {/*    <p>Xe + Khách sạn</p>*/}
            {/*  </Nav.Link>*/}
            {/*</Nav.Item>*/}
            <Nav.Item className="nav_item_search ">
              <Nav.Link
                eventKey="link-6"
                className="d-flex flex-column align-items-center nav_link_search p-4"
              >
                <FaSearch className="mb-2 icon_detail_tour" />
                <p className="fw-bold">Tra cứu booking</p>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content className="bg-white p-4 searchbox_content">
            <Tab.Pane eventKey="link-1">
              <Tab.Container defaultActiveKey="link-2-1">
                <Nav variant="pills" defaultActiveKey="link-2-1" className="mb-3">
                  <Nav.Item>
                    <Nav.Link eventKey="link-2-1">Du lịch trong nước</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-2-2">Du lịch nước ngoài</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="link-2-1">
                    <Tab.Container defaultActiveKey="link-2-1-1">
                      <Nav variant="tabs" defaultActiveKey="link-2-1-1">
                        <Nav.Item>
                          <Nav.Link eventKey="link-2-1-1">Tour trọn gói</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="link-2-2-2">
                            Dịch vụ điểm đến
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content className="pt-4">
                        <Tab.Pane eventKey="link-2-1-1">
                          <Row>
                            <Col lg="6" className="d-flex">
                              <Form.Select className="max-height-content form-search">
                                <option>Điểm đi</option>
                              </Form.Select>
                              <FaArrowsAltH className="icon_arrow" />
                              <Form.Select className="max-height-content form-search">
                                <option>Điểm đến</option>min
                              </Form.Select>
                            </Col>
                            <Col lg="3">
                              <Form.Control
                                type="date"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                                className="input_date form-search"
                              />
                            </Col>
                            <Col lg="2">
                              <Form.Select className="input_select_num_date form-search">
                                <option>Số ngày</option>
                              </Form.Select>
                            </Col>
                            <Col lg="1">
                              <Button className="btn_submit">
                                <FaSearch />
                              </Button>
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="link-2-2-2">
                          <Row>
                            <Col lg="4">
                                <Form.Select className="max-height-content form-search">
                                    <option>Điểm đến</option>
                                </Form.Select>
                            </Col>
                            <Col lg="4">
                              <Form.Control
                                type="date"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                                className="input_date form-search"
                              />
                            </Col>
                            <Col lg="4">
                              <Button className="btn_submit">
                                <FaSearch />
                              </Button>
                            </Col>
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Tab.Pane>
                  <Tab.Pane eventKey="link-2-2">
                    <Row>
                      <Col lg="6" className="d-flex">
                        <Form.Select className="max-height-content form-search">
                          <option>Điểm đến</option>
                        </Form.Select>
                        <FaArrowsAltH className="icon_arrow" />
                        <Form.Select className="max-height-content form-search">
                          <option>Ngày đi</option>
                        </Form.Select>
                      </Col>
                      <Col lg="3">
                        <Form.Control
                          type="date"
                          id="inputPassword5"
                          aria-describedby="passwordHelpBlock"
                          className="input_date form-search"
                        />
                      </Col>
                      <Col lg="2">
                        <Form.Select className="input_select_num_date form-search">
                          <option>Số ngày</option>
                        </Form.Select>
                      </Col>
                      <Col lg="1">
                        <Button className="btn_submit">
                          <FaSearch />
                        </Button>
                      </Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Tab.Pane>
            <Tab.Pane eventKey="link-2">
              <Row>
                <p>Khách sạn</p>
                <Col lg="8 mb-3">
                    <Form.Select className="input_select_num_date form-search">
                        <option>Điểm đến hoặc tên khách sạn</option>
                    </Form.Select>
                </Col>
                <Col lg="4 mb-3">
                  <Form.Control
                    type="date"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                    className="input_date form-search"
                  />
                </Col>
                <Col lg="4 mb-3">
                    <Form.Select className="input_select_num_date form-search">
                        <option>Số người</option>
                    </Form.Select>
                </Col>
                <Col lg="4 mb-3">
                    <Form.Select className="input_select_num_date form-search">
                        <option>Số phòng</option>
                    </Form.Select>
                </Col>
                <Col lg="4">
                      <Button className="btn_submit">
                          <FaSearch />
                      </Button>
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="link-3">
              <Tab.Container defaultActiveKey="link-3-1">
                  <Nav variant="pills" defaultActiveKey="link-3-1" className="mb-3">
                      <Nav.Item>
                      <Nav.Link eventKey="link-3-1">Một chiều</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                      <Nav.Link eventKey="link-3-2">Khứ hồi</Nav.Link>
                      </Nav.Item>
                  </Nav>
                  <Tab.Content defaultActiveKey="link-3-1">
                      <Tab.Pane eventKey="link-3-1">
                          <Row>
                              <p>Máy bay</p>
                              <Col lg="4 mb-3">
                                  <Form.Select className="input_select_num_date form-search form-search">
                                      <option>Điểm đi</option>
                                  </Form.Select>
                              </Col>
                              <Col lg="4 mb-3">
                                  <Form.Select className="input_select_num_date form-search">
                                      <option>Điểm đến</option>
                                  </Form.Select>
                              </Col>
                              <Col lg="4 mb-3">
                                  <Form.Control
                                  type="date"
                                  id="inputPassword5"
                                  aria-describedby="passwordHelpBlock"
                                  className="input_date form-search"
                                  />
                              </Col>
                              <Col lg="4 mb-3">
                                  <Form.Select className="input_select_num_date form-search">
                                      <option>Số người</option>
                                  </Form.Select>
                              </Col>
                              <Col lg="4 mb-3">
                                  <Form.Select className="input_select_num_date form-search">
                                      <option>Hãng bay</option>
                                  </Form.Select>
                              </Col>
                              <Col lg="4">
                                      <Button className="btn_submit">
                                          <FaSearch />
                                      </Button>
                              </Col>
                          </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="link-3-2">
                          <Row>
                              <p>Máy bay</p>
                              <Col lg="4 mb-3">
                                  <Form.Select className="input_select_num_date form-search">
                                      <option>Điểm đi</option>
                                  </Form.Select>
                              </Col>
                              <Col lg="4 mb-3">
                                  <Form.Select className="input_select_num_date form-search">
                                      <option>Điểm đến</option>
                                  </Form.Select>
                              </Col>
                              <Col lg="4 mb-3">
                                  <Form.Control
                                      type="date"
                                      id="inputPassword5"
                                      aria-describedby="passwordHelpBlock"
                                      className="input_date form-search"
                                  />
                              </Col>
                              <Col lg="4 mb-3">
                                  <Form.Select className="input_select_num_date form-search">
                                      <option>Số người</option>
                                  </Form.Select>
                              </Col>
                              <Col lg="4 mb-3">
                                  <Form.Select className="input_select_num_date form-search">
                                      <option>Chuyến bay</option>
                                  </Form.Select>
                              </Col>
                              <Col lg="4">
                                      <Button className="btn_submit">
                                          <FaSearch />
                                      </Button>
                              </Col>
                          </Row>
                      </Tab.Pane>
                  </Tab.Content>
              </Tab.Container>
            </Tab.Pane>
            {/*<Tab.Pane eventKey="link-4">Four tab content</Tab.Pane>*/}
            {/*<Tab.Pane eventKey="link-5">Five tab content</Tab.Pane>*/}
            <Tab.Pane eventKey="link-6">
              
            <Tab.Container defaultActiveKey="link-6-1">
                  <Nav variant="pills" defaultActiveKey="link-6-1" className="mb-3">
                      <Nav.Item>
                      <Nav.Link eventKey="link-6-1">Du lịch trọn gói/combo</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                      <Nav.Link eventKey="link-6-2">Vé máy bay và Khách sạn</Nav.Link>
                      </Nav.Item>
                  </Nav>
                  <Tab.Content defaultActiveKey="link-6-1">
                      <Tab.Pane eventKey="link-6-1">
                          <Row>
                              <Col lg="9 mb-3">
                                  <Form.Control
                                  type="text"
                                  id="inputPassword5"
                                  aria-describedby="passwordHelpBlock"
                                  className="input_date form-search"
                                  />
                              </Col>
                              <Col lg="3">
                                      <Button className="btn_submit">
                                          <FaSearch />
                                      </Button>
                              </Col>
                          </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="link-6-2">
                          <Row>
                              <Col lg="9 mb-3">
                                  <Form.Control
                                  type="text"
                                  id="inputPassword5"
                                  aria-describedby="passwordHelpBlock"
                                  className="input_date form-search"
                                  />
                              </Col>
                              <Col lg="3">
                                      <Button className="btn_submit">
                                          <FaSearch />
                                      </Button>
                              </Col>
                          </Row>
                      </Tab.Pane>
                  </Tab.Content>
              </Tab.Container>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </Container>
  );
}
