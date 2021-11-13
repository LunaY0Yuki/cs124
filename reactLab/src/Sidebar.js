import { ProSidebar, Menu, MenuItem} from 'react-pro-sidebar';
import { MdOutlinePlaylistAdd } from "react-icons/md";
import {FaAngleUp, FaAngleDown} from "react-icons/fa";
import {TiDelete} from "react-icons/ti";
import './Sidebar.scss';
import { useEffect, useRef, useState} from "react";
// import 'react-pro-sidebar/dist/css/styles.css';


function Sidebar(props){
    const ref = useRef();
    
    const [displayIndex, setDisplayIndex] = useState(0);

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if ((!props.collapsed) && ref.current && !ref.current.contains(e.target)) {
                props.setCollapseState(true);
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    });

    //
    function updateDisplayIndex(change_by){
        // cannot decrease the index anymore
        //  displayIndex === 0 && change_by < 0
        //  cannot  increase the index anymore
        // displayIndex === props.list_data.length - props.maxToDisplay && change_by > 0
        // setDisplayIndex(displayIndex + change_by)
        if (!(displayIndex === 0 && change_by < 0) && !(displayIndex === props.list_data.length - props.maxToDisplay && change_by > 0)){
            setDisplayIndex(displayIndex + change_by);
        }
    }
    
    // get the subset of list name that we will display
    const displayed_list = props.list_data.slice(displayIndex, displayIndex + props.maxToDisplay);
    console.log("list data");
    console.log(props.list_data);
    console.log("displayed list");
    console.log(displayed_list);

    return (
        <ProSidebar collapsed={props.collapsed} onClick={() => props.setCollapseState(false)} ref={ref}>
            <Menu iconShape="square">
                <MenuItem icon={<MdOutlinePlaylistAdd />} onClick={() => {
                    if (!props.collapsed) {
                        let newListId = props.onListAdded();  // create a new Untitled List in firestore
                        // show the new list
                        props.onListSelected(newListId);
                    }
                }} >New List</MenuItem>
                <MenuItem onClick={() => updateDisplayIndex(-1)}><FaAngleUp /></MenuItem>
                {displayed_list.map((e) => {
                        return <MenuItem id={e.id}
                                         onClick={()=> {
                                            if (!props.collapsed) {
                                                props.onListSelected(e.id)
                                            }
                                         }}>
                            {e.list_name} {(e.id !== "default-list" && !props.collapsed) && <TiDelete onClick={(evt)=> {
                                // stop propagating the onClick to parent
                                evt.stopPropagation();

                                // if we are currently displaying the list that we are deleting
                                //   the app will show the default list
                                if (props.curr_list_id === e.id) {
                                    props.onListSelected("default-list");
                                }

                                props.onListDeleted(e.id);
                                }
                            }/>}
                        </MenuItem>
                })
                }
                <MenuItem onClick={() => updateDisplayIndex(1)}><FaAngleDown /></MenuItem>
            </Menu>
        </ProSidebar>
    );
}

export default Sidebar;