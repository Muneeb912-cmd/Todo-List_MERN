import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { useState } from 'react';
import {
    MDBContainer,
    MDBBtn,
    MDBInput,
    MDBTextArea 
}
    from 'mdb-react-ui-kit';
import * as Icon from "react-icons/bs";
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const today = dayjs();
const tomorrow = dayjs().add(1, 'day');

function AddTodoForm() {



    return (
        <MDBContainer className="p-2 my-0 d-flex flex-column w-20">
            <p>Add the data in the following fields</p>
            <MDBInput wrapperClass='mb-4 ' label='Title' id='title' type='text' />           
            <div style={{marginBottom:'25px'}} className=' d-flex flex-column'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                label="Due Date"
                    defaultValue={today}
                    minDate={tomorrow}
                    views={['year', 'month', 'day']}
                />
            </LocalizationProvider>
            </div>
            <MDBTextArea  label='Message' id='textAreaExample' rows={4} />
            <MDBBtn className="my-4 mb-4 w-100">Add Todo</MDBBtn>
        </MDBContainer>
    );
}

export default AddTodoForm;