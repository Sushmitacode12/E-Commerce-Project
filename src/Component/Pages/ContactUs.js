// import React, { useRef } from 'react';

// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// const ContactUs = () => {

//     const NameRef = useRef('');
//     const EmailRef = useRef('');
//     const PasswordRef = useRef('');

//     function submitHandler(event) {
//         event.preventDefault();
//             fetch("https://e-commerce-website-9bb41-default-rtdb.firebaseio.com/data.json", {
//                 method: "POST",
//                 headers: {"content-Type": "application/json"},
//                 body: JSON.stringify({
//                     name: NameRef.current.value,
//                     email: EmailRef.current.value,
//                     password: PasswordRef.current.value
//                 })
//             })


//     }

//   return (
//     <div>
//       <h2
//         style={{ textAlign: "center", marginTop: "10px", fontFamily: "serif" }}
//       >
//         Contact-Us
//       </h2>
//     <Form onSubmit={submitHandler}>
//       <Form.Group className="mb-3" controlId="formBasicName">
//         <Form.Label>Name</Form.Label>
//         <Form.Control type="text" placeholder="Name" ref={NameRef}/>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" ref={EmailRef}/>
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" ref={PasswordRef}/>
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//     </div>
//   );
// }

// export default ContactUs;

import { Button } from "react-bootstrap";
import React, { useRef } from "react";

export const ContactUs = (props) => {
  
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");

  const submitHandler = () => {
    const detailRef = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };
    console.log(detailRef);
    props.onSubmit(detailRef);
    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
  };

  return (
    <form className="text-center">
      <div>
        <label className="mt-5">Name:</label>
        <input type="text" name="name" ref={nameRef} />
      </div>
      <div>
        <label className="mt-5">E-mail Id:</label>
        <input type="email" name="email" ref={emailRef} />
      </div>
      <div>
        <label className="mt-5 mb-4">Phone Number:</label>
        <input type="phone" name="phone number" ref={phoneRef} />
      </div>
      <Button className="mb-2" onClick={submitHandler}>Submit</Button>
    </form>
  );
};