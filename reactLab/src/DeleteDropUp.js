import './ToolsButton.css';

function DeleteDropUp(props){
    function optionClickedHelper(option_name){
        props.onDeleteOpClicked(option_name);
        props.displayModal();
        props.closeDropUp();
    }

    return (
        <div className="dropup-content">

            <button onClick={() => optionClickedHelper("All")}>
                All {props.deleteState === "All" ? <span>&#10003;</span> : null}
            </button>
            <button onClick={() => optionClickedHelper("Completed")}>
                Completed {props.deleteState === "Completed" ? <span>&#10003;</span> : null}
            </button>
            <button onClick={() => optionClickedHelper("Uncompleted")}>
                Uncompleted {props.deleteState === "Uncompleted" ? <span>&#10003;</span> : null}
            </button>
        </div>
    );
}

export default DeleteDropUp;