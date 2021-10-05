import './ToolsButton.css';
import DeleteDropUp from './DeleteDropUp.js';
import {useState} from "react";

function DeleteButton(props){
    return (
        <div className="dropup">
            <button className="accent" id="delete-dropup" type="button" onClick={props.onToolClicked}>
                <i className="material-icons-outlined md-38">delete_outline</i>
            </button>
            {props.showDropUp && <DeleteDropUp />}
        </div>
    );
}

export default DeleteButton;