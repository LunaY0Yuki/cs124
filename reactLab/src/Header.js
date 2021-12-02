import './App.css';
import SelectionMaintainingInput from "./SelectionMaintainingInput";
import {MdIosShare} from "react-icons/md";

function Header(props){

    function handleKeypress(e) {
        //it triggers by pressing the enter key
        if (e.key === "Enter") {
            e.preventDefault();
            e.target.blur();  // exit out of the textarea
        }
    };

    return (
        <div>
            {props.curr_list_is_sharable && props.curr_list_id !== "default-list-" + props.email &&
                <button id={"share_button"} onClick={props.onShareList}><MdIosShare/></button>}
        <SelectionMaintainingInput type="text" id="list_header" aria-label="To-Do list name. To edit, press arrow key before typing."
                              value={props.curr_list_name}
                              disabled={props.curr_list_id === "default-list-" + props.email}
                              onChange={(e) => props.onListNameChanged(props.curr_list_id, e.target.value)}
                              onKeyPress={handleKeypress}
        />
        </div>
    );
}

export default Header;