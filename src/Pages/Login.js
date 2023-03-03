import React, {  useRef, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../Component/stor/cart-context';

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

        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAZdyMbRVbELyUH1-ymvSOrdU2xmstPim4",
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
        history.replace('/store');
      })
      .catch((err) => {
        alert(err.message);
      });
    };
    

  return (
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