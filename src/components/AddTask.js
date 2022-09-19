import React, { useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions/todosAction';

function AddTask() {
  const [text,setText]=useState('');
  const dispatch = useDispatch();
  return (
    
      <Form style={{width:"40%",margin:"30% auto",display:"flex"}}>
        <FormControl type='text' onChange={e=>setText(e.target.value)}/>
        <Button variant='secondary' onClick={()=>dispatch(addTodo(text))}>Add</Button>
      </Form>
    
  )
}

export default AddTask
