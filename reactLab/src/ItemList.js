import './ItemList.css';
import Row from'./Row.js';
import {useState} from "react";


// Define the List component that contain all the items
function ItemList(props){
    const [newItemId, setNewItemId] = useState(null);

    let renderedList = <p id="no-items">No items to do.</p>;

    if (props.data.length > 0) {
        let renderedData = props.data;  // when props.filterState === "all", so we show all

        if (props.filterState === "Completed") {
            renderedData = props.data.filter((e) => e.completed === true);
        } else if (props.filterState === "Uncompleted") {
            renderedData = props.data.filter((e) => e.completed === false);
        }

        renderedList = renderedData.map( e => <Row key={e.id} id={e.id} item_name={e.item_name}
                                               completed={e.completed}
                                               onItemChanged={props.onItemChanged}
                                               onItemDeleted={props.onItemDeleted}
                                               onItemAdded={props.onItemAdded}
                                               isNewItem={e.id===newItemId}
                                               changeNewItemId={(newId) => setNewItemId(newId)}
            />
        );
    }

    return (
        <div>
            <div id="item_list">
                {renderedList}
            </div>
            <button id="add" type="button" onClick={()  => {
                let newId = props.onItemAdded();
                setNewItemId(newId);
            }}>+</button>
        </div>
    );
}

export default ItemList;