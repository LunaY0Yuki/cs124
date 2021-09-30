import './ToolsButton.css';
import FilterDropUp from "./FilterDropUp.js";

function FilterButton(){
    return (
        <div className="dropup">
            <button className="accent" id="filter-dropup" type="button">
                <i className="material-icons-outlined md-38">filter_alt</i>
            </button>
            <FilterDropUp />
        </div>
    );
}

export default FilterButton;