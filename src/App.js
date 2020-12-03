import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'
//import {useEffect} from 'react'
import {useState} from 'react'
import { addTodo } from './actions/actionCreator'
import Todo from './Todo';

function App(props) {

  const [todoTitle, setTodoTitle] = useState('')

  // useEffect(() => {
  //   console.log(props.todos)
  // }, [props.todos])

  const addtodo = () =>{
    props.dispatch(
      addTodo(
        {
          id: Math.floor(Math.random() * 1000000),
          title: todoTitle
        }
      )
    )
  }

  return (
    <div className="MainApp">
      <h1>Todo Basic Redux</h1>
      <TextField id="standard-basic" label="Add Todo" onChange={(event)=> setTodoTitle(event.target.value)}/>
      <Button variant="contained" color="primary" onClick={addtodo} id='addTodo'>
        ADD TODO
      </Button >
      {
        props.todos.map(todo => <Todo key={todo.id} id={todo.id} title={todo.title}/>)
      }
    </div>
  );
}

const mapStateToProps = (state)=>{
  return {
    todos : state.todos
  }
}

export default connect(mapStateToProps)(App);
//export default App;
