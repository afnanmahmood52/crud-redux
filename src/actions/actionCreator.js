import {ADD_TODO, DELETE_TODO, UPDATE_TODO} from './actionTypes'

// export const loadTodo = (todos) =>{
//     return{
//         type: LOAD_TODO,
//         todos: todos
//     }
// }

export const addTodo = (todo) =>{
    return{
        type: ADD_TODO,
        todo: todo
    }
}

export const deleteTodo = (id) =>{
    return{
        type: DELETE_TODO,
        id: id
    }
}

export const updateTodo = (id,title) =>{
    return{
        type: UPDATE_TODO,
        id: id,
        title: title
    }
}
