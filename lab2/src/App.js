import './App.css';
import ItemList from "./ItemList.js";
import FilterButton from "./FilterButton.js";
import DeleteButton from "./DeleteButton.js";
import {useState} from "react";


function App(props) {
    const [toolSelected, setToolSelected] = useState(null);
    const [filterState, setFilterState] = useState("All");

    function handleToolSelected(tool_name){
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
            <DeleteButton onToolClicked={() => {handleToolSelected("delete")}} showDropUp = {"delete" === toolSelected}/>
        </div>
      </div>
  );
}

export default App;
