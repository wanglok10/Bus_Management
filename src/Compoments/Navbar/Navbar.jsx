import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function NavbarHeader() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand >
      <Button className='btn'><Link to={"/"} >BUS2L</Link></Button>
      </Navbar.Brand>
     
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Garage
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item >
              <Link to={"/garage/chuyen"} >Chuyến</Link>
            </Dropdown.Item>
            <Dropdown.Item >
            <Link to={"/garage/nhaxe"} >Chuyến Đi Của Nhà Xe</Link>
            </Dropdown.Item>
            <Dropdown.Item >
            <Link to={"/garage/thongke"} >Thống Kê</Link>
            </Dropdown.Item>
            
          </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
           Transport
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item >
             <Link to ={"/transport/chuyenchohang"}>Chuyến Chở Hàng </Link>
            </Dropdown.Item>
            <Dropdown.Item >
            <Link to ={"/transport/product"}>Product </Link>
            </Dropdown.Item>
            <Dropdown.Item >
            <Link to ={"/transport/vechohang"}>Vé Chở Hàng </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
           BUS
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item >
             <Link to ={"/BUS/benxe"}>Bến Xe </Link>
            </Dropdown.Item>
            <Dropdown.Item >
            <Link to ={"/BUS/chuyenxe"}>Chuyến Xe</Link>
            </Dropdown.Item>
            <Dropdown.Item >
            <Link to ={"/BUS/ghechuyenxe"}>Ghế Chuyến Xe </Link>
            </Dropdown.Item>
            <Dropdown.Item >
            <Link to ={"/BUS/vexe"}>Vé Xe</Link>
            </Dropdown.Item>
            <Dropdown.Item >
            <Link to ={"/BUS/xe"}> Xe</Link>
            </Dropdown.Item>


          </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
           User
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item >
             <Link to ={"/user/nhanvien"}>Nhân Viên </Link>
            </Dropdown.Item>
            <Dropdown.Item >
            <Link to ={"/user/binhluan"}>Bình Luận</Link>
            </Dropdown.Item>
            <Dropdown.Item >
            <Link to ={"/user/khachhang"}>Khách Hàng </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>

    
      <Button className='btn'>
        <Link to ={"/login"}>Login </Link>
      </Button>;
      
    </Container>
  </Navbar>
  )
}
