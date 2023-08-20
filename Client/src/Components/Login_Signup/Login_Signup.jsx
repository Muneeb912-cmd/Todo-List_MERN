import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';

function Login_SignUp() {

  const [justifyActive, setJustifyActive] = useState('tab1');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ name: '', username: '', email: '', password: '' });

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };
  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        console.log('Login successful',data.token);
      } else {
        // Handle login failure (e.g., show an error message)
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });

      if (response.ok) {
        // Signup successful, handle the response accordingly (e.g., redirect or display a message)
        console.log('Signup successful');
      } else {
        // Handle signup failure (e.g., show an error message)
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <MDBContainer className="p-2 my-0 d-flex flex-column w-20">

      <MDBTabs pills justify className='mb-3 mx-5 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>
          <h4>Login Here :</h4>
          <MDBInput
            wrapperClass='mb-4'
            label='Email address'
            id='form1'
            type='email'
            value={loginData.email}
            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
          />
          <MDBInput
            wrapperClass='mb-4'
            label='Password'
            id='form2'
            type='password'
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          />
          <MDBBtn className="mb-4 w-100" onClick={handleLogin}>
            Sign in
          </MDBBtn>
          <p className="text-center">Already got and account? <a onClick={() => { handleJustifyClick('tab1') }} href="#!">Login</a></p>
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>
          <h4>Create Account Here :</h4>
          <MDBInput
            wrapperClass='mb-4'
            label='Name'
            id='form1'
            type='text'
            value={signupData.name}
            onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
          />
          <MDBInput
            wrapperClass='mb-4'
            label='Username'
            id='form1'
            type='text'
            value={signupData.username}
            onChange={(e) => setSignupData({ ...signupData, username: e.target.value })}
          />
          <MDBInput
            wrapperClass='mb-4'
            label='Email'
            id='form1'
            type='email'
            value={signupData.email}
            onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
          />
          <MDBInput
            wrapperClass='mb-4'
            label='Password'
            id='form1'
            type='password'
            value={signupData.password}
            onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
          />
          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>
          <MDBBtn className="mb-4 w-100" onClick={handleSignup}>
            Sign up
          </MDBBtn>
          <p className="text-center">Already got and account? <a onClick={() => { handleJustifyClick('tab1') }} href="#!">Login</a></p>
        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default Login_SignUp;