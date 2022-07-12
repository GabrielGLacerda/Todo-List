import React, { useCallback, useEffect, useState } from 'react'
import api from '../configApi'
import { IFormInputs } from '../types/types'
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai"

function Todo() {

  const [todos, setTodos] = useState<IFormInputs[]>([])

//   const fetchData = async () => {
//     const {data} = await api.get<IFormInputs[]>('/todos')
//     setTodos(data)
// }

  // useEffect(() => {fetchData()}, [todos])

  const getTodos = useCallback(async () => {
    const {data} = await api.get<IFormInputs[]>('/todos')
    setTodos(data)
  }, [])

  useEffect(() => {getTodos()}, [todos  ])

  return (
    <div>
      {todos.map(todo => (
        <li key={todo._id}>{todo.text} 
        <button><AiOutlineEdit /> </button>                  
        <button><AiOutlineDelete /> </button>
        </li>
      ))}
    </div>
  )
}

export default Todo