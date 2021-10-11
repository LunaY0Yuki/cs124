import './Modal.css';

function Modal(props){
    return (
        <div className="modal">
            <div className="modal-content">
                {props.children}
                <div id="modal-response">
                    <button type="button" onClick={props.cancelOnClick}>
                     Cancel
                    </button>
                    <button id="confirm-button" type="button" onClick={props.confirmOnClick}>
                        {props.confirm_button_name}</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;