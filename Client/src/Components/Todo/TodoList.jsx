import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody, MDBContainer } from 'mdb-react-ui-kit';
import * as Icon from "react-icons/ai"
import AddTodoModal from '../PopUp/TodoModal';
import { useState } from 'react';
import TodoDetails from './TodoDetails';
import todoData from './dummyData'; // Update the path accordingly


const TodoList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDetailsOpen, setDetailsOpen] = useState(false);
    const [Details, setDetails] = useState({});
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const handleOpenDetails = (todo) => {
        setDetails(todo);
        setDetailsOpen(true);
    };
    const handleCloseDetails = () => {
        setDetailsOpen(false);
    };
    return (
        <>
            <AddTodoModal isOpen={isModalOpen} onClose={handleCloseModal} />
            <MDBContainer className='my-3 h-100' >
                <h1>Your Todo List</h1>
                <hr></hr>
                {isDetailsOpen === true && <TodoDetails Data={Details} handleCloseDetails={handleCloseDetails} />}
                <div className='d-flex justify-content-end my-3'>
                    <MDBBtn className='mx-2' color='secondary' onClick={handleOpenModal}>
                        Add Todo
                    </MDBBtn>
                </div>
              <MDBContainer style={{overflow:'auto'}}>
              <MDBTable  className='my-3' align='middle'>
                    <MDBTableHead>
                        <tr>
                            <th scope='col'>Sr.</th>
                            <th scope='col'>Title</th>
                            <th scope='col' style={{ textAlign: 'center' }}>Status</th>
                            <th scope='col' style={{ textAlign: 'center' }}>Due</th>
                            <th scope='col' style={{ textAlign: 'center' }}>Actions</th>
                            <th scope='col' style={{ textAlign: 'center' }}>Delete</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {todoData.map((todo, index) => (
                            <tr key={todo.id}>
                                <td>{index + 1}.</td>
                                <td>
                                    <p className='fw-normal mb-1'><strong>{todo.title}</strong></p>
                                </td>
                                <td style={{ textAlign: 'center' }}>
                                    <MDBBadge color='success' pill>
                                        {todo.status}
                                    </MDBBadge>
                                </td>
                                <td style={{ textAlign: 'center' }}>{todo.dueDate}</td>
                                <td style={{ textAlign: 'center' }}>
                                    <MDBBtn color='link' rounded size='sm'>
                                        Edit
                                    </MDBBtn>
                                    <MDBBtn onClick={()=>{handleOpenDetails(todo)}} color='link' rounded size='sm'>
                                        Details
                                    </MDBBtn>
                                </td>
                                <td style={{ textAlign: 'center' }}>
                                    <MDBBtn type='btn' className='btn btn-light border border-all py-1 px-3'>
                                        <Icon.AiOutlineClose></Icon.AiOutlineClose>
                                    </MDBBtn>
                                </td>
                            </tr>
                        ))}
                    </MDBTableBody>
                </MDBTable>
              </MDBContainer>
            </MDBContainer>
        </>
    );
}
export default TodoList;