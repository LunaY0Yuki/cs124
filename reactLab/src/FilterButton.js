import './ToolsButton.css';
import FilterDropUp from "./FilterDropUp.js";
import { useEffect, useRef, useState } from "react"

function FilterButton(props){
    const ref = useRef()

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isMenuOpen])
    return (
        <div className="dropup">
            <button aria-label="Filter" className="accent" id="filter-dropup" type="button" onClick={props.onToolClicked}>
                <i className="material-icons-outlined md-38">filter_alt</i>
            </button>
            {props.showDropUp && <FilterDropUp onFilterOpClicked={props.onFilterOpClicked}
                                               filterState = {props.filterState}
                                               closeDropUp = {props.closeDropUp}/>}
        </div>
    );
}

export default FilterButton;