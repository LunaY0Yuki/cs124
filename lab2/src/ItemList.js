import './ItemList.css';
import Row from'./Row.js';
import AddButton from "./AddButton.js";

// Define the List component that contain all the items
function ItemList(props){
    let renderedList = <p id="no-items">No items to do.</p>;

    if (props.data.length > 0) {
        let renderedData = props.data;  // when props.filterState === "all", so we show all

        if (props.filterState == "Completed") {
            renderedData = props.data.filter((e) => e.completed == true);
        } else if (props.filterState == "Uncompleted") {
            renderedData = props.data.filter((e) => e.completed == false);
        }

        renderedList = renderedData.map( e => <Row key={e.id} id={e.id} item_name={e.item_name}
                                               completed={e.completed}
                                               onItemChanged={props.onItemChanged}/>
        );
    }

    return (
        <div>
            <div id="item_list">
                {renderedList}
            </div>
            <AddButton />
        </div>
    );
}

export default ItemList;