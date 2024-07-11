import { Container, Row, Col } from "react-bootstrap";
import {FaApple} from 'react-icons/fa';
import { WhyListData } from "../data";
export default function WhyList(){
    return (
        <Container>
            <h4 className="color-text">Vì sao chọn Nhanhtravel</h4>
            <Row>
                {WhyListData.map((item) =>(
                    <Col lg="4" className="d-flex align-items-center flex-column mb-4" key={item.id}>
                        <FaApple className="icon_why mb-3"/>
                        <span className="card_title_tour mb-2">{item.title}</span>
                        <span>{item.description}</span>
                    </Col>
                ) )}
            </Row>
        </Container>
    )
}