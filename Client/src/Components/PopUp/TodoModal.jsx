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
import AddTodoForm from '../Todo/AddTodoForm';

  
  
  
  export default function AddTodoModal({ isOpen, onClose }) {
     
    return (
      <>   
        <MDBModal staticBackdrop tabIndex='-1' show={isOpen} setShow={isOpen}>
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Add Todo Here</MDBModalTitle>
                <MDBBtn className='btn-close' color='none' onClick={onClose}></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
              <AddTodoForm/>
                 
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