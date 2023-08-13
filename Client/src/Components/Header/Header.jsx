import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import * as Icon from "react-icons/bs";
import LogIn_SignIn_PopUp from '../PopUp/Login_SignIn_popup';
import { useState } from 'react';

function OffcanvasExample() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };  
    const handleCloseModal = () => {
        setIsModalOpen(false);
      };
    
    return (
        <>
         <LogIn_SignIn_PopUp isOpen={isModalOpen} onClose={handleCloseModal} />
            {['sm'].map((expand) => (
                <Navbar className='bg-light' key={expand} expand={expand}>
                    <Container >
                        <Navbar.Brand href="#">To-Do List</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
                            <Button type="button" className="btn btn-light border border-all py-1 px-1 col-sm-9 btm-sm font-size"><Icon.BsList style={{ color: 'black', fontSize: '25px' }}></Icon.BsList></Button>
                        </Navbar.Toggle>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            className={'w-75'}
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Menu
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="/" >Home</Nav.Link>
                                    <NavDropdown
                                        title="About"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}                                    >
                                       
                                        <NavDropdown.Item href="#action6">
                                            Developers
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                   
                                    <Nav.Link href="/contact">Contact</Nav.Link>
                                   
                                </Nav>
                                <Button  type="button" onClick={handleOpenModal} className="btn btn-light btn-sm border border-all py-2 px-3 "><Icon.BsPerson style={{ fontSize: '20px', marginRight: '3px', marginTop: "-2px" }}></Icon.BsPerson>Get Started</Button>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
            
        </>
    );
}

export default OffcanvasExample;