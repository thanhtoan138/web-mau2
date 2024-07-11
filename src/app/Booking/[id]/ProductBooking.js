import { Col, Container, Row } from "react-bootstrap";

export default function ProductBooking(data){
    const arr = [data.data]
    return (
        <Container >
            {arr ? arr.filter((item)=>item.id == 67).map((item,idx) => (
                <Row className="mt-4" key={idx}>
                    <Col lg="4" className="pe-0">
                        <img src={item.image[0]} className="w-100 rounded-1 h-100"/>
                    </Col>
                    <Col lg="8" className="px-3 py-2 bg-color">
                        <div className="d-flex align-items-center mb-3">
                            <span className="tag_point me-2">9</span>
                            <span className="color-text fw-bold me-2">Rất tốt</span>
                            <span>358 quan tâm</span>
                        </div>
                        <span className="tour_detail_title">{item.name}</span>
                        <div className="mt-3">
                            Mã tour <span className="color-text fw-bold">{item.code}</span>
                        </div>
                        <div className="mt-2">
                            Khởi hành <span className="color-text fw-bold">28/08/2023</span>
                        </div>
                        <div className="mt-2">
                            Thời gian <span className="color-text fw-bold">{item.date_type_name}</span>
                        </div>
                        <div className="mt-2">
                            Nơi khởi hành <span className="color-text fw-bold">{item.city_start_name}</span>
                        </div>
                        <div className="mt-2">
                            Số chỗ còn nhận  <span className="color-text fw-bold">9</span>
                        </div>
                        <div className="mt-2">
                            Dịch vụ tùy chọn  <span className="color-text fw-bold">Bay hàng không Tway Air - 4 đêm khách sạn 3 sao đia phương</span>
                        </div>
                    </Col>
                </Row>
                )) : []}

        </Container>
    )
}