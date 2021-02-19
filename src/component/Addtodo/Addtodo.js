import React from 'react';
import {connect} from 'react-redux';
import {addtodo} from '../../actions'


const Addtodo = (props) => {
    return (
        <div>
            <form onSubmit={(e) =>{
                e.preventDefault();

                let input = e.target.userInput.value;
                
        
                props.dispatch(addtodo(input));
                e.target.userInput.value = "";

            }} >
                <input type="text" name="userInput">
                </input>
                <button>Add Todo</button>
            </form>
        </div>
    )
}

export default connect() (Addtodo)
