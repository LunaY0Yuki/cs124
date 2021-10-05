import './ToolsButton.css';

function FilterDropUp(props){
    return (
        <div className="dropup-content">
            <button onClick={() => {
                props.onFilterOpClicked("Completed");
                props.closeDropUp();
            }}>Completed</button>
            <button onClick={() => {
                props.onFilterOpClicked("Uncompleted");
                props.closeDropUp();
            }}>Uncompleted</button>
        </div>
    );
}

export default FilterDropUp;