import './Priority.css';
import {useEffect, useRef} from "react";

function Priority(props){
    let displayed_priority = "–";
    let aria_priority = "No priority selected.";  // Determine how voiceover should describe the priority button
    if (props.selectedPriority === 1){
        displayed_priority = "L";
        aria_priority = "Low priority.";
    } else if (props.selectedPriority === 2){
        displayed_priority = "M";
        aria_priority = "Medium priority.";
    } else if (props.selectedPriority === 3){
        displayed_priority = "H";
        aria_priority = "High priority.";
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
        document.addEventListener("mousedown", checkIfClickedOutside);

        // if the window size has changed, close the dropdown
        window.addEventListener('resize', () => {
            if (props.showDropDown) {
                props.onPriorityClicked();
            }
        });
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside);
            window.removeEventListener('resize', () => {
                if (props.showDropDown) {
                    props.onPriorityClicked();
                }
            });
        }
    });



    return (
        <div className="dropdown" ref={ref}>
            {props.showDropDown ? <button aria-label={aria_priority} id="priority-outline"
                                          className={"dropbtn"+props.selectedPriority.toString()}
                                          onClick={props.onPriorityClicked}>{displayed_priority}</button> :
                <button aria-label={aria_priority}
                        className={"dropbtn"+props.selectedPriority.toString()}
                        onClick={props.onPriorityClicked}>{displayed_priority}</button>}
            {props.showDropDown && <div className="dropdown-content" style={{top: props.rowYpos}}>
                <button onClick = {() => props.changePriority(0)}
                        aria-label="Priority option: None"
                        className={props.selectedPriority === 0 ? "none-selected" : "priority-option"}>None {props.selectedPriority === 0 ? <span>&#10003;</span> : null}</button>
                <button onClick = {() => props.changePriority(1)}
                        aria-label="Priority option: Low"
                        className={props.selectedPriority === 1 ? "low-selected" : "priority-option"}>Low {props.selectedPriority === 1 ? <span>&#10003;</span> : null}</button>
                <button onClick = {() => props.changePriority(2)}
                        aria-label="Priority option: Medium"
                        className={props.selectedPriority === 2 ? "medium-selected" : "priority-option"}>Medium {props.selectedPriority === 2 ? <span>&#10003;</span> : null}</button>
                <button id="high-option" onClick = {() => props.changePriority(3)}
                        aria-label="Priority option: High"
                        className={props.selectedPriority === 3 ? "high-selected" : "priority-option"}>High {props.selectedPriority === 3 ? <span>&#10003;</span> : null}</button>
            </div>}
        </div>
    );
}

export default Priority;