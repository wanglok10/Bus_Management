import React from "react";
import { MDBInput } from "mdbreact";
import { Button } from "react-bootstrap";
import { MDBBtn }from "mdb-react-ui-kit"

function FeedbackLayout() {
  return (
    <form>
      <><label htmlFor="exampleFormControlTextarea1">Username</label>
        <MDBInput /><div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Feedback</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5" />
        </div></>
        <Button variant="contained" type="submit">Send</Button>
    </form>
  );
}

export default FeedbackLayout;