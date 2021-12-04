import Modal from './Modal.js';
import './ShareList.css';
import {useState} from "react";

function Collaborator(props){
    return (<div className={"collaborator"}>
        <span className={"collaborator_user_email"}>{props.user_email}</span>
        {props.is_owner ? <span className={"owner_label"}>Owner</span> :
            <span className={"remove_button"} onClick={() => props.onRemoveCollaborator(props.curr_list_id, props.user_email)}>Remove</span>}
    </div>);
}

function ShareList(props){
    const [emailName, setEmailName] = useState("");
    return (
        <Modal>
            <div id={"share_modal"}>
                <div id={"add_editor_label"}>Share With People</div>
                <div id={"add_editor_field"}>
                    <input type={"text"} value={emailName} placeholder={"Enter email:"}
                           onChange={(e) => setEmailName(e.target.value)}/>
                    <button id={"share_add_button"} onClick={() => {
                        props.onAddCollaborator(props.curr_list_id, emailName);
                        // clear the email in the input text box
                        setEmailName("");
                    }}>Add</button>
                </div>
                <div id={"collaborators_label"}>Collaborators:</div>
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