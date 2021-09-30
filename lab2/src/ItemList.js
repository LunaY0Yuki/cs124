import './ItemList.css';

import Row from'./Row.js';
import AddButton from "./AddButton.js";

// Define the List component that contain all the items
function ItemList(props){
    let renderedList = <p id="no-items">No items to do.</p>;

    if (props.listData.length > 0) {
        renderedList = props.listData.map( (e, index) => <Row key={e.id} id={e.id} item_name={e.item_name}
                                               completed={e.completed}
                                               toggleCheck = {
                                                   () => {
                                                       console.log("my id is: ");
                                                       console.log(index);
                                                       // data[index]["item_name"] = "hello";
                                                       // console.log("before value change: ");
                                                       // console.log(typeof(data[index]["completed"]));
                                                       // console.log(data[index]["completed"]);
                                                       // data[index]["completed"] = !data[index]["completed"];
                                                       // console.log("after value change: ");
                                                       // console.log(data[index]["completed"]);
                                                       // console.log(data);
                                                   }
                                               }/>
        );
    }
    return (
        <div id="item_list">
            {renderedList}
            <AddButton />
        </div>
    );
}

export default ItemList;