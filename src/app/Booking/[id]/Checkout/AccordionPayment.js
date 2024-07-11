import { useState } from "react";
import {AccordionPaymentData} from '../../../data'
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { Col, Form } from "react-bootstrap";
export default function AccordionPayment(data) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const handelClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };
  return (
    <>
        {data.data.data.map((item, index) => (
            <Col lg="6" key={item.id}>
                <div className="bg-color mb-3" >
                <div className="d-flex justify-content-between align-items-center p-3 ">
                    <span>
                    <FaRegMoneyBillAlt className="icon_detail_tour" />{item.name}
                    </span>
                    <Form.Check type="radio" id={item.index} onClick={() => handelClick(index)} checked={activeIndex !== index ? false : true }></Form.Check>
                </div>
                {   
                    index === activeIndex &&  
                    <div className="p-3">
                        <p>
                        <title></title>
                        </p>
                        <span>{item.content}</span>
                    </div> 
                }
                </div>
            </Col>
        ))}
    </>
    );
}
