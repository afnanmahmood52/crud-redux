import {ADD_TODO, DELETE_TODO, UPDATE_TODO} from '../actions/actionTypes'

const todos =[
    // {
    //   id:1,
    //   title: 'Wash Clothes'
    // },
    // {
    //   id:2,
    //   title: 'get books'
    // },
]

// const todos =[
//     {}
// ]

const todosReducer = (state = todos, action)=> {

    switch(action.type){
        // case LOAD_TODO:
        //     return action.todos;
        
        case ADD_TODO:
            //console.log(action.todo)
            return [
                ...state,
                {
                    id:action.todo.id,
                    title:action.todo.title
                }
            ]


        case DELETE_TODO:
            console.log(action.id)
            return [...state.filter(todo => todo.id !== action.id)]
        
        case UPDATE_TODO:
            //console.log(action.id)
            // console.log(action.title)

            const newState = [...state]

            const index = state.findIndex(todo => todo.id === action.id)
            // console.log("To be update")
            // console.log(index)


            console.log(newState[index].title)
            newState[index].title = action.title

            console.log('After Update')
            console.log(newState)

            return newState;
                     
        default:
            return state;
        
    }

}

export default todosReducer;