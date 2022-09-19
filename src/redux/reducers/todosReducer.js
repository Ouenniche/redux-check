import { ADD, DELETE, DONE, EDIT } from "../type";

const initialState={
    todos:[
    {
        id:1,text:"learn html",isDone:false
    },
    {
        id:2,text:"learn Css",isDone:false
    },
    ],
}

function todoReducers (state = initialState,action){
    switch(action.type){
        case DONE :
            return{
                ...state,
                todos:state.todos.map(todo=>
                    todo.id===action.payload ? ({...todo,isDone:!todo.isDone}):todo),
            };
        case DELETE:
            return{
                ...state,
                todos: state.todos.filter(todo=> todo.id!==action.paykoad)
            };

            case EDIT :
                return{
                    ...state,
                    todos:state.todos.map(todo=>
                        todo.id===action.payload.id ? {...todo, text: action.payload.text }:todo),
                };
                case ADD:
                    return {
                        ...state,
                        todos:[...state.todos,{id:Math.random(),text:action.payload,isDone:false}]
                    }
            default:
        return state;
    };
    
};

export default todoReducers;