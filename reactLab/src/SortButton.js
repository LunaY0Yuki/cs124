import './SortButton.css';
import {useEffect, useRef} from "react";

function SortButton(props){
    const ref = useRef();
    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (props.showDropDown && ref.current && !ref.current.contains(e.target)) {
                props.toggleDropDown();
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [props.showDropDown]);


    return (
        <div className="sort-dropdown" ref={ref}>
            <button id={props.showDropDown ? "sort-icon-outlined": "sort-icon"} onClick={props.toggleDropDown}><i className="material-icons-outlined em2">sort</i></button>
            {props.showDropDown && <div className="sort-dropdown-content">
                <button>By Name</button>
                <button>By Date</button>
                <button id="last-option">By Priority</button>
            </div>}
        </div>
    );
}

export default SortButton;