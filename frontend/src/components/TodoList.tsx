import React from 'react'
import { Main } from './styles/Main.styled'
import Todo from './Todo'
import TodoForm from './TodoForm'


function TodoList() {
  return (
    <Main>
     <h1>Quais as atividades de hoje </h1>
     <TodoForm />
     <Todo />
    </Main>
   
  )
}

export default TodoList