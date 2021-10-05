import './ToolsButton.css';

function DeleteDropUp(){
    return (
        <div className="dropup-content">
            <button>All</button>
            <button>Completed</button>
            <button>Uncompleted</button>
        </div>
    );
}

export default DeleteDropUp;