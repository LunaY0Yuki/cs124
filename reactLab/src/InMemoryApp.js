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

    function handleItemCategoryDeleted(category) {
        // delete the item based on the category they are in
        if (category === "Completed"){
            setData(data.filter((item) => item.completed === false));
        } else if (category === "Uncompleted") {
            setData(data.filter((item) => item.completed === true));
        } else if (category === "All") {
            setData([]);
        }
    }

    function handleItemAdded(){
        let newId = generateUniqueID();
        let newItem = [{id: newId, name: "", completed: false}];
        setData(data.concat(newItem));

        return newId;
    }

    return (<App data={data} onItemChanged={handleItemChanged}
                 onItemDeleted={handleItemDeleted}
                 onDeleteByCategory={handleItemCategoryDeleted}
                 onItemAdded={handleItemAdded}/>);
}

export default InMemoryApp;