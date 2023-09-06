import React from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function LoginLayout() {
  return (
   <div>
      <form>

      <MDBInput className='mb-4' id='name' label='Tên đăng nhập' />
      <MDBInput className='mb-4' type='password' id='form5Example2' label='Mật khẩu' />
      <MDBBtn type='login' >
        Đăng nhập
      </MDBBtn>
      
    </form>
   </div>
  );
}