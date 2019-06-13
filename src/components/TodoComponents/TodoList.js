import React from 'react';
import Todo from './Todo';



 const TodoList = (props) => {
    return (
        <ul className='unordered-list'>            
            {props.data.map((item) =>  (
                <Todo
                    strikeThru = {props.strikeThru}
                    key={item.id}
                    todo={item}                    
                />                    
            ))}
        </ul>
    );
}

 export default TodoList; 