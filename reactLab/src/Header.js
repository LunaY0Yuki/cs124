import './App.css';

function Header(props){
    // const [listName, setListName] = useState(props.curr_list_name);

    function handleKeypress(e) {
        //it triggers by pressing the enter key
        if (e.key === "Enter") {
            e.preventDefault();
            e.target.blur();  // exit out of the textarea
        }
    };

    return (<input type="text" id="list_header"
                              value={props.curr_list_name}
                              disabled={props.curr_list_id === "default-list"}
                              // onChange={(e) => setListName(e.target.value)}
                                onChange={(e) => props.onListNameChanged(props.curr_list_id, e.target.value)
                                }
                              // onBlur={(e) => props.onListNameChanged(props.curr_list_id, e.target.value)
                              //}
                              onKeyPress={handleKeypress}
    />);
}

export default Header;