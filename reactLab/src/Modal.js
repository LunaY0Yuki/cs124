import './Modal.css';

function Modal(props){
    return (
        <div className="modal">
            <div className="modal-content">
                {props.children}
                <div id="modal-response">
                    <button type="button" onClick={props.onClose}>
                     Cancel
                    </button>
                    <button id="confirm-button" type="button" onClick={() =>  {
                        props.onOk();
                        props.onClose();
                    }}>
                        {props.confirm_button_name}</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;