import React from 'react';
import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
    MDBContainer
} from 'mdb-react-ui-kit';

export default function TodoDetails({Data,handleCloseDetails}) {
    return (
        <MDBContainer style={{ padding: '15px', borderRadius: '4px' }} className='border border-all bg-secondary'>
            <div className='d-flex justify-content-between'>
                <h3 style={{ color: 'white' }}>Todo Details</h3>
                <MDBBtn onClick={handleCloseDetails} rounded className='text-dark btn-sm' color='light'>
                    hide
                </MDBBtn>
            </div>
            <MDBCard className='my-3'>
                <MDBCardHeader className=' bg-light'><strong>Status : </strong>{Data.status}</MDBCardHeader>
                <MDBCardBody>
                    <MDBCardTitle><strong>{Data.title}</strong></MDBCardTitle>
                    <MDBCardText><p style={{ textAlign: 'justify' }}>Todo-Content</p></MDBCardText>
                    <p>
                        <strong>Created On : </strong>15-8-23
                        <br></br>
                        <strong>Deadline : </strong>{Data.dueDate}
                    </p>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}