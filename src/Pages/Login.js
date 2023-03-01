import React, {  useRef, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router-dom';
import {AuthContext} from '../Store/cart-context';

const Login = () => {

    const history = useHistory();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const authCtx = useContext(AuthContext);
  
    const submitHandler = (e) => {
      e.preventDefault();
  
      const enteredEmail = emailInputRef.current.value;
      const enteredpassword = passwordInputRef.current.value;
  
      fetch(
        // "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAZdyMbRVbELyUH1-ymvSOrdU2xmstPim4",
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCzhVcxXkLFWDrUJqrUwpwOlq8dySbCDes",
        {
          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredpassword,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type' : 'application/json',
          },
        })
        .then(async (res) => {
          if (res.ok) {
            return res.json();
          } else {
            let errorMessage = "Authentication Failed";
            throw new Error(errorMessage);
          }
      })
      .then((data) => {
        authCtx.login(data.idToken, data.email);
        history.replace('/Store');
      })
      .catch((err) => {
        alert(err.message);
      });
    };
    

  return (
  //   <form className="text-center bg-White">
  //   <h3>Login</h3>
  //   <div>
  //     <label>Your Email</label>
  //   </div>
  //   <input
  //     name="email"
  //     id="email"
  //     type="email"
  //     required
  //     ref={emailInputRef}
  //   />
  //   <div>
  //     <label>Your Password</label>
  //   </div>
  //   <input
  //     name="password"
  //     id="password"
  //     type="password"
  //     required
  //     ref={passwordInputRef}
  //   />
  //   <div>
  //     <button
  //       className="mt-3 mb-3 bg-primary text-white"
  //       onClick={submitHandler}
  //     >
  //       Login
  //     </button>
  //   </div>
  // </form>
  <div style={{margin:'5%'}}>
    <h1 style={{textAlign:'center',fontFamily:'MV Boli'}}>Log In</h1>
      <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  ref={emailInputRef}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={passwordInputRef}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="success" type="submit">
        Log In
      </Button>
    </Form>
    </div>
  );
}

export default Login;