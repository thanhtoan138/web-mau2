import { Container, Row, Col, Form } from "react-bootstrap";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import OverviewRight from "./OverviewRight";
import {useEffect, useState} from "react";
import AccordionPayment from "./AccordionPayment";
import * as actionType from "../../../../../redux/actions/type";
import axios from "axios";
export default function PaymentMethod(data) {
  const [checked, setChecked] = useState(false);
  const [dataDetail,setDataDetail] = useState([]);
  const getData = () => {
    const URL = actionType.BASE_URL_API + 'customer/Tour/tour_detail?id=67';
    axios.get(URL, {
      headers: {
        "x-api-key": "api_key",
        "USER-TOKEN": "2BF8MD9TRK78NPQ0RHQ712WERV50QUIDK0N3QRFFZW7OL6G8E0WTMGJYHKAOOGJZA4SO23NI98SP5L1L2EL67829CS6V21QZS4WFP6K8RK8669QJ2J6QVHFTWOOZ8Y22",
        "Content-Type": "application/x-www-form-urlencoded",
      }
    })
        .then(function(res){
          setDataDetail(res.data.data);
        })
        .catch(function(err){
          console.log(err);
        })
  }

  useEffect(() => {
    getData();
  }, []);
  function createMarkup(c) {
    return {__html: c};
  }
  return (
    <Container  className="mt-5">
      <span className="tour_detail_title">Thanh Toán</span>
      <div className="mt-3">
        <span className="text-700">Các hình thức thanh toán</span>
        <Row className="mt-2">
          <Col lg="8">
            <Row className="mt-2">
              <AccordionPayment data={data}/>
            </Row>
            <div className="mt-4">
              <span className="text-700">
                Điều khoản bắt buộc khi đăng ký online
              </span>
              <div className="term_content mt-3">
                {[dataDetail].map((item,idx) => (
                    <span key={idx}>
                  {item.policy_payment_content && <div dangerouslySetInnerHTML={createMarkup(item.policy_payment_content)}></div>}
                </span>
                ))}

              </div>
              <Form>
                <Form.Check
                  inline
                  label="Tôi đồng ý với các điều kiện trên"
                  name="group1"
                  type="checkbox"
                  id="checkbox1"
                  className="text-primary"
                />
              </Form>
            </div>
          </Col>

          <Col lg="4">
            <OverviewRight />
          </Col>
        </Row>
      </div>
    </Container>
  );
}
