import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import NavbarHeader from './Navbar/Navbar';
import NhaXe from './Garage/NhaXe/NhaXe';
import ThongKe from './Garage/ThongKe/ThongKe';
import GarageLayout from './Garage/GarageLayout';
import Home from './Home/Home';
import Chuyen from './Garage/Chuyen/Chuyen';
import ChuyenChoHang from'./Transport/ChuyenChoHang/ChuyenChoHang';
import Product from './Transport/Product/Product';
import VeChoHang from './Transport/VeChoHang/VeChoHang';
import TransportLayout from './Transport/Transport';
import BUSLayout from './BUS/BUSLayout';
import ChuyenXe from './BUS/ChuyenXe/ChuyenXe';
import VeXe from './BUS/VeXe/VeXe';
import GheChuyenXe from './BUS/GheChuyenXe/GheChuyenXe';
import Xe from './BUS/Xe/Xe';
import BenXe from './BUS/BenXe/BenXe';
import UserLayout from'./User/UserLayout';
import NhanVien from './User/NhanVien/NhanVien';
import BinhLuan from './User/BinhLuan/BinhLuan';
import KhachHang from './User/KhachHang/KhachHang';
import LoginLayout from './Login/login';
export default function Layout() {
  return (
    <div>
      <Router>
        <div className="h-screen w-full">
          <NavbarHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/garage" element={<GarageLayout />}>
              <Route index element={<Chuyen />} />
              <Route path="chuyen" element={<Chuyen />} />
              <Route path="nhaxe" element={<NhaXe />} />
              <Route path="thongke" element={<ThongKe />} />
            </Route>

            <Route path="/transport" element={<TransportLayout />}>
              <Route index element={<ChuyenChoHang />} />
              <Route path="chuyenchohang" element={<ChuyenChoHang />} />
              <Route path="vechohang" element={<VeChoHang />} />
              <Route path="product" element={<Product />} />
            </Route>

            <Route path="/bus" element={<TransportLayout />}>
              <Route index element={<BenXe />} />
              <Route path="benxe" element={<BenXe />} />
              <Route path="chuyenxe" element={<ChuyenXe />} />
              <Route path="ghechuyenxe" element={<GheChuyenXe />} />
              <Route path="vexe" element={<VeXe />} />
              <Route path="xe" element={<Xe />} />
            </Route>

            <Route path="/user" element={<UserLayout />}>
              <Route index element={<NhanVien />} />
              <Route path="nhanvien" element={<NhanVien />} />
              <Route path="khachhang" element={<KhachHang />} />
              <Route path="binhluan" element={<BinhLuan />} /> 
            </Route> 
             
            <Route path="/login" element={<LoginLayout />}/>
            </Routes>
        </div>
      </Router>
       
    </div>
  );
}
