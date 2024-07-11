"use client"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {FaUserAlt,FaSearch} from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';

export default function Header(){
  const [search, setSearch] = useState('');
  console.log(search);
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container  className='d-flex justify-content-between'>
        <div className="d-flex">
          <Link href="/">
            <img src="https://demo.nhanhtravel.com/upload/company/20230729124433.png" style={{width: '200px'}}/>
          </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Du lịch" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Nhanhtravel</Nav.Link>
            <NavDropdown title="Vận chuyển" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown><NavDropdown title="Tin tức" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <Link href="/Tintuc">
                  Tin tức mới
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link href="/Camnang">
                  Cẩm nang du lịch
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Khuyến mãi" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">NhanhtravelPlus</Nav.Link>
            <Nav.Link href="/Contact">Liên hệ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
        <div className='d-flex align-items-center justify-content-between'>
            <InputGroup className="mb-3">
            <Form.Control
            placeholder="Bắt đầu tìm kiếm"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setSearch(e.target.value)}
            />
            <InputGroup.Text id="basic-addon1"><FaSearch/></InputGroup.Text>
            </InputGroup>
            <FaUserAlt className='ms-3 mb-3'/>
        </div>
        
      </Container>
    </Navbar>
    )
}