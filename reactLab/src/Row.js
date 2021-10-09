import {useEffect} from "react";
import './Row.css';
import TextareaAutosize from 'react-textarea-autosize';

function Row(props){
    let textarea_ref = null;

    useEffect(() => {
        // we only want to focus on the text area if it's a new item
        if (props.isNewItem) {
            textarea_ref.focus();
        }
    });

    return (
        <div id={props.id} className={props.completed ? "task-item-completed" : "task-item-uncompleted"}>
            <input onChange={() => {
                props.onItemChanged(props.id, "completed", !props.completed)
            }} type="checkbox" className="check-complete" checked={props.completed}/>
            <TextareaAutosize className="item-name" value={props.item_name}
                              onChange={(e) => props.onItemChanged(props.id, "item_name", e.target.value)}
                              disabled={props.completed}
                              onBlur={(e) => {
                                  if (e.currentTarget.value === "") {
                                      props.onItemDeleted(props.id);
                                  }
                              }}
                              ref={(tag) => (textarea_ref = tag)}
            />
        </div>
    );
}

export default Row;