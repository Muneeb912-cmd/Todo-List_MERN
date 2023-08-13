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
import * as Icon from "react-icons/bs";

function Login_SignUp() {

  const [justifyActive, setJustifyActive] = useState('tab1');

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
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

          <div className="text-center mb-3">
            <p>Sign in with:</p>

         
            <MDBBtn className="mb-2 w-100 text-black border border-dark btn btn-light "><Icon.BsGoogle style={{marginRight:'8px', marginBottom:'3px'}}></Icon.BsGoogle>google</MDBBtn>
            

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

          <div className="d-flex justify-content-between mx-0 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
          <p className="text-center">{`Don't have an account? `}<a onClick={()=>{handleJustifyClick('tab2')}} href="#!">Register</a></p>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <div className="text-center mb-3">
            <p>Sign up with:</p>

            <MDBBtn className="mb-2 w-100 text-black border border-dark btn btn-light "><Icon.BsGoogle style={{marginRight:'8px', marginBottom:'3px'}}></Icon.BsGoogle>google</MDBBtn>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4 ' label='Name' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>

          <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>
          <p className="text-center">Already got and account? <a onClick={()=>{handleJustifyClick('tab1')}} href="#!">Login</a></p>
        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default Login_SignUp;