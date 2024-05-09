import { useState } from 'react'
import { CreateToDo } from './components/CreateToDo'
import { Todos } from './components/Todos'

function App() {
  const [todos,setTodos]=useState([]);

  fetch("http://localhost:3000/todos")
  .then(async function(res){
    const json=await res.json();
    setTodos(json.todos);
  })

  return (
    <div>
      <CreateToDo setTodos={setTodos}/>
      <Todos todos={todos}/>
      
        
    </div>
  )
}

export default App;
