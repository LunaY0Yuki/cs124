import './App.css';
import ItemList from "./ItemList.js";
import FilterButton from "./FilterButton.js";
import DeleteButton from "./DeleteButton.js";
import SortButton from "./SortButton.js";
import Modal from "./Modal.js";
import Sidebar from "./Sidebar.js";
import Header from "./Header.js";
import ShareList from "./ShareList.js";
import {useState, useEffect, useRef} from "react";
import { useMediaQuery } from 'react-responsive';

function App(props) {
    const [toolSelected, setToolSelected] = useState(null);  // for the drop-up for filter and delete
    const [filterState, setFilterState] = useState("All");
    const [deleteState, setDeleteState] = useState(null);
    const [collapseState, setCollapseState] = useState(true);
    const [modalOn, setModalOn] = useState(false);
    const [shareModalOn, setShareModalOn] = useState(false);
    const [showSortDropDown, setShowSortDropDown] = useState(false);

    const isMobile = useMediaQuery({maxWidth: 600});
    const isLandscape = useMediaQuery({orientation: "landscape"});
    const isDesktop = useMediaQuery({minWidth: 992});

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

    // determine the number of lists to display in the sidebar
    let numOfListToDisplay = 3;
    if (isMobile && !isLandscape) {
        numOfListToDisplay = 10;
    }
    else if (isDesktop) {
        numOfListToDisplay = 12;
    }

    return (
        <div id="overall-app">
            <Sidebar
                 list_data={props.list_data}
                 auth={props.auth}
                 curr_list_id={props.curr_list_id}
                 onListSelected={props.onListSelected}
                 onListAdded={props.onListAdded}
                 onListDeleted={props.onListDeleted}
                 collapsed={collapseState}
                 setCollapseState={setCollapseState}
                 maxToDisplay={numOfListToDisplay}
            />
      <div id="content">
        <Header className="accent"
                curr_list_id={props.curr_list_id}
                curr_list_name={props.curr_list_name}
                curr_list_is_sharable={props.curr_list_is_sharable}
                onListNameChanged = {props.onListNameChanged}
                onShareList = {() => setShareModalOn(true)}
        />
        {props.data.length > 0 && <SortButton
                                    showDropDown = {showSortDropDown}
                                    toggleDropDown = {() => setShowSortDropDown(!showSortDropDown)}
                                    onSortSelected = {props.onSortSelected}
                                    selectedSortOption = {props.selectedSortOption}
                                    />}
        {props.data.length > 0 && <div id="column-labels"><span id="checkbox-label">&#10003;</span> <span id="item-name-label">Item Name</span> <span id="priority-label">Priority</span></div>}
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
                          closeDropUp = {() => setToolSelected(null)}
                          displayModal={() => {setModalOn(true)}}
            />
        </div>
          {modalOn && <Modal>
              <p>Are you sure that you want to delete <b>all {numOfItemsToDelete.toString()} {deleteState !== "All" ? deleteState.toLowerCase() + " ": ""} </b>tasks?</p>
              <div id="modal-response">
                  <button type="button" onClick={() => {
                      setDeleteState(null);
                      setModalOn(false);  // hide the modal
                  }}>
                      Cancel
                  </button>
                  <button id="confirm-button" type="button" onClick={() =>  {
                      props.onDeleteByCategory(deleteState);
                      setToolSelected(null);   //  reset the toolSelected state, so that the dropUp goes away
                      setDeleteState(null);
                      setModalOn(false);  // hide the modal
                  }}>
                      Delete</button>
              </div>
          </Modal>}
          {shareModalOn && <ShareList email={props.email}
                                      curr_list_id={props.curr_list_id}
                                      curr_list_collaborators={props.curr_list_collaborators}
                                      onAddCollaborator={props.onAddCollaborator}
                                      onRemoveCollaborator={props.onRemoveCollaborator}
                                      onClose={() => setShareModalOn(false)}
          />}
      </div>
    </div>
  );
}

export default App;
