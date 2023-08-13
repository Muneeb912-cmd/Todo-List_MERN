import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import Login_SignUp from '../Login_Signup/Login_Signup';



export default function LogIn_SignIn_PopUp({ isOpen, onClose }) {
   
  return (
    <>   
      <MDBModal staticBackdrop tabIndex='-1' show={isOpen} setShow={isOpen}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Get Started Here</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={onClose}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            <Login_SignUp/>
               
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={onClose}>
                Close
              </MDBBtn>              
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}