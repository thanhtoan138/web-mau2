import { Container } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function BreadcrumbBooking() {
  return (
    <Container >
      <Breadcrumb className='py-3 border-top border-bottom'>
        <Breadcrumb.Item href="#">1. Home</Breadcrumb.Item>
        <Breadcrumb.Item active>2. Data</Breadcrumb.Item>
      </Breadcrumb>

    </Container>
  );
}

export default BreadcrumbBooking;