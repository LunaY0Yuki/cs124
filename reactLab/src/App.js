import './App.css';
import ItemList from "./ItemList.js";
import FilterButton from "./FilterButton.js";
import DeleteButton from "./DeleteButton.js";
import SortButton from "./SortButton.js";
import Modal from "./Modal.js";
import Sidebar from "./Sidebar.js";
import Header from "./Header.js";
import {useState, useEffect, useRef} from "react";

function App(props) {
    const [toolSelected, setToolSelected] = useState(null);  // for the drop-up for filter and delete
    const [filterState, setFilterState] = useState("All");
    const [deleteState, setDeleteState] = useState(null);
    const [collapseState, setCollapseState] = useState(true);
    const [modalOn, setModalOn] = useState(null);
    const [showSortDropDown, setShowSortDropDown] = useState(false);


    function handleToolSelected(tool_name){
        // if you click on the same tool twice, it will deselect it
        if (toolSelected === tool_name){
            setToolSelected(null);
        } else {
            setToolSelected(tool_name);
        }
    }

    const ref = useRef(); // create the ref for the tool bar at the bottom

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (toolSelected && ref.current && !ref.current.contains(e.target)) {
                setToolSelected(null);
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [toolSelected]);

    let numOfItemsToDelete = props.data.length;   // if we are deleting all items
    if (deleteState === "Completed") {
        numOfItemsToDelete = props.data.filter((e) => e.completed).length;
    } else if (deleteState === "Uncompleted") {
        numOfItemsToDelete = props.data.filter((e) => !e.completed).length;
    }

    return (
        <div id="overall-app">
            <Sidebar list_data={props.list_data}
                 curr_list_id={props.curr_list_id}
                 onListSelected={props.onListSelected}
                 onListAdded={props.onListAdded}
                 onListDeleted={props.onListDeleted}
                 collapsed={collapseState}
                 setCollapseState={setCollapseState}
            />
      <div id="content">
        <Header className="accent"
                curr_list_id={props.curr_list_id}
                curr_list_name={props.curr_list_name}
                onListNameChanged = {props.onListNameChanged}
        />
        {props.data.length > 0 && <SortButton
                                    showDropDown = {showSortDropDown}
                                    toggleDropDown = {() => setShowSortDropDown(!showSortDropDown)}
                                    onSortSelected = {props.onSortSelected}
                                    selectedSortOption = {props.selectedSortOption}
                                    />}
        {props.data.length > 0 && <div id="column-labels"><span>Item Name</span> <span>Priority</span></div>}
        <ItemList {...props} filterState = {filterState}/>
        <div id="tools" ref={ref}>
            <FilterButton onToolClicked={() => {handleToolSelected("filter")}}
                          showDropUp = {"filter" === toolSelected}
                          onFilterOpClicked={(option) => setFilterState(option)}
                          filterState = {filterState}
                          closeDropUp = {() => setToolSelected(null)}
            />
            <DeleteButton onToolClicked={() => {handleToolSelected("delete")}}
                          showDropUp = {"delete" === toolSelected}
                          deleteState = {deleteState}
                          onDeleteOpClicked = {(deleteOpName) => setDeleteState(deleteOpName)}
                          displayModal={() => {setModalOn(true)}}
            />
        </div>
          {modalOn && <Modal
                             confirm_button_name = "Delete"
                             onClose = {() => {
                                 setDeleteState(null);
                                 setModalOn(false);  // hide the modal
                             }}
                             onOk = {() => {
                                 props.onDeleteByCategory(deleteState);
                                 setToolSelected(null);   //  reset the toolSelected state, so that the dropUp goes away
                             }
                             }>
              <p>Are you sure that you want to delete <b>all {numOfItemsToDelete.toString()} {deleteState !== "All" ? deleteState.toLowerCase() + " ": ""} </b>tasks?</p>
          </Modal>}
      </div>
    </div>
  );
}

export default App;
