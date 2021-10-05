import {useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import App from "./App.js";

function InMemoryApp(props) {
    const [data, setData] = useState(props.initialData);

    function handleItemChanged(itemID, field, newValue){
        function edit_helper(item) {
            if (item.id === itemID){
                item[field] = newValue;
                return item;
            }
            else {
                return item;
            }
        }
        setData(data.map(edit_helper));
    }

    function handleItemDeleted(itemID) {
        setData(data.filter((item) => item.id !== itemID));
    }

    function handleItemAdded(newItemData){
        let newItem = JSON.parse(JSON.stringify(newItemData));
        newItem["id"] = generateUniqueID();
        setData(data.concat(newItem));
    }

    return (<App data={data} onItemChanged={handleItemChanged} onItemDeleted={handleItemDeleted} onItemAdded={handleItemAdded}/>);
}

export default InMemoryApp;