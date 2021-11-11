import {useEffect, useRef, useState} from "react";
import './Row.css';
import TextareaAutosize from 'react-textarea-autosize';
import Priority from "./Priority";

function Row(props){
    const textarea_ref = useRef(null);
    const [itemName, setItemName] = useState(props.item_name);

    function handleKeypress(e) {
        //it triggers by pressing the enter key
        if (e.key === "Enter") {
            e.preventDefault();
            let newId = props.onItemAdded();
            props.changeNewItemId(newId);
        }
    };

    useEffect(() => {
        // we only want to focus on the text area if it's a new item
        if (props.isNewItem) {
            textarea_ref.current.focus();
        }
    });

    return (
        <div id={props.id} className={props.completed ? "task-item-completed" : "task-item-uncompleted"}>
            <input onChange={() => {
                props.onItemChanged(props.id, "completed", !props.completed)
            }} type="checkbox" className="check-complete" checked={props.completed}/>
            <TextareaAutosize className="item-name" value={itemName}
                              onChange={(e) => setItemName(e.target.value)}
                              disabled={props.completed}
                              onBlur={(e) => {
                                  // delete an item if its name is empty and the user clicks out of it
                                  if (e.currentTarget.value === "") {
                                      props.onItemDeleted(props.id);
                                  }

                                  if (props.isNewItem){
                                      // when we click out of a new item
                                      // item list should forget that this row is the newly added item
                                      props.changeNewItemId(null);
                                  }

                                  props.onItemChanged(props.id, "item_name", e.target.value);
                              }}
                              onKeyPress={handleKeypress}
                              ref={textarea_ref}
            />
            <Priority selectedPriority={props.priority}
                      showDropDown={props.showDropDown}
                      onPriorityClicked={props.onPriorityClicked}
                      changePriority={(new_priority) => {
                          props.onItemChanged(props.id, "priority", new_priority);
                          props.onPriorityClicked();
                      }
                      }
            />
        </div>
    );
}

export default Row;