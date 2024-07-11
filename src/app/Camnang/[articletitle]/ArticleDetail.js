import { Col, Container, Row } from "react-bootstrap";
import ArticleList from "./ArticleList";

export default function ArticleDetail(data) {
  console.log(data)
  return (
    <Container >
      <Row>
        {[data].map((item,index) => (
            <Col lg="8" key={index}>
              <div className="py-5">
                <h3>
                    {item.title}
                </h3>
                <div className="d-flex">
                  <span className="color-text fw-bold">Cẩm nang du lịch</span>
                  <span className="ms-2"> {item.created_date}</span>
                  <span className="ms-2 text-secondary fw-bold">
                {" "}
                    - Trần Thị Cẩm Nhi (WikiTravel)
              </span>
                </div>
              </div>
              <div className="article">
                <p>
                    {item.desc}
                </p>
                <h4>Tổng quan về “bức tranh” du lịch Trung Quốc mùa thu</h4>
                <p>{item.content}</p>
                <h5>1. Thành Đô</h5>
                <img src="https://wiki-travel.com.vn/uploads/picture/camnhi-234822034855-dia-diem-du-lich-mua-thu-tai-trung-quoc-2.jpg" alt="du lich"/>
              </div>
            </Col>
        ))}

        <Col lg="4">
            <ArticleList />
        </Col>
      </Row>
    </Container>
  );
}
