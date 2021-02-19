import React from 'react'
import {connect} from "react-redux";
import {useDispatch} from "react-redux";
import { deletetodo } from '../../actions';
import {data} from '../'

const List = (props) => {
    const dispatch = useDispatch();
   
    return (
        <ul>
          {props.todos.map((todo , index) => (
              <li key = {index}>{todo.msg}<button onClick={()=>props.dispatch(deletetodo(todo.id))}>  Delete</button></li>
          ))}
        </ul>
    )
}

const mapStateToProps = (state) =>({
    todos:state.todos.data,
})






export default connect(mapStateToProps) (List)
