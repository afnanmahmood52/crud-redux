import React from 'react'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { deleteTodo } from './actions/actionCreator'
import UpdateTodo from './UpdateTodo'


function Todo(props) {

    const delTodo = () =>{
        props.dispatch(
            deleteTodo
            (
                props.id
            )
        )
      }

    // const UpdateTodo = ()=>{
    //     console.log(`update todo with ${props.id}`)
    // }
    
    return (
        <div className="todoItem">
            
            <div>
                <h1>{props.title}</h1>
            </div>
            
            <div className="modalButton">
            <Button variant="contained" color="secondary" onClick={delTodo}>
                DELETE
            </Button >

            {/* <Button variant="contained" color="primary" onClick={UpdateTodo}>
                UPDATE
            </Button > */}
            
            <UpdateTodo title={props.title} key={props.id} id={props.id}/>

            </div>
            

        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
      todos : state.todos
    }
}

export default connect(mapStateToProps)(Todo);