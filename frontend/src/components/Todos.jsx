import { useState } from "react";



export function Todos({todos}){

    let [completed,setCompleted]=useState(todos.completed);
    return (
        <div>
            {
                todos.map(function(todo){
                    return (<div>
                            <h1>{todo.title}</h1>
                            <h2>{todo.description}</h2>
                            <button onClick={()=>{
        fetch("http://localhost:3000/completed",{
            method:"PATCH",
            body: JSON.stringify({
                id:todos._id,
                completed
            }),
            headers:{
            "content-type":"application/json"
            }
        })
        .then(async (res)=>{
            console.log("todos completed and fetched, succesfully");
            setCompleted(res.completed);

        }).catch((err)=>{
            console.log(`fetch failed at completed endpoint: ${err}`);
        })
}}>{todo.completed==true? "Completed": "Mark as Complete"}</button>

                        </div>)
                    
                })
            }
        </div>
    )
}