import { Col, Container, Row } from "react-bootstrap";

export default function ImgDetail(data) {
  const arr = data.data.image;
  return (
    <Container >
      <div className="layout_img">
        {arr ? arr.filter((item, idx) => idx < 4).map((item,index) => (
                <div className="layout_item" key={index}>
                  <img src={item}/>
                </div>
        )) : []}

      </div>
    </Container>
  );
}
