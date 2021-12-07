import './ItemList.css';
import Row from'./Row.js';
import {useState} from "react";


// Define the List component that contain all the items
function ItemList(props){
    const [newItemId, setNewItemId] = useState(null);
    const [prioritySelected, setPrioritySelected] = useState(null);

    function handlePriorityDropDown(item_id){
        // if you click on the same button twice, it will deselect it. will also toggle priority button and their dropdowns
        if (prioritySelected === item_id){
            setPrioritySelected(null);
        } else {
            setPrioritySelected(item_id);
        }
    }

    function createRowComponent(e){
        return <Row key={e.id} id={e.id} item_name={e.item_name}
             completed={e.completed}
             priority={e.priority}
             showDropDown={e.id === prioritySelected}
             onPriorityClicked={() => handlePriorityDropDown(e.id)}
             onItemChanged={props.onItemChanged}
             onItemDeleted={props.onItemDeleted}
             onItemAdded={props.onItemAdded}
             isNewItem={e.id === newItemId}
             changeNewItemId={setNewItemId}
        />
    }

    let renderedList = <p id="no-items">No items to do.</p>;

    if (props.data.length > 0) {
        let renderedData = props.data.filter((e) => e.id !== newItemId);  // when props.filterState === "all", so we show all

        if (props.filterState === "Completed") {
            renderedData = props.data.filter((e) => e.completed);
        } else if (props.filterState === "Uncompleted") {
            renderedData = props.data.filter((e) => !e.completed);
        }

        // create the rows for items whose id does not match newItemId
        renderedList = renderedData.map((e) => createRowComponent(e));

        if (newItemId){
            // filter out the new item based on newItemId
            // filter returns an array (it should be an array with length 1), so we only want the first one
            let newItemData = props.data.filter((e) => e.id === newItemId);
            if (newItemData.length === 1){
                // append new item to the rendered list so it appears at the end
                renderedList.push(createRowComponent(newItemData[0]));
            }

        }
    }

    return (
        <div>
            <div id="item_list" onScroll={() => setPrioritySelected(null)}>
                {renderedList}
            </div>
            <button aria-label="Add a new item to this list." id="add" type="button" onClick={()  => {
                let newId = props.onItemAdded();
                setNewItemId(newId);
            }}>+</button>
        </div>
    );
}

export default ItemList;