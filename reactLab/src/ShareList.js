import Modal from './Modal.js';
import './ShareList.css';

function ShareList(props){
    return (
        <Modal>
            <div id={"share_modal"}>
                <div id={"add_editor_label"}>Share With People</div>
                <div id={"add_editor_field"}>
                    <input type={"text"}/>
                    <button>Add</button>
                </div>
                <div id={"collaborators_label"}>Collaborators</div>
                <div id={"collaborators_list"}></div>
                <button id={"done_button"} onClick={props.onClose}>Done</button>
            </div>
        </Modal>
    );
}

export default ShareList;