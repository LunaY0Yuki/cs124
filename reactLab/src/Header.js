import './App.css';
import SelectionMaintainingInput from "./SelectionMaintainingInput";

function Header(props){

    function handleKeypress(e) {
        //it triggers by pressing the enter key
        if (e.key === "Enter") {
            e.preventDefault();
            e.target.blur();  // exit out of the textarea
        }
    };

    return (<SelectionMaintainingInput type="text" id="list_header" aria-label="To-Do list name. To edit, press arrow key before typing."
                              value={props.curr_list_name}
                              disabled={props.curr_list_id === "default-list"}
                              onChange={(e) => props.onListNameChanged(props.curr_list_id, e.target.value)}
                              onKeyPress={handleKeypress}
    />);
}

export default Header;