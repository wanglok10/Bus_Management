import React from "react";
import { MDBInput } from "mdbreact";
import { Button } from "react-bootstrap";
import { MDBBtn }from "mdb-react-ui-kit"
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
function FeedbackLayout() {
  const FeedbackSubmit = ()=>{
    toast.success("da gui thanh cong")
  }
  return (
    <div className="feedback">
    <form>
      <><label htmlFor="exampleFormControlTextarea1">Tên của bạn</label>
        <MDBInput /><div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Phản hồi</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5" />
        </div></>
        <Button variant="contained" type="submit" onClick={FeedbackSubmit} className="btn">Gửi</Button>
    </form>
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>

  );
}

export default FeedbackLayout;