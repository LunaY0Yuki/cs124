import './Modal.css';

function Modal(props){
    let deleteType = ""
    if (props.deleteState === "Completed"){
        deleteType = "completed ";
    } else if (props.deleteState === "Uncompleted"){
        deleteType = "uncompleted ";
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <p>Are you sure that you want to delete <b>all {deleteType}</b>tasks?</p>
                <div id="modal-response">
                    <button type="button" onClick={() => {
                            props.resetDeleteOp();
                            props.hideModal();
                    }}>
                        Cancel
                    </button>
                    <button id="delete-confirm-button" type="button" onClick={() => {
                        props.onDeleteByCategory(props.deleteState);
                        props.hideModal();
                        props.resetDeleteDropup();
                    }}>
                    Delete</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;