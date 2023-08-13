import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import * as Icon from "react-icons/bs";
import {
    MDBFooter,
    MDBContainer,    
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
    return (

        <MDBFooter className='text-center ' color='black' bgColor='light'>
            <MDBContainer className='p-4'>
                <section className='mb-4'>
                    <MDBBtn outline color="secondary" floating className='m-1 btn btn-light btn-sm' href='#!' role='button'>
                        <Icon.BsFacebook style={{ fontSize: '18px', color: 'black', marginTop: '2px' }}></Icon.BsFacebook>
                    </MDBBtn>

                    <MDBBtn outline color="dark" floating className='m-1 btn btn-light btn-sm' href='#!' role='button'>
                        <Icon.BsTwitter style={{ fontSize: '18px', color: 'black', marginTop: '2px' }}></Icon.BsTwitter>
                    </MDBBtn>

                    <MDBBtn outline color="dark" floating className='m-1 btn btn-light btn-sm' href='#!' role='button'>
                        <Icon.BsGoogle style={{ fontSize: '18px', color: 'black', marginTop: '2px' }}></Icon.BsGoogle>
                    </MDBBtn>

                    <MDBBtn outline color="dark" floating className='m-1 btn btn-light btn-sm' href='#!' role='button'>
                        <Icon.BsInstagram style={{ fontSize: '18px', color: 'black', marginTop: '2px' }}></Icon.BsInstagram>
                    </MDBBtn>

                    <MDBBtn outline color="dark" floating className='m-1 btn btn-light btn-sm' href='#!' role='button'>
                        <Icon.BsLinkedin style={{ fontSize: '18px', color: 'black', marginTop: '2px' }}></Icon.BsLinkedin>
                    </MDBBtn>

                    <MDBBtn outline color="dark" floating className='m-1 btn btn-light btn-sm' href='#!' role='button'>
                        <Icon.BsGithub style={{ fontSize: '18px', color: 'black', marginTop: '2px' }}></Icon.BsGithub>
                    </MDBBtn>
                </section>
               

                <section className='mb-4'>
                    <p>
                        Streamline operations and enhance efficiency with our user-friendly Department MIS website, your all-in-one solution for managing and optimizing resources.
                    </p>
                </section>


            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright: DukoDevs

            </div>
        </MDBFooter>

    );
}