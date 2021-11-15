import { ProSidebar, Menu, MenuItem} from 'react-pro-sidebar';
import { MdOutlinePlaylistAdd } from "react-icons/md";
import {FaAngleUp, FaAngleDown} from "react-icons/fa";
import {TiDelete} from "react-icons/ti";
import './Sidebar.scss';
import { useEffect, useRef, useState} from "react";
// import 'react-pro-sidebar/dist/css/styles.css';
import { useMediaQuery } from 'react-responsive';

function Sidebar(props){
    const ref = useRef();
    
    const [displayIndex, setDisplayIndex] = useState(0);
    const isDesktop = useMediaQuery({minWidth: 992});

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

    // update what lists actually get displayed in the sidebar
    function updateDisplayIndex(change_by){
        // cannot decrease the index anymore
        //  displayIndex === 0 && change_by < 0
        //  cannot  increase the index anymore
        // if list_data len > max display then should change
        // displayIndex === props.list_data.length - props.maxToDisplay && change_by > 0
        // setDisplayIndex(displayIndex + change_by)

        if ((props.list_data.length > props.maxToDisplay) &&
            !(displayIndex === 0 && change_by < 0) &&
            !(displayIndex === props.list_data.length - props.maxToDisplay && change_by > 0)){
            setDisplayIndex(displayIndex + change_by);
        }
    }


    function handleDeleteOnClick(evt, list_id){
            // stop propagating the onClick to parent
            evt.stopPropagation();

            // if we are currently displaying the list that we are deleting
            //   the app will show the default list
            if (props.curr_list_id === list_id) {
                props.onListSelected("default-list");
            }

            props.onListDeleted(list_id);

            // move back one index
            updateDisplayIndex(-1);

    }
    
    // get the subset of list name that we will display
    const displayed_list = props.list_data.slice(displayIndex, displayIndex + props.maxToDisplay);

    return (
        <ProSidebar collapsed={props.collapsed} onClick={() => {
            if (!isDesktop) {
                props.setCollapseState(false);
            }
        }} ref={ref}>
            <Menu iconShape="square">
                <MenuItem id="add-new-list" icon={<MdOutlinePlaylistAdd />} onClick={() => {
                    if (isDesktop || !props.collapsed) {
                        let newListId = props.onListAdded();  // create a new Untitled List in firestore
                        // show the new list
                        console.log("==== added new list ====");
                        props.onListSelected(newListId);
                        // "scroll" to the bottom of the list in the side bar to display the new list
                        if (props.list_data.length > props.maxToDisplay) {
                            setDisplayIndex(props.list_data.length - props.maxToDisplay + 1);
                        }
                    }
                }} >New List</MenuItem>
                <MenuItem
                    id="scroll-up"
                    onKeyPress={(evt)=> {
                        if (evt.key === "Enter"){
                            updateDisplayIndex(-1);
                        }
                    }}
                    onClick={() => updateDisplayIndex(-1)}>
                    <FaAngleUp />
                </MenuItem>
                {displayed_list.map((e) => {
                        return <MenuItem id={e.id}
                                         onKeyPress={(evt)=> {
                                             // if the user is tabbing into the list name and hit enter
                                             if (evt.key === "Enter"){
                                                 if (isDesktop || !props.collapsed) {
                                                     props.onListSelected(e.id)
                                                 }
                                             }
                                         }}
                                         onClick={()=> {
                                            if (isDesktop || !props.collapsed) {
                                                props.onListSelected(e.id)
                                            }
                                         }}>
                            {e.list_name} {(e.id !== "default-list" && (isDesktop || !props.collapsed)) && <TiDelete tabIndex="0"
                            onKeyPress={(evt)=> {
                                // if the user is tabbing into the delete button and hit enter
                                if (evt.key === "Enter"){
                                    handleDeleteOnClick(evt, e.id);
                                }
                            }}
                            onClick={(evt) => handleDeleteOnClick(evt, e.id)}/>}
                        </MenuItem>
                })
                }
                <MenuItem id="scroll-down" onKeyPress={(evt)=> {
                    if (evt.key === "Enter"){
                        updateDisplayIndex(1);
                    }
                }} 
                onClick={() => updateDisplayIndex(1)}><FaAngleDown /></MenuItem>
            </Menu>
        </ProSidebar>
    );
}

export default Sidebar;