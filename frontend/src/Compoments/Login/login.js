import React from "react";
import { Button } from 'react-bootstrap';
import { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import apis, { authAPI, endpoints } from '../configs/Api';
import { MyUserContext } from '../Layout';
import { Navigate } from 'react-router-dom';
import cookie from "react-cookies";
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [currentUser, state] = useContext(MyUserContext)
  const login = (evt) => {
    evt.preventDefault()
    const process = async () => {
      try {
        let res = await apis.post(endpoints['login'], {
          "username": username,
          "password": password
        })
        cookie.save('token', res.data)
        let { data } = await authAPI().get(endpoints['current-user'])
        cookie.save('user', data)
        state({
          'Type': 'login',
          'payload': data
        })

      } catch (ex) {
        console.log(ex)
      }
    }

    process()
  }

  if (currentUser !== null)
    return (<Navigate to="/" />)

  return (
    <>
      <h1 className="text-center text-success">Đăng Nhập người dùng</h1>
      <Form className="content" onSubmit={login}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Tên Đăng Nhập</Form.Label>
          <Form.Control type="text" placeholder="Tên Đăng Nhập" onChange={e => setUsername(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Mật Khẩu</Form.Label>
          <Form.Control type="password" placeholder="Mật Khẩu" onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        <Button type='submit' variant="primary">Đăng Nhập</Button>{' '}
      </Form>
    </>
  )
}

export default Login 
