import React, { useRef } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ContactUs = () => {

    const NameRef = useRef('');
    const EmailRef = useRef('');
    const PasswordRef = useRef('');

    function submitHandler(event) {
        event.preventDefault();
            fetch("https://e-commerce-website-9bb41-default-rtdb.firebaseio.com/data.json", {
                method: "POST",
                headers: {"content-Type": "application/json"},
                body: JSON.stringify({
                    name: NameRef.current.value,
                    email: EmailRef.current.value,
                    password: PasswordRef.current.value
                })
            })


    }

  return (
    <div>
      <h2
        style={{ textAlign: "center", marginTop: "10px", fontFamily: "serif" }}
      >
        Contact-Us
      </h2>
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" ref={NameRef}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={EmailRef}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={PasswordRef}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default ContactUs;