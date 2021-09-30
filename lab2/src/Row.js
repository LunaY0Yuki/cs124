import {useState} from "react";
import './Row.css';

function Row(props){
    const [isCompleted, setIsCompleted] = useState(props.completed);
    // handleClick(){
    //  props.updateData("completed", !props.completed);
    // }
    function handleClick(e){
        props.toggleCheck();
        // state stuff here
    }

    if (isCompleted) {
        // props.updateData("item_name", "hello");
        // console.log(data);
        return (
            <div id={props.id} className="task-item-completed">
                <input onChange={handleClick} type="checkbox" className="check-complete" checked={props.completed}/>
                <label htmlFor={props.id}>{props.item_name}</label>
            </div>
        );
    } else{
        return (
            <div id={props.id} className="task-item-uncompleted">
                <input onChange={handleClick} type="checkbox" className="check-complete" />
                <label htmlFor={props.id}>{props.item_name}</label>
            </div>
        );
    }
}

export default Row;