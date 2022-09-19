import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

function ListTask() {
    const todos = useSelector(state=>state.todosReducer.todos)
  return (
    <div>
        {todos.map(todos=><Task todo={todos} key={todos.id}/>)}
    </div>
  )
}

export default ListTask
