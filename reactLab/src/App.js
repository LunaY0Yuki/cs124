import './App.css';
import ItemList from "./ItemList.js";
import FilterButton from "./FilterButton.js";
import DeleteButton from "./DeleteButton.js";
import {useState} from "react";
import Modal from "./Modal.js";

function App(props) {
    const [toolSelected, setToolSelected] = useState(null);  // for the drop-up for filter and delete
    const [filterState, setFilterState] = useState("All");
    const [deleteState, setDeleteState] = useState(null);
    const [modalOn, setModalOn] = useState(null);

    function handleToolSelected(tool_name){
        // if you click on the same tool twice, it will deselect it
        if (toolSelected === tool_name){
            setToolSelected(null);
        } else {
            setToolSelected(tool_name);
        }
    }

    function handleFilterSelected(toolOp){
        if (filterState === toolOp){
            setFilterState("All");
        } else {
            setFilterState(toolOp);
        }
    }


    return (
      <div id="content">
        <h1 className="accent">To-Do List</h1>
        <ItemList {...props} filterState = {filterState}/>
        <div id="tools">
            <FilterButton onToolClicked={() => {handleToolSelected("filter")}}
                          showDropUp = {"filter" === toolSelected}
                          onFilterOpClicked={handleFilterSelected}
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
          {modalOn && <Modal deleteState = {deleteState}
                             resetDeleteOp = {() => setDeleteState(null)}
                             hideModal={() => setModalOn(false)}
                             onDeleteByCategory = {props.onDeleteByCategory}
                             resetDeleteDropup={() => {
                                 setToolSelected(null);  // reset the toolSelected state, so that the dropUp goes away
                                 setDeleteState(null);  // reset the deleteState
                             }}
          />}
      </div>
  );
}

export default App;
