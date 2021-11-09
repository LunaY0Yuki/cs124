import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './Sidebar.css';
import { MdOutlinePlaylistAdd } from "react-icons/md";

function Sidebar(props){
    return (
        <ProSidebar>
            <Menu iconShape="square">
                <MenuItem icon={<MdOutlinePlaylistAdd />}>New List</MenuItem>
                {props.list_data.map((e) => {
                    return <MenuItem>{e.list_name}</MenuItem>
                })
                }
            </Menu>
        </ProSidebar>
    );
}

export default Sidebar;