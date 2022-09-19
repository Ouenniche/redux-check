import { ADD, DELETE, DONE, EDIT } from "../type"

export const toggleDone= id=>{
    return{
        type:DONE,
        payload:id,
    };
};

export const deleteTodo = id =>{
    return{
        type:DELETE,
        payload:id,
    };
};

export const editTodo = (id , text) =>{
    return{
        type:EDIT,
        payload:{
            id,
            text,
        },
    };
   
};
export const addTodo = (text) =>{
    return{
        type:ADD,
        payload:text,
    }
};