import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { useState } from 'react';
import {
    MDBContainer,
    MDBBtn,
    MDBInput,
    MDBTextArea
}
    from 'mdb-react-ui-kit';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const today = dayjs();
const tomorrow = dayjs().add(1, 'day');

function AddTodoForm() {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      // Prepare data for submission
      const todoData = {
        title,
        dueDate: date,
        message,
      };
      console.log(todoData);
      try {
        // Send the data to the server
        const response = await fetch('http://localhost:5000/addTodo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(todoData),
        });
  
        // Handle the server response as needed
        if (response.ok) {
          // Data sent successfully, you might want to update UI or show a message
          console.log('Todo added successfully');
        } else {
          console.error('Error adding todo');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    const handleDateChange = (newDate) => {
        setDate(newDate.format('YYYY-MM-DD'));    
      };

    return (
        <MDBContainer className="p-2 my-0 d-flex flex-column w-20">
      <form onSubmit={handleSubmit}>
        <p>Add the data in the following fields</p>
        <MDBInput
          wrapperClass='mb-4 '
          label='Title'
          id='title'
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div style={{ marginBottom: '25px' }} className=' d-flex flex-column'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker   
                value={today}  
                onChange={handleDateChange}
                label="Due Date"               
                minDate={tomorrow}
                views={['year', 'month', 'day']}
            />
          </LocalizationProvider>
        </div>
        <MDBTextArea
          label='Message'
          id='message'
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <MDBBtn type="submit" className="my-4 mb-4 w-100">
          Add Todo
        </MDBBtn>
      </form>
    </MDBContainer>
    );
}

export default AddTodoForm;