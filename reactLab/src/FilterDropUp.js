import './ToolsButton.css';

function FilterDropUp(props){
    function optionClickedHelper(option_name){
        props.onFilterOpClicked(option_name);
    }

    return (
        <div className="dropup-content">
            <button onClick={() => optionClickedHelper("All")}>
                All {props.filterState === "All" ? <span>&#10003;</span> : null}
            </button>
            <button onClick={() => optionClickedHelper("Completed")}>
                Completed {props.filterState === "Completed" ? <span>&#10003;</span> : null}
            </button>
            <button onClick={() => optionClickedHelper("Uncompleted")}>
                Uncompleted {props.filterState === "Uncompleted" ? <span>&#10003;</span> : null}
            </button>
        </div>
    );
}

export default FilterDropUp;