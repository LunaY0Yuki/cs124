import {useState} from "react";
import './Row.css';

function Row(props){

    return (
        <div id={props.id} className={props.completed ? "task-item-completed" : "task-item-uncompleted"}>
            <input onChange={() => {
                props.onItemChanged(props.id, "completed", !props.completed)
            }} type="checkbox" className="check-complete" checked={props.completed}/>
            <input type="text" className="item-name" value={props.item_name}
                   onChange={(e) => props.onItemChanged(props.id, "item_name", e.target.value)}/>
            {/*<label className="item-name" htmlFor={props.id}>{props.item_name}</label>*/}
        </div>
    );
}

export default Row;