import { useState } from "react";

export function CreateToDo(props){
    let [title,setTitle]= useState("");
    let [description,setDescription]=useState("")
    return (
    <div>
        <input type="text" placeholder="title" onChange={(e)=>{
            setTitle(e.target.value);
        }}></input><br/>
        <input type="text" placeholder="description" onChange={(e)=>{
            setDescription(e.target.value);
        }}></input><br/>

        <button onClick={()=>{
            fetch("http://localhost:3000/todo",{method:"POST",
                body: JSON.stringify({
                    title: title,
                    description:description,
                }),
                headers:{
                "content-type":"application/json"
                }
            }).then(async function(res){
                const json=await res.json();
                alert("Todo added");
                
            })
        }}>Add a Todo</button>
    </div>
    )
}