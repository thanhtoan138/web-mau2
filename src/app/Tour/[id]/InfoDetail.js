import { Col, Container, Row, Table } from "react-bootstrap";

export default function InfoDetail(data){
    const arr = [data.data];
    return (
        <Container >
            {arr ? arr.map((item,idx) => (
                <Row className="mt-4" key={idx}>
                    <Col lg={6}>
                        <span className="title_page_detail mb-4">Chi tiết tour</span>
                        <div className="mt-4 info_fight">
                            <span className="title_page_detail">Thông tin chuyến bay</span>
                            <Row className="mb-5">
                                <Col lg={6} className="mt-2">
                                    <span>Ngày đi <span className="card_title_tour">28/08/2023</span></span>
                                    <div className="d-flex">
                                        <span className="d-flex flex-column align-items-center">{item.city_start_name}<span>(SGN)</span></span>
                                        <img src="https://media.travel.com.vn/ImageAirlines/logo_VIETJETAIR.png" className="flight-logo mx-1"/>
                                        <span  className="d-flex flex-column align-items-center">{item.city_end_name}<span>(DYG)</span></span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>16:05</span>
                                        <span>20:30</span>
                                    </div>
                                    <div className="p-line">
                                        <span><img data-cfsrc="/Content/Theme/images/go.png" alt="image" src="https://travel.com.vn/Content/Theme/images/go.png"/></span>
                                        <span><img data-cfsrc="/Content/Theme/images/p.png" alt="image" src="https://travel.com.vn/Content/Theme/images/p.png"/></span>
                                        <span><img data-cfsrc="/Content/Theme/images/to.png" alt="image" src="https://travel.com.vn/Content/Theme/images/to.png"/></span>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <span>Ký hiệu chuyến bay</span>
                                        <span className="card_title_tour mt-2">VJ2552</span>
                                    </div>
                                </Col>

                                <Col lg={6} className="mt-2">
                                    <span>Ngày về <span className="card_title_tour">28/08/2023</span></span>
                                    <div className="d-flex">
                                        <span className="d-flex flex-column align-items-center">{item.city_end_name}<span>(SGN)</span></span>
                                        <img src="https://media.travel.com.vn/ImageAirlines/logo_VIETJETAIR.png" className="flight-logo mx-1"/>
                                        <span  className="d-flex flex-column align-items-center">{item.city_start_name}<span>(DYG)</span></span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>16:05</span>
                                        <span>20:30</span>
                                    </div>
                                    <div className="p-line">
                                        <span><img data-cfsrc="/Content/Theme/images/go.png" alt="image" src="https://travel.com.vn/Content/Theme/images/go.png"/></span>
                                        <span><img data-cfsrc="/Content/Theme/images/p.png" alt="image" src="https://travel.com.vn/Content/Theme/images/p.png"/></span>
                                        <span><img data-cfsrc="/Content/Theme/images/to.png" alt="image" src="https://travel.com.vn/Content/Theme/images/to.png"/></span>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <span>Ký hiệu chuyến bay</span>
                                        <span className="card_title_tour mt-2">VJ2552</span>
                                    </div>
                                </Col>
                            </Row>
                            <span className="card_title_tour">Thông tin tập trung</span>
                            <div>
                                <div className="d-flex justify-content-between">
                                    <span>Ngày giờ tập trung</span>
                                    <div className="d-flex flex-column text-end">
                                        <span>12:25</span>
                                        <span>28/08/2023</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>Nơi tập trung</span>
                                    <span>Sân bay</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <span className="title_page_detail">Giá tour & phụ thu phòng đơn</span>
                        <div className="info_price mt-4">
                            <Table>
                                <thead>
                                <tr>
                                    <th>Loại Khách</th>
                                    <th>Giá tour</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Người lớn (Từ 12 tuổi trở lên)</td>
                                    <td>{item.price} đ</td>
                                </tr>
                                <tr>
                                    <td>Trẻ em (Từ 2 tuổi đến dưới 12 tuổi)</td>
                                    <td>14,841,000 đ</td>
                                </tr>
                                <tr>
                                    <td>Em bé (Dưới 2 tuổi)</td>
                                    <td>4,947,000 đ</td>
                                </tr>
                                <tr>
                                    <td>Phụ thu phòng đơn</td>
                                    <td>0 đ</td>
                                </tr>
                                </tbody>
                            </Table>
                        </div>
                        <span className="title_page_detail">Thông tin hướng dẫn viên</span>
                        <div className="info_tour_guide">
                            <div className="d-flex flex-column">
                                <span>HDV dẫn đoàn</span>
                                <span>Đang cập nhật</span>
                            </div>
                            <div className="d-flex flex-column mt-4">
                                <span>HDV tiễn</span>
                                <span>Đang cập nhật</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            )) : []}

        </Container>
    )
}