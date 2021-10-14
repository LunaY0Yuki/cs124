import './AddButton.css';

function AddButton(props){
    return (
        <button id="add" type="button" onClick={props.addNewItem}>+</button>
    );
}

export default AddButton;