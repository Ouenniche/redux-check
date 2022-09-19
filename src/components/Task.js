import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleDone } from '../redux/actions/todosAction'
import EditTodo from './EditTodo'

function Task({todo}) {
    const dispatch=useDispatch
  return (
    <div style={{display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    width:"50%",
    margin:"50px auto",
    }}>
        <p style={{textDecoration:todo.isDone ? "line-through":"non"}}>{todo.text}</p>
        <EditTodo todo={todo} />
        <Button variant='danger' onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</Button>
        <Button variant='success' onClick={()=>dispatch(toggleDone(todo.id))}>Done</Button>
    </div>
  )
}

export default Task
