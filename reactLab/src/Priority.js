import './Priority.css';
import {useEffect, useRef} from "react";

function Priority(props){
    let displayed_priority = "–";
    if (props.selectedPriority === 1){
        displayed_priority = "L";
    } else if (props.selectedPriority === 2){
        displayed_priority = "M";
    } else if (props.selectedPriority === 3){
        displayed_priority = "H";
    }

    const ref = useRef();  // create a ref to the priority's drop down selector
    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (props.showDropDown && ref.current && !ref.current.contains(e.target)) {
                props.onPriorityClicked();
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    });


    return (
        <div className="dropdown" ref={ref}>
            {props.showDropDown && <div className="dropdown-content">
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