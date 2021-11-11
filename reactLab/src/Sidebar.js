import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './Sidebar.css';
import { MdOutlinePlaylistAdd } from "react-icons/md";
import {TiDelete} from "react-icons/ti";

function Sidebar(props){


    return (
        <ProSidebar>
            <Menu iconShape="square">
                <MenuItem icon={<MdOutlinePlaylistAdd />} onClick={() => {
                    let newListId = props.onListAdded();  // create a new Untitled List in firestore
                    // show the new list
                    props.onListSelected(newListId);
                }} >New List</MenuItem>
                {props.list_data.map((e) => {
                        return <MenuItem id={e.id}
                                         onClick={()=> props.onListSelected(e.id)}>
                            {e.list_name} {(e.id !== "default-list") && <TiDelete onClick={(evt)=> {
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