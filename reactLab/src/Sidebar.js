import { ProSidebar, Menu, MenuItem} from 'react-pro-sidebar';
import { MdOutlinePlaylistAdd } from "react-icons/md";
import {TiDelete} from "react-icons/ti";
import './Sidebar.scss';
import { useEffect, useRef } from "react"
// import 'react-pro-sidebar/dist/css/styles.css';


function Sidebar(props){
    const ref = useRef()

    // const [isMenuOpen, setIsMenuOpen] = useState(false)

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
    })

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
                {props.list_data.map((e) => {
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
            </Menu>
        </ProSidebar>
    );
}

export default Sidebar;