import './Priority.css';

function Priority(props){
    let displayed_priority = "–";
    if (props.selectedPriority === 1){
        displayed_priority = "L";
    } else if (props.selectedPriority === 2){
        displayed_priority = "M";
    } else if (props.selectedPriority === 3){
        displayed_priority = "H";
    }

    return (
        // <div className="dropup">
        //     <button className="accent" id="filter-dropup" type="button" onClick={props.onToolClicked}>
        //         <i className="material-icons-outlined md-38">filter_alt</i>
        //     </button>
        //     {props.showDropUp && <FilterDropUp onFilterOpClicked={props.onFilterOpClicked}
        //                                        filterState = {props.filterState}
        //                                        closeDropUp = {props.closeDropUp}/>}
        // </div>
        <div className="dropdown">
            {/*<button className={"dropbtn"+props.selectedPriority.toString()} onClick={props.onPriorityClicked}>{displayed_priority}</button>*/}
            {props.showDropDown && <div id="priority-dropdown" className="dropdown-content">
                <button onClick = {() => props.changePriority(0)}
                        className={props.selectedPriority === 0 ? "none-selected" : "priority-option"}>None {props.selectedPriority === 0 ? <span>&#10003;</span> : null}</button>
                <button onClick = {() => props.changePriority(1)}
                        className={props.selectedPriority === 1 ? "low-selected" : "priority-option"}>Low {props.selectedPriority === 1 ? <span>&#10003;</span> : null}</button>
                <button onClick = {() => props.changePriority(2)}
                        className={props.selectedPriority === 2 ? "medium-selected" : "priority-option"}>Medium {props.selectedPriority === 2 ? <span>&#10003;</span> : null}</button>
                <button id="high-option" onClick = {() => props.changePriority(3)}
                        className={props.selectedPriority === 3 ? "high-selected" : "priority-option"}>High {props.selectedPriority === 3 ? <span>&#10003;</span> : null}</button>
            </div>}
            {props.showDropDown ? <button id="priority-outline" className={"dropbtn"+props.selectedPriority.toString()} onClick={props.onPriorityClicked}>{displayed_priority}</button> :
                <button className={"dropbtn"+props.selectedPriority.toString()} onClick={props.onPriorityClicked}>{displayed_priority}</button>}
        </div>
    );
}

export default Priority;