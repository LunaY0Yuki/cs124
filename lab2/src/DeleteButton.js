import './ToolsButton.css';
import DeleteDropUp from './DeleteDropUp.js';

function DeleteButton(){
    return (
        <div className="dropup">
            <button className="accent" id="delete-dropup" type="button">
                <i className="material-icons-outlined md-38">delete_outline</i>
            </button>
            <DeleteDropUp />
        </div>
    );
}

export default DeleteButton;