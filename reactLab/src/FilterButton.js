import './ToolsButton.css';
import FilterDropUp from "./FilterDropUp.js";
import {useState} from "react";

function FilterButton(props){
    return (
        <div className="dropup">
            <button className="accent" id="filter-dropup" type="button" onClick={props.onToolClicked}>
                <i className="material-icons-outlined md-38">filter_alt</i>
            </button>
            {props.showDropUp && <FilterDropUp onFilterOpClicked={props.onFilterOpClicked}
                                               filterState = {props.filterState}
                                               closeDropUp = {props.closeDropUp}/>}
        </div>
    );
}

export default FilterButton;