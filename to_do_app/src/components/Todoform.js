import React,{ useState,useContext } from "react";
import {Form,
        Button,
        FormGroup,
        Input,
        InputGroup,
        
} from "reactstrap";
import {v4} from "uuid"; 
import { TodoContext } from "../context/todoContext";
import { ADD_TODO } from "../context/action";

const TodoForm=()=>{
    const[todoString,setTodoString]=useState("");
    const {dispatch}= useContext(TodoContext);

    const handleSubmit=e=>{
        e.preventdefault();
        if(todoString===""){
            return alert("please enter todo")
        }
        const todo={
            todoString,
            id: v4()
        }
        dispatch({
            type:ADD_TODO,
            payload:todo
        })
        setTodoString("");
    }
    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                <Input 
                type="text"
                name="TODO"
                id="TODO"
                placeholder="Your Next TODO"
                value={todoString}
                onChange={e=> setTodoString(e.target.value)}
                />
                
                    <button
                    color="warning">
                    ADD
                    </button>
                
                </InputGroup>
                
            </FormGroup>
        </Form>
    )
}
export default TodoForm;