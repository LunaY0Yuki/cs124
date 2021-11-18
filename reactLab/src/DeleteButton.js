import './ToolsButton.css';
import DeleteDropUp from './DeleteDropUp.js';

function DeleteButton(props){
    return (
        <div className="dropup">
            <button aria-label="Delete" className="accent" id="delete-dropup" type="button" onClick={props.onToolClicked}>
                <i className="material-icons-outlined md-38">delete_outline</i>
            </button>
            {props.showDropUp && <DeleteDropUp displayModal={props.displayModal}
                                               deleteState={props.deleteState}
                                               onDeleteOpClicked={props.onDeleteOpClicked}/>}
        </div>
    );
}

export default DeleteButton;