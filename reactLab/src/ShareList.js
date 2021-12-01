import Modal from './Modal.js';
import './ShareList.css';
import {useState} from "react";

function Collaborator(props){
    return (<div>
        <span>{props.user_email}</span>
        {props.is_owner ? <span>Owner</span> :
            <button onClick={() => props.onRemoveCollaborator(props.curr_list_id, props.user_email)}>Remove</button>}
    </div>);
}

function ShareList(props){
    const [emailName, setEmailName] = useState("");
    return (
        <Modal>
            <div id={"share_modal"}>
                <div id={"add_editor_label"}>Share With People</div>
                <div id={"add_editor_field"}>
                    <input type={"text"} value={emailName} onChange={(e) => setEmailName(e.target.value)}/>
                    <button onClick={() => {
                        props.onAddCollaborator(props.curr_list_id, emailName);
                        // clear the email in the input text box
                        setEmailName("");
                    }}>Add</button>
                </div>
                <div id={"collaborators_label"}>Collaborators</div>
                <div id={"collaborators_list"}>
                    {props.curr_list_collaborators.map((e) => <Collaborator curr_list_id={props.curr_list_id}
                                                                            onRemoveCollaborator={props.onRemoveCollaborator}
                                                                            user_email={e}
                                                                            is_owner={e === props.email}/>)}
                </div>
                <button id={"done_button"} onClick={props.onClose}>Done</button>
            </div>
        </Modal>
    );
}

export default ShareList;